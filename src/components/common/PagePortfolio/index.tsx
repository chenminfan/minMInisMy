import React, { useEffect, useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import CardInfo from "@components/common/CardInfo";
import { DATABASEProps } from '@typeTS/dataBase'
import './webPortfolio.scss'

type dataType = {
  myDataBase: DATABASEProps
}
export default function PagePortfolio({ ORDER, PAGE_KEY_WORD }) {
  const { myDataBase } = useOutletContext<dataType>();
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
  // const ORDER = ["React", "網站", "切版"] as any;
  const [valueCategory, setValueCategory] = useState(PAGE_KEY_WORD)
  const PORTFOLIO_SORT = useMemo(() => {
    return [...PORTFOLIO_BASE]
      .filter((workItem) => {
        if (ORDER.length > 0 && valueCategory !== '') {
          return ORDER.find((item) => (workItem.category).includes(item))
        } else {
          return workItem.category
        }
      })
  }, [ORDER, valueCategory])

  const PORTFOLIO_ID = Array.from(new Set(PORTFOLIO_SORT.map((workItem) => workItem.category)))

  const BREADCRUMB_DATA = {
    HomeId: 'HOME',
    HomeName: 'HOME',
    HomeUrl: '#/',
    WebId: 'WEB',
    WebName: 'WEB',
    WebUrl: '#/web',
  };
  const SHOW_ITEM = 4;
  const AVERAGE_PAGE = Math.ceil(PORTFOLIO_ID.length / SHOW_ITEM) - 1;
  const TOTAL_ITEM = PORTFOLIO_ID.length;
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [indexPage, setIndexPage] = useState<number>(0);

  const PORTFOLIO_CATEGORY = PORTFOLIO_SORT.filter((workItem) => {
    if (valueCategory !== PAGE_KEY_WORD) {
      return workItem.category.match(valueCategory)
    } else {
      return workItem.category
    }

  })

  const handleClickPrev = (value) => {
    setIndexPage(Math.ceil(value / SHOW_ITEM) === 1 ? 0 : Math.ceil(value / SHOW_ITEM))
    if (indexPage <= AVERAGE_PAGE) {
      setCurrentItem(0)
    } else {
      setCurrentItem((value) => {
        if (value >= TOTAL_ITEM - 1) {
          return 0;
        } else {
          return value - SHOW_ITEM;
        }
      })
    }

  }
  const handleClickNext = (value) => {
    setIndexPage(Math.ceil(value / SHOW_ITEM))
    if (indexPage >= AVERAGE_PAGE) {
      setCurrentItem(currentItem)
    } else {
      setCurrentItem((value) => {
        if (value >= TOTAL_ITEM - 1) {
          return 0;
        } else {
          return value + SHOW_ITEM;
        }
      })
    }
  }

  return (
    <div className="page-web">
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <div className="page-breadcrumb">
              <nav aria-label="breadcrumb" className='detail-breadcrumb'>
                <ol className="breadcrumb my-4">
                  <li className="breadcrumb-item"><a className="text-muted" href={BREADCRUMB_DATA.HomeUrl} role="link" aria-label="breadcrumb-link"><span className="material-symbols-outlined">
                    home
                  </span></a></li>
                  <li className="breadcrumb-item"><a className="text-muted" href={BREADCRUMB_DATA.WebUrl} role="link" aria-label="breadcrumb-link">{BREADCRUMB_DATA.WebName}</a></li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">{valueCategory}</li>
                </ol>
              </nav>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="page-nav">
              {1 <= indexPage && (
                <button className="btn page-nav-btn" onClick={() => { handleClickPrev(currentItem - 1) }} disabled={0 === indexPage && indexPage <= AVERAGE_PAGE}>
                  <span className="material-symbols-outlined">
                    arrow_left
                  </span>
                </button>
              )}

              <nav>
                {((indexPage !== 0) && (indexPage <= AVERAGE_PAGE)) && <div className="btn-text"><span>...</span></div>}

                <div className="btn-group">
                  <button className={`btn btn-outline-primary ${valueCategory === PAGE_KEY_WORD ? 'active' : ''}`} type="button" onClick={() => setValueCategory(PAGE_KEY_WORD)}>{PAGE_KEY_WORD}</button>

                  {PORTFOLIO_ID.slice(0 + currentItem, SHOW_ITEM + currentItem).map((category, index) => (
                    <button type='button' className={`btn btn-outline-primary  ${category === valueCategory ? 'active' : ''}`} key={`category_${index}`} aria-current="page" onClick={() => setValueCategory(category)} >{category}</button>
                  )
                  )}
                </div>

                {(indexPage < AVERAGE_PAGE) && (<div className="btn-text"><span>...</span></div>)}
              </nav>

              {(AVERAGE_PAGE > 0 || indexPage < AVERAGE_PAGE) && (
                <button className="btn page-nav-btn" onClick={() => { handleClickNext(currentItem + 1) }} disabled={indexPage >= AVERAGE_PAGE}>
                  <span className="material-symbols-outlined">
                    arrow_right
                  </span>
                </button>
              )}
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="page-content">

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
  )
}