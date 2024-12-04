import React, { useState } from 'react'
import portfolio from '@api/portfolio.json'

type Props = {}

export default function WebPortfolio({ }: Props) {
  const PORTFOLIO = portfolio.filter((workItem) => workItem.category).sort((a: any, b: any) => {
    if (!['平面設計,一頁式網頁設計'].includes(a.category)) return 1
    if (!['平面設計,一頁式網頁設計'].includes(b.category)) return -1
    return ['平面設計,一頁式網頁設計'].indexOf(a.category) - ['平面設計,一頁式網頁設計'].indexOf(b.category)
  })
  const [categoryId, setCategoryId] = useState<string>('all')
  const PORTFOLIO_NAV = Array.from(new Set(PORTFOLIO.map((category) => category.category)))
  const PORTFOLIO_NAV_ID = PORTFOLIO_NAV.find((item) => item)
  const handleNavClick = (nav) => {
    setCategoryId(nav)
  }
  const PORTFOLIO_CATEGORY = PORTFOLIO.filter((item) => {
    if (categoryId !== 'all') {
      return item.category.match(categoryId)
    } else {
      return item.category
    }
  }).filter((a) => PORTFOLIO_NAV.slice(0, 3).includes(a.category))
  return (
    <div>WebPortfolio</div>
  )
}