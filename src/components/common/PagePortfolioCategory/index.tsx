import React, { useMemo, useState } from 'react'
import { useOutletContext, useLocation } from 'react-router-dom';
import BtnGroupNav from "@components/common/BtnGroupNav";
import CardInfo from "@components/common/CardInfo";
import Breadcrumb from "@components/common/BreadCrumb";
import BreadcrumbItem from "@components/common/BreadCrumb/BreadcrumbItem";
import { DATABASEProps } from '@typeTS/dataBase'
import './webPortfolioCategory.scss'

type dataType = {
  myDataBase: DATABASEProps,
  NAV_LINK: {
    name: string,
    link: string,
    icon: string
  }[],
}
export default function PagePortfolioCategory({ ORDER, PAGE_KEY_WORD }) {
  const location = useLocation();
  const { myDataBase, NAV_LINK } = useOutletContext<dataType>();
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

  const BREADCRUMB_ID = NAV_LINK.find((item) => item.link === location.pathname)
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
              <Breadcrumb>
                <BreadcrumbItem itemIcon={NAV_LINK[0].icon} itemLink={NAV_LINK[0].link} />
                <BreadcrumbItem itemLink={BREADCRUMB_ID?.link} itemName={BREADCRUMB_ID?.name} />
                <BreadcrumbItem itemName={valueCategory} itemActive />
              </Breadcrumb>
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