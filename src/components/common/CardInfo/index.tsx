import React from 'react'
import { useRWD } from '@hook/useRWD'
import LazyLoadImg from "@components/common/LazyLoadImage";

import './cardInfo.scss'

type Props = {
  card: {
    category: string,
    workTitle: string,
    title: string,
    imageUrl: string,
    link: string,
  },
}

export default function CardInfo({ card }: Props) {
  const RWD_DEVICE = useRWD();
  const StrTitle = card.title.split('｜')

  return (
    <div className="cordInfo-card">
      <a href="/#" className="cordInfo-link">

        {card.imageUrl && (
          <div className={`cordInfo-image ${card.category === "一頁式網頁設計" ? 'cordInfo-image-webPage' : ''}`}>
            <div className="img-box">
              <LazyLoadImg className="" src={require(`../../../assets/image/Portfolio/${card.imageUrl}`)} alt={card.imageUrl} />
            </div>
            <div className='cordInfo-info'>
              <div className="cordInfo-info-tag">{card.category}</div>
              <div className="cordInfo-info-text">{(card.workTitle).match('Student') ? "學生作品" : card.workTitle}</div>
            </div>
          </div>
        )}
        <div className="cordInfo-title">
          <div className="cordInfo-title-text">
            {RWD_DEVICE === "mobile" && StrTitle.length >= 2 ? <div>
              {StrTitle.map((strWord, index) => (<div key={`strWord${index}`}>{strWord}</div>))}
            </div> : card.title
            }
          </div>
        </div>
      </a>

      <div className="cordInfo-tool">
        {card.link && (<a className="btn" href={card.link}><span className="material-symbols-outlined">
          open_in_new
        </span></a>)}
      </div>
    </div>
  )
}