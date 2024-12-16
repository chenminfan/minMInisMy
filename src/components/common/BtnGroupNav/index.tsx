import React, { useState, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './btnGroupNav.scss';

type arrayData = {
  category: string,
}
type Props = {
  isTool: boolean,
  navArray: arrayData[],
  PAGE_KEY_WORD: string,
  navOrder: string[],
  valueCategory: string,
  setValueCategory: (string) => void,
  SHOW_ITEM: number
}

export default function BtnGroupNav(props: Props) {
  const { isTool, navArray, PAGE_KEY_WORD, navOrder, valueCategory, setValueCategory = () => { }, SHOW_ITEM = 5 } = props
  const handleClickPrev = (value) => {
    setIndexPage(Math.ceil(value / SHOW_ITEM) === 1 ? 0 : Math.ceil(value / SHOW_ITEM - 1))
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

  const NAV_ORDER_SORT = useMemo(() => {
    return [...navArray]
      .filter((workItem) => {
        if (navOrder.length > 0 && valueCategory !== '') {
          return navOrder.find((item: string) => (workItem.category).includes(item))
        } else {
          return workItem.category
        }
      })
  }, [navArray, navOrder, valueCategory])

  const PORTFOLIO_ID = Array.from(new Set(NAV_ORDER_SORT.map((workItem) => workItem.category)))
  const AVERAGE_PAGE = Math.ceil(PORTFOLIO_ID.length / SHOW_ITEM) - 1;
  const TOTAL_ITEM = navArray.length;
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [indexPage, setIndexPage] = useState<number>(0);

  return (
    <div className="btnGroupNav">
      {isTool && 1 <= indexPage && (
        <button className="btn btnGroupNav-btn" onClick={() => handleClickPrev(currentItem - 1)} disabled={0 === indexPage && indexPage <= AVERAGE_PAGE}>
          <FontAwesomeIcon className="mainIcon" icon={faChevronLeft} size="lg" />

        </button>
      )
      }

      <nav>
        {isTool && ((indexPage !== 0) && (indexPage <= AVERAGE_PAGE)) && <div className="btn-text"><span>...</span></div>}

        <div className="btn-group">
          {indexPage === 0 && <button className={`btn btn-outline-primary main-btn ${valueCategory === PAGE_KEY_WORD ? 'active' : ''}`} type="button" onClick={() => setValueCategory(PAGE_KEY_WORD)}>{`${PAGE_KEY_WORD} ALL`}</button>}

          {PORTFOLIO_ID.slice(0 + currentItem, SHOW_ITEM + currentItem).map((category: string, index) => (
            <button type='button' className={`btn btn-outline-primary main-btn  ${category === valueCategory ? 'active' : ''}`} key={`category_${index}`} aria-current="page" onClick={() => setValueCategory(category)} >{category}</button>
          )
          )}
        </div>

        {isTool && (indexPage < AVERAGE_PAGE) && (<div className="btn-text"><span>...</span></div>)}
      </nav>

      {isTool && (AVERAGE_PAGE > 0 && indexPage < AVERAGE_PAGE) && (
        <button className="btn btnGroupNav-btn" onClick={() => { handleClickNext(currentItem + 1) }} disabled={indexPage >= AVERAGE_PAGE}>
          <FontAwesomeIcon className="mainIcon" icon={faChevronRight} size="lg" />

        </button >
      )}
    </div >
  )
}