import React from 'react'
import { useRWD } from '@hook/useRWD'
import LazyLoadImg from "@components/common/LazyLoadImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// 關鍵修正 1：將備用背景圖片改為符合 Vite 的靜態 import 引入
import defaultBg from '../../../assets/image/background/background-02.png'

import './cardInfo.scss'

type Props = {
  card: {
    id: string,
    page: string;
    category: string,
    workTitle: string,
    title: string,
    imageUrl: string,
    link: string,
  },
}

export default function CardInfo({ card }: Props) {
  const RWD_DEVICE = useRWD();
  const StrTitle = card.title.split('｜');

  const classWeb = (type: string) => {
    switch (type) {
      case 'WEBSITE':
        return 'website';
      case 'WEB DESIGN':
        return 'webDesign';
      case 'GRAPHIC DESIGN':
        return 'graphicDesign'
      default:
        return '';
    }
  }

  // 關鍵修正 2：符合 Vite 的動態相對路徑解析函式
  const getPortfolioImageUrl = (fileName: string) => {
    if (!fileName) return '';
    return new URL(`../../../assets/image/Portfolio/${fileName}`, import.meta.url).href;
  };

  return (
    <div className="cordInfo-card">
      <div className="cordInfo-box">
        <a href={`#/portfolio/${classWeb(card.page)}${card.id}`} className="cordInfo-link">
          {card.imageUrl ? (
            <div className={`cordInfo-image ${card.category.includes("一頁式") ? 'cordInfo-image-webPage' : ''}`}>
              <div className="img-box">
                {/* 使用動態解析函式 */}
                <LazyLoadImg className="" src={getPortfolioImageUrl(card.imageUrl)} alt={card.imageUrl} />
              </div>
              {(card.category || card.workTitle) && <div className='cordInfo-info'>
                {card.category && <div className="cordInfo-info-tag">{card.category}</div>}
                {card.workTitle && <div className="cordInfo-info-text">{(card.workTitle).match('Student') ? "學生作品" : card.workTitle}</div>}
              </div>}
            </div>
          ) : (
            (
              <div className={`cordInfo-image ${card.category.includes("一頁式") ? 'cordInfo-image-webPage' : ''}`}>
                <div className="img-box">
                  {/* 關鍵修正 3：將原本的 require 替換為上面宣告的 defaultBg 變數 */}
                  <LazyLoadImg className="" src={defaultBg} alt="default background" />
                </div>
                {(card.category || card.workTitle) && <div className='cordInfo-info'>
                  {card.category && <div className="cordInfo-info-tag">{card.category}</div>}
                  {card.workTitle && <div className="cordInfo-info-text">{(card.workTitle).match('Student') ? "學生作品" : card.workTitle}</div>}
                </div>}
              </div>
            )
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

        {card.page === "WEBSITE" && <div className="cordInfo-tool">
          {card.link && (
            <a className="btn" href={card.link}><FontAwesomeIcon className="mainIcon" icon={faLink} size='sm' /></a>
          )}
        </div>}
      </div>
    </div >
  )
}
