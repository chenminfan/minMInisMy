import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js'
import '@assets/bootstrap.scss';
import '@assets/all.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
export default function Main() {
  const NAV_LINK = [
    { name: 'ABOUT', link: '#About' },
    { name: 'PORTFOLIO', link: '#Portfolio' },
    { name: 'WEB', link: '/web' },
    { name: 'WEB DESIGN', link: '/webDesign' },
    { name: 'GRAPHIC DESIGN', link: '/graphic' },
    { name: 'WORK EXPERIENCE', link: '#Work' }
  ]
  const [scrollHeight, setScrollHeight] = useState(0)
  const scrollToAnchor = (hashName) => {
    let scrollDOM = document.getElementById(hashName.link.substring(1))
    setScrollHeight(scrollDOM?.offsetTop || 0)
  }

  useEffect(() => {
    if (scrollHeight !== 0) {
      window.scrollTo(0, scrollHeight - 56)
    }
  }, [scrollHeight])

  return (
    <>
      <Header NAV_LINK={NAV_LINK} scrollToAnchor={scrollToAnchor} />
      <main>
        <Outlet context={{ NAV_LINK, scrollHeight }} />
      </main>
      <Footer />
    </>
  )
}
