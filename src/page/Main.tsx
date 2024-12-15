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
import { faObjectGroup, faLaptopCode, faPaintbrush, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
export default function Main() {
  const NAV_LINK = [
    { name: 'HOME', link: '/', icon: (<FontAwesomeIcon className="mainIcon" icon={faHouseChimney} size="sm" />) },
    { name: 'WEB', link: 'web', icon: (<FontAwesomeIcon className="mainIcon" icon={faLaptopCode} size="sm" />) },
    { name: 'WEB DESIGN', link: 'webDesign', icon: (<FontAwesomeIcon className="mainIcon" icon={faObjectGroup} size="sm" />) },
    { name: 'GRAPHIC DESIGN', link: 'graphic', icon: (<FontAwesomeIcon className="mainIcon" icon={faPaintbrush} size="sm" />) },
  ]

  const [valueCategory, setValueCategory] = useState('')


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
      <Header NAV_LINK={NAV_LINK} setValueCategory={setValueCategory} />
      <main>
        <Outlet context={{ myDataBase, NAV_LINK, loadingPage, setValueCategory, valueCategory }} />
      </main>
      <Footer />
    </>
  )
}
