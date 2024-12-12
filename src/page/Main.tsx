import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom'
import { firebaseApp } from '@api/Firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, getIdToken } from "firebase/auth";
import 'bootstrap/dist/js/bootstrap.js'
import '@assets/bootstrap.scss';
import '@assets/all.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
import { DATABASEProps } from '@typeTS/dataBase'
export default function Main() {
  const NAV_LINK = [
    { name: 'HOME', link: '/', icon: 'home' },
    { name: 'WEB', link: '/web', icon: 'web' },
    { name: 'WEB DESIGN', link: '/webDesign', icon: 'space_dashboard' },
    { name: 'GRAPHIC DESIGN', link: '/graphic', icon: 'brush' },
  ]
  const [myDataBase, setMyDataBase] = useState<DATABASEProps[]>([]);
  const isLoadingRef = useRef(true);
  const [loadingPage, setLoadingPage] = useState<boolean>(true);
  const db = getDatabase(firebaseApp);
  const dbRef = ref(db)
  const getData = () => {
    isLoadingRef.current = loadingPage
    setLoadingPage(true)
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setMyDataBase(data)
      isLoadingRef.current = false;
      setLoadingPage(false)
    });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header NAV_LINK={NAV_LINK} />
      <main>
        <Outlet context={{ myDataBase, NAV_LINK, loadingPage }} />
      </main>
      <Footer />
    </>
  )
}
