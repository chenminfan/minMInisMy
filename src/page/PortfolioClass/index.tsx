import React, { useEffect } from 'react'
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import PagePortfolioCategory from '@app/components/common/PagePortfolioCategory'

export default function PortfolioClass() {
  const { portfolioId } = useParams<string>()
  const classWeb = (type) => {
    switch (type) {
      case 'web':
        return { data: ["REACT網站開發", "REACT切版", "切版"], text: "WEB" };
      case 'webDesign':
        return { data: ["網站設計", "網頁設計"], text: "WEB DESIGN" };
      case 'graphic':
        return { data: ["平面設計", "電子書"], text: "GRAPHIC DESIGN" };
      default:
        return { data: [], text: '' }
    }
  }
  useEffect(() => {
    classWeb(portfolioId)
  }, [portfolioId])
  return (
    <PagePortfolioCategory ORDER={classWeb(portfolioId)?.data} PAGE_KEY_WORD={classWeb(portfolioId)?.text} />
  )
}