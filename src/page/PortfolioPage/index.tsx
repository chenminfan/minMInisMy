import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperOptions } from 'swiper/types';
import type { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Thumbs, Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useRWD } from '@hook/useRWD'
import Breadcrumb from "@components/common/BreadCrumb";
import BreadcrumbItem from "@components/common/BreadCrumb/BreadcrumbItem";
import Carousel from '@components/common/Carousel'
import LazyLoadImg from "@components/common/LazyLoadImage";
import { DATABASEProps, portfolioProps } from '@typeTS/dataBase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faChevronRight, faChevronLeft, faLink } from '@fortawesome/free-solid-svg-icons'
import './portfolioPage.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

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
  const swiperRef = useRef<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const RWD_DEVICE = useRWD();
  const { categoryId } = useParams();
  const { myDataBase, NAV_LINK, setValueCategory } = useOutletContext<dataType>();
  const PORTFOLIO_BASE = Object.values(myDataBase.portfolio || {})
  const PORTFOLIO_BASE_ITEM: portfolioProps = PORTFOLIO_BASE.find((item) => (categoryId || '').includes(item.id))
  const NAV_LINK_ICON = NAV_LINK.find((item) => item.name.match(PORTFOLIO_BASE_ITEM?.page))
  const IS_IMAGES: string[] = PORTFOLIO_BASE_ITEM?.imageInfo || []
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleLinkClick = (link) => {
    setValueCategory(link)
  }

  const SORT = useMemo(() => {
    return [...IS_IMAGES.concat(PORTFOLIO_BASE_ITEM?.imageUrl || [])]
  }, [PORTFOLIO_BASE_ITEM])

  const SHOW_ITEM = RWD_DEVICE !== "mobile" ? 5 : 3;
  const TOTAL_ITEM = SORT.length;
  const AVERAGE_PAGE = Math.ceil(TOTAL_ITEM / SHOW_ITEM) - 1;
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [indexPage, setIndexPage] = useState<number>(0);

  const handleClickPrev = (value) => {
    setIndexPage(Math.ceil(value / SHOW_ITEM) < 1 ? 0 : Math.ceil(value / SHOW_ITEM - 1))
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
  const swiperModules = {
    thumbs: [FreeMode, Navigation, Thumbs],
    mobile: [Autoplay, Pagination],
    desktop: [Autoplay, Pagination],
  };

  const modules = [
    ...(swiperModules[RWD_DEVICE] ?? []),
    ...(thumbsSwiper ? swiperModules.thumbs : []),
  ];

  const swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:
      RWD_DEVICE === 'mobile' ? 16 :
        RWD_DEVICE === 'tablet' ? 24 : 32,

    allowTouchMove: RWD_DEVICE !== 'desktop',
    loop: true,

    navigation: RWD_DEVICE !== 'mobile',

    autoplay: RWD_DEVICE === 'mobile'
      ? {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }
      : undefined,

    ...(thumbsSwiper && {
      thumbs: { swiper: thumbsSwiper },
    }),

    modules,
  };



  return (
    <div className="page-portfolio" >
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem itemIcon={NAV_LINK[0].icon} itemLink={NAV_LINK[0].link} />
              <BreadcrumbItem itemIcon={NAV_LINK_ICON?.icon} itemLink={`#/category/${NAV_LINK_ICON?.link}`} itemName={NAV_LINK_ICON?.name} />
              <BreadcrumbItem itemName={PORTFOLIO_BASE_ITEM?.category}
                itemLink={`#/category/${NAV_LINK_ICON?.link}`}
                handleClick={() => { handleLinkClick(PORTFOLIO_BASE_ITEM?.category) }}
              />
              <BreadcrumbItem itemName={PORTFOLIO_BASE_ITEM?.title} itemActive />
            </Breadcrumb>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="portfolio-info">
              <div className="portfolio-head">
                <div className="portfolio-info-title">
                  <h3>{PORTFOLIO_BASE_ITEM?.title}</h3>
                </div>
                <div className="portfolio-info-tool">
                  {PORTFOLIO_BASE_ITEM?.link && (
                    <>
                      <a className="portfolio-info-link btn" href={PORTFOLIO_BASE_ITEM?.link}><FontAwesomeIcon className="mainIcon" icon={faLink} size='sm' /></a><span className="portfolio-info-note">(部分連結需申請該網站會員登入)</span>
                    </>
                  )}

                </div>
              </div>

              <div className="portfolio-info-content">{PORTFOLIO_BASE_ITEM?.content}</div>

            </div>
            <div className="portfolio-carousel">
              <Swiper
                slidesPerView={swiperConfig.slidesPerView}
                spaceBetween={swiperConfig.spaceBetween}
                pagination={RWD_DEVICE === 'mobile' ? { clickable: true } : false}
                //不讓使用者觸碰移動slide
                allowTouchMove={swiperConfig.allowTouchMove}
                //反覆循環
                loop={swiperConfig.loop}
                //投影片之間的過渡持續時間（以毫秒為單位），數字愈大跑愈慢
                speed={5500}
                autoplay={swiperConfig.autoplay}
                modules={swiperConfig.modules}
                thumbs={swiperConfig.thumbs}
                className="mySwiper carousel"
              >
                {SORT.length !== 0 && SORT.map((item, index) => (
                  <SwiperSlide key={`${item}_${index}`}>
                    <div className={`w-100 h-100 ${index === 0 && "active"} ${(item.includes('web-page') || item.includes('search-0') || item.includes('height-page') || item.includes('-m-')) && 'carousel-item-page'}`} key={`${item}_${index}`} data-bs-interval="10000">
                      <div className="img-box">
                        <LazyLoadImg src={require(`../../assets/image/Portfolio/${item}`)} className="d-block" alt={PORTFOLIO_BASE_ITEM?.title} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="portfolio-imgInfo">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={0}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper portfolio-imgInfo-imageList"
                >
                  {SORT.length !== 0 && SORT.map((item, index) => (
                    <SwiperSlide key={`${item}_${index}`}>
                      <div className={`${index === 0 && "active"} ${(item.includes('web-page') || item.includes('search-0') || item.includes('height-page') || item.includes('-m-')) && 'carousel-item-page'}`} key={`${item}_${index}`} data-bs-interval="10000">
                        <div className="img-box">
                          <LazyLoadImg src={require(`../../assets/image/Portfolio/${item}`)} className="d-block" alt={PORTFOLIO_BASE_ITEM?.title} />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* <Carousel carouselName="prodCarousel" carouselPre={IS_IMAGES.length > 1} carouselNext={IS_IMAGES.length > 1}>
                <div className="carousel-inner h-100">

                  {SORT.length !== 0 && SORT.map((item, index) => (
                    <div className={`carousel-item h-100 ${index === 0 && "active"} ${(item.includes('web-page') || item.includes('search-0') || item.includes('height-page') || item.includes('-m-')) && 'carousel-item-page'}`} key={`${item}_${index}`} data-bs-interval="10000">
                      <div className="img-box">
                        <LazyLoadImg src={require(`../../assets/image/Portfolio/${item}`)} className="d-block" alt={PORTFOLIO_BASE_ITEM?.title} />
                      </div>
                    </div>
                  ))}

                </div>
              </Carousel> */}
              {/* {SORT.length > 1 && (
                <div className="portfolio-imgInfo">
                  {1 <= indexPage && (
                    <button className="btn btn-primary portfolio-imgInfo-btn portfolio-imgInfo-btn-pre" type="button" role="button" onClick={() => handleClickPrev(currentItem - 1)} disabled={0 === indexPage && indexPage <= AVERAGE_PAGE}>
                      <FontAwesomeIcon className="mainIcon" icon={RWD_DEVICE !== "desktop" ? faChevronLeft : faChevronUp} size={RWD_DEVICE !== "desktop" ? "sm" : "lg"} />
                    </button>
                  )}

                  <div className='portfolio-imgInfo-imageList'>
                    {SORT.slice(0 + currentItem, SHOW_ITEM + currentItem).map((item, index) => (
                      <div className="portfolio-imgInfo-item" data-bs-target="#prodCarousel" data-bs-slide-to={index} key={`${item}_${index}`}>
                        <div className="img-box">
                          <LazyLoadImg src={require(`../../assets/image/Portfolio/${item}`)} className="d-block" alt={require(`../../assets/image/Portfolio/${item}`)} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {(AVERAGE_PAGE > 0 && indexPage < AVERAGE_PAGE) && (
                    <button className="btn btn-primary portfolio-imgInfo-btn portfolio-imgInfo-btn-next" type="button" role="button" onClick={() => { handleClickNext(currentItem + 1) }} disabled={indexPage >= AVERAGE_PAGE}>
                      <FontAwesomeIcon className="mainIcon" icon={RWD_DEVICE !== "desktop" ? faChevronRight : faChevronDown} size={RWD_DEVICE !== "desktop" ? "sm" : "lg"} />

                    </button >
                  )}
                </div>
              )} */}
            </div>


          </div>
        </div>
      </div>
    </div >
  )
}