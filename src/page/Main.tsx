import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom'
import { firebaseApp } from '@api/Firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@assets/bootstrap.scss';
import '@assets/all.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
import { DATABASEProps } from '@typeTS/dataBase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faObjectGroup, faDesktop, faPaintbrush, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
export default function Main() {
  const NAV_LINK = [
    { name: 'HOME', link: '/', icon: (<FontAwesomeIcon icon={faHouseChimney} />) },
    { name: 'WEB', link: '/web', icon: (<FontAwesomeIcon icon={faDesktop} />) },
    { name: 'WEB DESIGN', link: '/webDesign', icon: (<FontAwesomeIcon icon={faObjectGroup} />) },
    { name: 'GRAPHIC DESIGN', link: '/graphic', icon: (<FontAwesomeIcon icon={faPaintbrush} />) },
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
  config.autoAddCss = false

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
