import React, { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import BtnGroupNav from "@components/common/BtnGroupNav";
import CardInfo from "@components/common/CardInfo";
import { DATABASEProps } from '@typeTS/dataBase'
import './webPortfolioCategory.scss'

type dataType = {
  myDataBase: DATABASEProps
}
export default function PagePortfolioCategory({ ORDER, PAGE_KEY_WORD }) {
  const { myDataBase } = useOutletContext<dataType>();
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
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
      .sort((a: any, b: any) => {
        if (!ORDER.includes(a.category)) return 1
        if (!ORDER.includes(b.category)) return -1
        return ORDER.indexOf(a.category) - ORDER.indexOf(b.category)
      })
  }, [ORDER, valueCategory])

  const BREADCRUMB_DATA = {
    HomeId: 'HOME',
    HomeName: 'HOME',
    HomeUrl: '#/',
    WebId: 'WEB',
    WebName: 'WEB',
    WebUrl: '#/web',
  };

  const PORTFOLIO_CATEGORY = useMemo(() => {
    return [...PORTFOLIO_SORT].filter((workItem) => {
      if (valueCategory !== PAGE_KEY_WORD) {
        return workItem.category.match(valueCategory)
      } else {
        return workItem.category
      }

    }).sort((a: any, b: any) => {
      return a.title.localeCompare(b.title, 'zh-Hant')
    })
  }, [PORTFOLIO_SORT, valueCategory, PAGE_KEY_WORD])



  return (
    <div className="page">
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
              <BtnGroupNav isTool navArray={PORTFOLIO_SORT} keyCategory={PAGE_KEY_WORD} navOrder={ORDER} setValueCategory={setValueCategory} valueCategory={valueCategory} SHOW_ITEM={6} />
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="page-content">
              {PORTFOLIO_CATEGORY.map((item, index) => <CardInfo card={item} key={`portfolio_${index}`}></CardInfo>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}