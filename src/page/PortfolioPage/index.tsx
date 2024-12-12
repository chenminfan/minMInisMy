import React, { useEffect, useState } from 'react'
import { useParams, useOutletContext, useLocation } from 'react-router-dom'
import Breadcrumb from "@components/common/BreadCrumb";
import BreadcrumbItem from "@components/common/BreadCrumb/BreadcrumbItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { DATABASEProps, portfolioProps } from '@typeTS/dataBase'

type dataType = {
  myDataBase: DATABASEProps,
  NAV_LINK: {
    name: string,
    link: string,
    icon: object,
  }[],
}

export default function PortfolioPage() {
  const { portfolioId } = useParams();
  const { myDataBase, NAV_LINK } = useOutletContext<dataType>();
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
  const PORTFOLIO_BASE_ITEM: portfolioProps = PORTFOLIO_BASE.find((item) => item.id === portfolioId)
  const NAV_LINK_ICON = NAV_LINK.find((item) => item.name.match(PORTFOLIO_BASE_ITEM?.page))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(NAV_LINK_ICON)

  return (
    <div className="page">
      <div className="container-xl">
        <div className="row">
          <div className="col"><Breadcrumb>
            <BreadcrumbItem itemIcon={NAV_LINK[0].icon} itemLink={NAV_LINK[0].link} />
            <BreadcrumbItem itemIcon={NAV_LINK_ICON?.icon} itemLink={NAV_LINK_ICON?.link} itemName={NAV_LINK_ICON?.name} />
            <BreadcrumbItem itemName={PORTFOLIO_BASE_ITEM?.title} itemActive />
          </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  )
}