import React, { useState } from 'react'
import LazyLoadImg from "@components/common/LazyLoadImage";
import portfolio from '@api/portfolio.json'
import './portfolio.scss'

export default function Portfolio() {
  const sortOrder = ["網站開發", "React", "網站切版開發", "網站設計"];
  const PORTFOLIO = portfolio.filter((workItem) => workItem.category).sort((a: any, b: any) => {
    if (!sortOrder.includes(a.category)) return 1
    if (!sortOrder.includes(b.category)) return -1
    return sortOrder.indexOf(a.category) - sortOrder.indexOf(b.category)
  })
  const [categoryId, setCategoryId] = useState<string>('all')
  const PORTFOLIO_NAV = Array.from(new Set(PORTFOLIO.map((category) => category.category)))
  const PORTFOLIO_NAV_ID = PORTFOLIO_NAV.find((item) => item)
  const handleNavClick = (nav) => {
    setCategoryId(nav)
  }
  const PORTFOLIO_CATEGORY = PORTFOLIO.filter((item) => {
    if (categoryId !== 'all') {
      return item.category.match(categoryId)
    } else {
      return item
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
                    <div
                      className={`portfolio-nav-item ${categoryId === 'all' ? 'is-active' : ''}`}
                    >
                      <button className="btn btn-outline-primary" type="button" onClick={() => { handleNavClick('all') }}>全部作品</button>
                    </div>
                    {PORTFOLIO_NAV.map((nav) => (
                      <div
                        key={`nev_${nav}`}
                        className={`portfolio-nav-item ${nav === (categoryId ? categoryId : PORTFOLIO_NAV_ID) ? 'is-active' : ''}`}
                      >
                        <button className="btn btn-outline-primary" type="button" onClick={() => { handleNavClick(nav) }}>{nav}</button>
                      </div>
                    )
                    )}
                  </div>
                </nav>
                <div className="portfolio-content">
                  {PORTFOLIO_CATEGORY.map((item, index) => (
                    <div className="portfolio-card" key={`portfolio_${index}`}>
                      <a href="/#" className="portfolio-link">
                        <div className="portfolio-title"><div className="portfolio-title-text">{item.title}</div></div>
                        {item.imageUrl && (
                          <div className={`portfolio-image ${item.category === "一頁式網頁設計" ? 'portfolio-image-webPage' : ''}`}>
                            <div className="img-box">
                              <LazyLoadImg className="" src={require(`../../../assets/image/Portfolio/${item.imageUrl}`)} alt={item.imageUrl} />
                            </div>
                            <div className='portfolio-info'>
                              <div className="portfolio-info-tag">{item.category}</div>
                              <div className="portfolio-info-text">{(item.workTitle).match('Student') ? "學生作品" : item.workTitle}</div>
                            </div>
                          </div>
                        )}

                      </a>
                      <div className="portfolio-tool">
                        {item.link && (<a className="btn" href={item.link}><span className="material-symbols-outlined">
                          open_in_new
                        </span></a>)}
                      </div>
                    </div>
                  )
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