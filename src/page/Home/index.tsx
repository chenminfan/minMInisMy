import React, { useRef, useEffect, useState } from 'react';
import { useScreen } from '@hook/useScreen'
import IsMy from '@components/home/IsMy'
import About from '@components/home/About'
import Work from '@components/home/Work'
import './home.scss'

const Home = (props) => {
  const [windowHeight]: number[] = useScreen();

  return (
    <div className='home-page'>
      <section className='home-section home-section-first is-show'>
        <IsMy />
      </section>

      <section id="About" className={`home-section home-section-second ${windowHeight > 400 ? 'is-show' : ''}`}>
        <About />
      </section>

      <section id="Portfolio" className={`home-section home-section-portfolio ${windowHeight > 700 ? 'is-show' : ''}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="home-section-box">
                <div className="col-md-9">
                  <h2 className="home-title">PORTFOLIO</h2>
                  <div className="work-content">

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Work" className={`home-section home-section-work ${windowHeight > 900 ? 'is-show' : ''}`}>
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

      <button
        className={`btn btn-primary btn-top ${windowHeight > 200 ? 'is-show' : ''}`}
        onClick={() => {
          window.scrollTo(0, 0)
        }}>
        <span className="material-symbols-outlined">
          keyboard_arrow_up
        </span>
      </button>
    </div>
  );
}

export default Home;