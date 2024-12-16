import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import BtnGroupNav from "@components/common/BtnGroupNav";
import CardInfo from "@components/common/CardInfo";
import Breadcrumb from "@components/common/BreadCrumb";
import BreadcrumbItem from "@components/common/BreadCrumb/BreadcrumbItem";
import { DATABASEProps } from '@typeTS/dataBase'
import './portfolioCategory.scss'

type dataType = {
  myDataBase: DATABASEProps,
  NAV_LINK: {
    name: string,
    link: string,
    icon: string
  }[],
  setValueCategory: (string) => void,
  valueCategory: string
}

export default function PagePortfolioCategory({ ORDER, PAGE_KEY_WORD }) {
  const { myDataBase, NAV_LINK, setValueCategory, valueCategory } = useOutletContext<dataType>();
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
  const BREADCRUMB_ID = NAV_LINK.find((item) => item.name === PAGE_KEY_WORD)

  useEffect(() => {
    if (valueCategory === PAGE_KEY_WORD.toLowerCase() || valueCategory === '') {
      setValueCategory(PAGE_KEY_WORD)
    }
  }, [valueCategory, PAGE_KEY_WORD])

  const PORTFOLIO_SORT = PORTFOLIO_BASE.filter((workItem) => {
    if (valueCategory !== '') {
      return ORDER.find((item) => (workItem.category).includes(item))
    }
    return workItem.category
  })

    .sort((a: any, b: any) => {
      if (!ORDER.includes(a.category)) return 1
      if (!ORDER.includes(b.category)) return -1
      return ORDER.indexOf(a.category) - ORDER.indexOf(b.category)
    })

  const PORTFOLIO_CATEGORY = PORTFOLIO_SORT.filter((workItem) => {
    if (valueCategory === PAGE_KEY_WORD) {
      return workItem.category
    } else {
      return workItem.category.match(valueCategory)
    }
  }).sort((a: any, b: any) => {
    return a.title.localeCompare(b.title, 'zh-Hant')
  })
  return (
    <div className="page">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6">
            <div className="page-breadcrumb">
              <Breadcrumb>
                <BreadcrumbItem itemIcon={NAV_LINK[0].icon} itemLink={NAV_LINK[0].link} />
                <BreadcrumbItem itemIcon={BREADCRUMB_ID?.icon} itemLink={`#/category/${BREADCRUMB_ID?.link}`} itemName={BREADCRUMB_ID?.name} />
                <BreadcrumbItem itemName={PAGE_KEY_WORD === valueCategory ? `${PAGE_KEY_WORD} ALL` : valueCategory} itemActive />
              </Breadcrumb>
            </div>
          </div>

          <div className="col-md-6">
            <div className="page-nav">
              <BtnGroupNav isTool navArray={PORTFOLIO_SORT} PAGE_KEY_WORD={PAGE_KEY_WORD} navOrder={ORDER} setValueCategory={setValueCategory} valueCategory={valueCategory} SHOW_ITEM={6} />
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