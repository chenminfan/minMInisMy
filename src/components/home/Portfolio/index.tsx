import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import BtnGroupNav from "@components/common/BtnGroupNav";
import CardInfo from "@components/common/CardInfo";
import { DATABASEProps } from '@typeTS/dataBase'
import './portfolio.scss'

type dataType = {
  myDataBase: DATABASEProps
}
export default function Portfolio() {

  const { myDataBase } = useOutletContext<dataType>();
  const PAGE_KEY_WORD = 'WEB ALL'
  const ORDER = ["REACT網站開發", "REACT切版", "HTML網站切版", "網站設計"];
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
  const PORTFOLIO = PORTFOLIO_BASE.filter((workItem) => workItem.category).sort((a: any, b: any) => {
    if (!ORDER.includes(a.category)) return 1
    if (!ORDER.includes(b.category)) return -1
    return ORDER.indexOf(a.category) - ORDER.indexOf(b.category)
  })
  const [categoryId, setCategoryId] = useState<string>(PAGE_KEY_WORD)
  const PORTFOLIO_CATEGORY = PORTFOLIO.filter((item) => {
    if (categoryId !== PAGE_KEY_WORD) {
      return item.category.match(categoryId)
    } else {
      return item.category
    }
  })
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="home-section-box home-section-box-portfolio">
            <div className="col-md-9">
              <h2 className="home-title">PORTFOLIO</h2>
              <div className="portfolio-box">
                <nav className="portfolio-navbar">
                  <div className="portfolio-nav">
                    <BtnGroupNav isTool navArray={PORTFOLIO} keyCategory={PAGE_KEY_WORD} navOrder={ORDER} setValueCategory={setCategoryId} valueCategory={categoryId} SHOW_ITEM={4} />
                  </div>
                </nav>

                <div className="portfolio-content">
                  {PORTFOLIO_CATEGORY.map((item, index) => {
                    return (
                      <CardInfo card={item} key={`portfolio_${index}`}></CardInfo>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}