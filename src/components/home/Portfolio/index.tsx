import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import CardInfo from "@components/common/CardInfo";
import { DATABASEProps } from '@typeTS/dataBase'
import './portfolio.scss'

type dataType = {
  myDataBase: DATABASEProps
}
export default function Portfolio() {

  const { myDataBase } = useOutletContext<dataType>();
  const sortOrder = ["React網站開發", "React切版", "html網站切版", "網站設計", "一頁式網頁設計"];
  const PORTFOLIO = Object.values(myDataBase.portfolio || {}).filter((workItem) => workItem.category).sort((a: any, b: any) => {
    if (!sortOrder.includes(a.category)) return 1
    if (!sortOrder.includes(b.category)) return -1
    return sortOrder.indexOf(a.category) - sortOrder.indexOf(b.category)
  })
  const [categoryId, setCategoryId] = useState<string>('all')
  const PORTFOLIO_NAV = Array.from(new Set(PORTFOLIO.map((category) => category.category)))
  const handleNavClick = (nav) => {
    setCategoryId(nav)
  }
  const PORTFOLIO_CATEGORY = PORTFOLIO.filter((item) => {
    if (categoryId !== 'all') {
      return item.category.match(categoryId)
    } else {
      return item.category
    }
  }).filter((a) => PORTFOLIO_NAV.slice(0, 3).includes(a.category))
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
                    <div className="btn-group" role="group" aria-label="Large button group">
                      <button className={`btn btn-outline-primary ${categoryId === 'all' ? 'active' : ''}`} type="button" onClick={() => { handleNavClick('all') }}>WebAll</button>

                      {PORTFOLIO_NAV.slice(0, 3).map((navItem) => (
                        <button key={`nev_${navItem}`} className={`btn btn-outline-primary ${navItem === categoryId ? 'active' : ''}`} type="button" onClick={() => { handleNavClick(navItem) }}>{navItem}</button>
                      ))}
                    </div>
                  </div>
                </nav>

                <div className="portfolio-content">

                  {PORTFOLIO_CATEGORY.map((item, index) => {
                    return (
                      <CardInfo card={item} key={`portfolio_${index}`}></CardInfo>
                    )
                  }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}