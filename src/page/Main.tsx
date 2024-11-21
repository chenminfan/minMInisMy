import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js'
import '@assets/bootstrap.scss';
import 'material-icons/iconfont/material-icons.css';
import '@assets/all.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
export default function Main() {

  return (
    <>
      <Header />
      <main>
        <Outlet context={{}} />
      </main>
      <Footer />
    </>
  )
}
