import React, { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import Breadcrumb from "@components/common/BreadCrumb";
import BreadcrumbItem from "@components/common/BreadCrumb/BreadcrumbItem";
import Carousel from '@components/common/Carousel'
import LazyLoadImg from "@components/common/LazyLoadImage";
import { DATABASEProps, portfolioProps } from '@typeTS/dataBase'
import './portfolioPage.scss'

type dataType = {
  myDataBase: DATABASEProps,
  NAV_LINK: {
    name: string,
    link: string,
    icon: object,
  }[],
  valueCategory: string,
  setValueCategory: (string) => void
}

export default function PortfolioPage() {
  const { portfolioId } = useParams();
  const { myDataBase, NAV_LINK, setValueCategory } = useOutletContext<dataType>();
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
  const PORTFOLIO_BASE_ITEM: portfolioProps = PORTFOLIO_BASE.find((item) => item.id === portfolioId)
  const NAV_LINK_ICON = NAV_LINK.find((item) => item.name.match(PORTFOLIO_BASE_ITEM?.page))
  const IS_IMAGES: string[] = PORTFOLIO_BASE_ITEM?.imageInfo || []
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleLinkClick = (link) => {
    setValueCategory(link)
  }

  return (
    <div className="page-portfolio">
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem itemIcon={NAV_LINK[0].icon} itemLink={NAV_LINK[0].link} />
              <BreadcrumbItem itemIcon={NAV_LINK_ICON?.icon} itemLink={`#/class/${NAV_LINK_ICON?.link}`} itemName={NAV_LINK_ICON?.name} />
              <BreadcrumbItem itemName={PORTFOLIO_BASE_ITEM?.category}
                itemLink={`#/class/${NAV_LINK_ICON?.link}`}
                handleClick={() => { handleLinkClick(PORTFOLIO_BASE_ITEM?.category) }}
              />
              <BreadcrumbItem itemName={PORTFOLIO_BASE_ITEM?.title} itemActive />
            </Breadcrumb>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="portfolio-info">
              <div className="portfolio-info-title"><h3>{PORTFOLIO_BASE_ITEM?.title}</h3></div>
              <div className="portfolio-info-content">{PORTFOLIO_BASE_ITEM?.content}</div>
            </div>
            <div className="portfolio-carousel">
              <Carousel carouselName="prodCarousel" carouselPre={IS_IMAGES.length > 1} carouselNext={IS_IMAGES.length > 1}>
                <div className="carousel-inner h-100">
                  {PORTFOLIO_BASE_ITEM?.imageUrl && <div className={`carousel-item h-100 active ${PORTFOLIO_BASE_ITEM?.imageUrl.includes('height-page') && 'carousel-item-page'}`} data-bs-interval="10000">
                    <div className="img-box">
                      <LazyLoadImg src={require(`../../assets/image/Portfolio/${PORTFOLIO_BASE_ITEM?.imageUrl}`)} className="d-block" alt={PORTFOLIO_BASE_ITEM?.title} />
                    </div>
                  </div>}
                  {IS_IMAGES.length > 1 && (<>
                    {PORTFOLIO_BASE_ITEM?.imageInfo?.map((item, index) => (
                      <div className={`carousel-item h-100 ${(item.includes('height-page') || item.includes('-m-')) && 'item-page'}`} key={`${item}_${index}`} data-bs-interval="10000">
                        <div className="img-box">
                          <LazyLoadImg src={require(`../../assets/image/Portfolio/${item}`)} className="d-block" alt={PORTFOLIO_BASE_ITEM?.title} />

                        </div>
                      </div>
                    ))}
                  </>)}
                </div>
              </Carousel>
              <div className="portfolio-imgInfo">
                {PORTFOLIO_BASE_ITEM?.imageUrl && (
                  <div className="portfolio-imgInfo-item" data-bs-target="#prodCarousel" data-bs-slide-to={0} >
                    <div className="img-box">
                      <LazyLoadImg src={require(`../../assets/image/Portfolio/${PORTFOLIO_BASE_ITEM?.imageUrl}`)} className="d-block" alt={PORTFOLIO_BASE_ITEM?.title} />
                    </div>
                  </div>
                )}
                {PORTFOLIO_BASE_ITEM?.imageInfo?.map((item, index) => (
                  <div className="portfolio-imgInfo-item" data-bs-target="#prodCarousel" data-bs-slide-to={index + 1} key={`${item}_${index}`}>
                    <div className="img-box">
                      <LazyLoadImg src={require(`../../assets/image/Portfolio/${item}`)} className="d-block" alt={PORTFOLIO_BASE_ITEM?.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}