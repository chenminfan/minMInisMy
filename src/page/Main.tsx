import React from 'react';
import { Outlet } from 'react-router-dom'
import { useScreen } from '@hook/useScreen'
import 'bootstrap/dist/js/bootstrap.js'
import '@assets/bootstrap.scss';
import '@assets/all.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
export default function Main() {
  const NAV_LINK = [
    { name: 'HOME', link: '/' },
    { name: 'WEB', link: '/web' },
    { name: 'WEB DESIGN', link: '/webDesign' },
    { name: 'GRAPHIC DESIGN', link: '/graphic' },
  ]

  return (
    <>
      <Header NAV_LINK={NAV_LINK} />
      <main>
        <Outlet context={{}} />
      </main>
      <Footer />
    </>
  )
}
