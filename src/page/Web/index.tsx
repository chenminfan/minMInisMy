import React from 'react'
import { useOutletContext, useLocation } from 'react-router-dom';
import PagePortfolioCategory from '@app/components/common/PagePortfolioCategory'

type Props = {}

export default function Web({ }: Props) {
  const location = useLocation();
  const { NAV_LINK } = useOutletContext<any>();
  const NAV_LINK_ID = NAV_LINK.filter(item => item.link.match(location.pathname))
  const PAGE_KEY_WORD = `${NAV_LINK_ID[0].name} ALL`
  const ORDER = ["React", "開發", "切版"] as any;

  return (
    <PagePortfolioCategory ORDER={ORDER} PAGE_KEY_WORD={PAGE_KEY_WORD} />
  )
}