import React, { useEffect, useState } from 'react'
import { useParams, useOutletContext, useLocation } from 'react-router-dom'
import Breadcrumb from "@components/common/BreadCrumb";
import BreadcrumbItem from "@components/common/BreadCrumb/BreadcrumbItem";
import { DATABASEProps, portfolioProps } from '@typeTS/dataBase'

type dataType = {
  myDataBase: DATABASEProps,
  NAV_LINK: {
    name: string,
    link: string,
    icon: string
  }[],
}

export default function PortfolioPage() {
  const { portfolioId } = useParams();
  const { myDataBase, NAV_LINK } = useOutletContext<dataType>();
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
  const PORTFOLIO_BASE_ITEM: portfolioProps = PORTFOLIO_BASE.find((item) => item.id === portfolioId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(PORTFOLIO_BASE_ITEM)

  return (
    <div>

      <Breadcrumb>
        <BreadcrumbItem itemIcon={NAV_LINK[0].icon} itemLink={NAV_LINK[0].link} />
        <BreadcrumbItem itemLink={PORTFOLIO_BASE_ITEM?.title} itemName={PORTFOLIO_BASE_ITEM?.category} />
        <BreadcrumbItem itemName={PORTFOLIO_BASE_ITEM?.title} itemActive />
      </Breadcrumb>
    </div>
  )
}