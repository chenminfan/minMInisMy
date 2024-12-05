import React from 'react'
import LazyLoadImg from "@components/common/LazyLoadImage";
import portfolio from '@api/portfolio.json'
import './portfolio.scss'

type Props = {}
// export const IMG = (imgName) => {
//   return require(`@image/${imgName}`)
// }
export default function Portfolio({ }: Props) {
  const sortOrder = ["web-dev-react", "web-dev", "web-ui-design"];
  const PORTFOLIO = portfolio.filter((workItem) => workItem.category).sort((a: any, b: any) => {
    if (!sortOrder.includes(a.category)) return 1
    if (!sortOrder.includes(b.category)) return -1
    return sortOrder.indexOf(a.category) - sortOrder.indexOf(b.category)
  })
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="home-section-box home-section-box-portfolio">
            <div className="col-md-9">
              <h2 className="home-title">PORTFOLIO</h2>
              <div className="portfolio-content">
                {PORTFOLIO.map((item, index) => (
                  <div className="portfolio-box" key={`portfolio_${index}`}>
                    <div className="portfolio-title"><div className="portfolio-title-text">{item.title}</div></div>
                    {/* {item.imageUrl && (
                      <div className={`portfolio-image ${item.category === "一頁式網頁設計" ? 'portfolio-image-webPage' : ''}`}>
                        <div className="img-box">
                          <LazyLoadImg className="" src={require(`../../../assets/image/Portfolio/${item.imageUrl}`)} alt={item.imageUrl} />
                        </div>
                      </div>
                    )}
                    <div className="portfolio-tool">
                      {item.link && (<a className="btn" href={item.link}><span className="material-symbols-outlined">
                        public
                      </span></a>)}
                    </div> */}
                  </div>
                )
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}