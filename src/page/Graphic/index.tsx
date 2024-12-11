import React from 'react'
import { useOutletContext, useLocation } from 'react-router-dom';
import PagePortfolio from '@components/common/PagePortfolio'


export default function Graphic() {
  const location = useLocation();
  const { NAV_LINK } = useOutletContext<any>();
  const NAV_LINK_ID = NAV_LINK.filter(item => item.link.match(location.pathname))
  const PAGE_KEY_WORD = `${NAV_LINK_ID[0].name} ALL`
  const ORDER = ["平面設計", "電子書"] as any;

  return (
    <PagePortfolio ORDER={ORDER} PAGE_KEY_WORD={PAGE_KEY_WORD} />
  )
}