import React, { useState, useRef, useEffect } from 'react'
import { firebaseApp } from '@api/Firebase';
import { getDatabase, ref, get, child, onValue } from "firebase/database";
import './work.scss'
type infoProps = {
  title?: string | null;
  content?: string | null;
  category?: string | null;
  time?: string | null;
  imageUrl?: string | null;
}
type content1Props = {
  courses?: string;
  coursesLink?: string;
}
type WORKProps = {
  work: string;
  workName: string;
  endTime: string;
  startTime: string;
  workTitle: string;
  workTool: string | null;
  infoTitle: string;
  info: infoProps[];
  subInfo?: {
    subInfoTitle?: string | null;
    content?: string;
    content1?: content1Props[];
  };
}
export default function Work({ }) {
  const workValue = useRef(0)
  const [dataBase, setDataBase] = useState<WORKProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const WORK: WORKProps[] = Object.values(dataBase).filter((workItem) => {
    return workItem.endTime.substring(0, 4);
  }).sort((a: any, b: any) => { return b.endTime.substring(0, 4) - a.endTime.substring(0, 4); })
  const db = getDatabase(firebaseApp);
  const dbRef = ref(db, 'work')
  const getData = () => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setDataBase(data)
    });
  }
  useEffect(() => {
    getData()
  }, [])
  const handleClickPre = (number) => {
    if (number > 0) {
      setCurrentPage(--number)
    }
  }
  const handleClickNext = (number) => {
    if (number < WORK.length - 1) {
      setCurrentPage(++number)
    }
  }
  const handleClickButton = (number) => {
    setCurrentPage(number)
  }
  const stepBaredT = ((350 / WORK.length) * (currentPage))
  const stepBared = ((100 / ((WORK.length - 1)) * (currentPage)))
  const stepBar = ((100 / ((WORK.length - 1)) * (currentPage - 1)))
  return (
    <div className="workData" >

      <div className='work-group-top'>
        <div className="work-group-inner" style={{ transform: `${currentPage === 0 ? `translate(${(currentPage)}px )` : `translate(${-(stepBaredT)}px )`}` }}>
          <div className="work-year-line">
            <div className="work-year-line-progress progress" role="progressbar" aria-label="work-year-line" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar" aria-label="progress-one" style={{ width: `${currentPage > 0 ? stepBar : 0}%` }}></div>
              <div className="progress-bar-two" aria-label="progress-two" style={{ width: `${currentPage > 1 ? stepBared : 0}%` }}></div>
            </div >
          </div>
          {WORK.map((item, index) => (
            <div
              className={`work-year ${index === currentPage ? 'is-show' : ''} ${currentPage > index ? 'is-disabled' : ''} ${item.work.match('Student') ? 'iconYear' : ''}`}
              onClick={() => { handleClickButton(index) }} key={`WORK_EXPERIENCE_${item.work}`}>
              {item.work.match('Student') ? (
                <div className="work-year-point work-year-point-icon"><span className="material-symbols-outlined"> school</span></div>
              ) : (
                <div className="work-year-point"></div>
              )}
              <div className="work-year-text">{item.endTime.substring(0, 4)}</div>
            </div>
          ))}
        </div>

      </div>
      <div className="work-group">
        <div className="work-group-toolbar">
          <div className={`workData-btn workData-btn-pre ${currentPage > 0 ? '' : 'is-disabled'}`} onClick={() => { handleClickPre(currentPage) }}>
            <div className="button">
              <span className="material-symbols-outlined">
                arrow_back_ios_new
              </span>
            </div>
          </div>
          <div className={`workData-btn workData-btn-next ${currentPage < WORK.length - 1 ? '' : 'is-disabled'}`} onClick={() => { handleClickNext(currentPage) }}>
            <div className="button">
              <span className="material-symbols-outlined" >
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
        {WORK.map((item, index) => {
          workValue.current = index
          return (
            <div className={`work-group-box ${index === currentPage ? 'is-show' : ''}`} key={`WORK_EXPERIENCE_${item.work}`}>
              <div className="work-box">
                <div className="work-heading">
                  <div className="work-heading-title"><span className="material-symbols-outlined">
                    workspace_premium
                  </span>
                    <h3>{item.workName}</h3></div>
                  <div className="work-time">{item.startTime}~{item.endTime}</div>
                </div>
                {item.workTitle && <div className="work-content">
                  <div className="work-content-title">{item.workTitle}</div>
                  <div className="work-content-tool">{item.workTool}</div></div>}

                {item.info && (<div className="work-info">
                  <div className='work-info-title'><h5>{item.infoTitle}</h5></div>
                  <ol className="list-group list-group-flush">
                    {item.info.map((info) => (
                      info.title && <li className="list-group-item" key={`info_${info.title}`}>
                        <div className='work-info-title'>{info.title}</div>
                        <div className='work-info-content'>{info.content}</div>
                      </li>
                    ))}
                  </ol>
                </div>)}
                {item?.subInfo && <div className="work-info">
                  <div className='work-info-title'><h5>{item?.subInfo?.subInfoTitle}</h5></div>
                  <div className='work-info-content'>{item?.subInfo?.content}<span>{item?.subInfo?.content1 && item?.subInfo?.content1?.slice(0, 1).map((item, index) => (
                    <a key={`coursesLink0${item.coursesLink}`} href={item.coursesLink}>{item.courses}</a>
                  ))}
                    {item?.subInfo?.content1 && item?.subInfo?.content1?.slice(1).map((item, index) => (
                      <a key={`coursesLink1${item.coursesLink}`} href={item.coursesLink}>、{item.courses}</a>
                    ))}</span>
                  </div>
                </div>}
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}