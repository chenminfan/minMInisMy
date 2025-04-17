import React, { useState, useEffect } from 'react';
import { useScreen } from '@hook/useScreen'
import IsMy from '@components/home/IsMy'
import About from '@components/home/About'
import Work from '@components/home/Work'
import Portfolio from '@components/home/Portfolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { useGTM } from '@utils/useGTM';
import './home.scss'

const Home = () => {
  const [windowHeight]: number[] = useScreen();
  const { pushToDataLayer } = useGTM();
  const [navId, setNavId] = useState<string>('')
  const NAV_LINK = [
    { name: '關於我', link: '#About' },
    { name: '作品', link: '#Portfolio' },
    { name: '經歷', link: '#Work' }
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
    <div className='home-page' data-bs-smooth-scroll="true">
      <section className='home-section home-section-first is-show'>
        <IsMy />
      </section>

      <section id="About" className={`home-section home-section-second ${windowHeight > scrollHeight || windowHeight > 120 ? 'is-show' : ''}`}>
        <About />
      </section>

      <section id="Portfolio" className={`home-section home-section-portfolio ${windowHeight > scrollHeight || windowHeight > 1000 ? 'is-show' : ''}`}>
        <Portfolio />
      </section>

      <section id="Work" className={`home-section home-section-work ${windowHeight > scrollHeight || windowHeight > 2400 ? 'is-show' : ''}`}>
        <div className="home-section-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box">
                  <div className="col-md-9">
                    <h2 className="home-title text-white">WORK EXPERIENCE</h2>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Work />
        </div>
      </section>

      <div className="ui-top">
        <div className={`btn-group-vertical ${windowHeight > 300 ? 'is-animation' : ''}`} role="group" aria-label="Vertical button group">
          {NAV_LINK.map((nav) => (
            <button key={`nav_${nav.link}`} type="button" className={`btn btn-sm btn-primary ${nav.link === navId ? 'active' : ''}`}
              onClick={() => {
                scrollToAnchor(nav)
                setNavId(nav.link)
                pushToDataLayer({
                  event: 'buttonClick',
                  buttonText: nav.name,
                  userId: 456,
                });
              }}
            >{nav.name}</button>
          ))}
          <button type="button" className={`btn btn-primary btn-sm btn-top ${windowHeight > 300 ? ' is-show' : ''}`} onClick={() => {
            window.scrollTo(0, 0)
            setNavId('')
          }}><FontAwesomeIcon className="mainIcon" icon={faUpLong} />
          </button>
        </div>

      </div>
    </div >
  );
}

export default Home;