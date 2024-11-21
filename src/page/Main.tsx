import { useState } from 'react'
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
    { name: 'WORK EXPERIENCE', link: '#Work' }
  ]
  const [isNav, setIsNav] = useState('');
  return (
    <>
      <Header NAV_LINK={NAV_LINK} />
      <main>
        <Outlet context={{ NAV_LINK }} />
      </main>
      <Footer />
    </>
  )
}
