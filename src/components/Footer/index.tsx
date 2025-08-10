import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faCodepen, faNpm, faYarn, faReact, faFontAwesome, faJs, faBootstrap, faHtml5, faSass, faCss3Alt, faCss, faUnsplash } from '@fortawesome/free-brands-svg-icons'

import './footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container-xl'>
        <div className="row">
          <div className="col">
            <div className='footer-info-link'>
              <ul className="footer-list">
                <li className='footer-list-item'>
                  <a href="https://github.com/chenminfan/minMInisMy" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faSquareGithub} size='sm' /></a>
                </li>
                <li className='footer-list-item'>
                  <a href="https://codepen.io/minfan-chen" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faCodepen} size='sm' /></a>
                </li>
                <li className='footer-list-item'>
                  <a href="mailto:mingfan1202job@gmail.com" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faEnvelope} size='sm' /></a>
                </li>
                <li className='footer-list-item'>
                  <a href="https://chenminfan.github.io/purchaseTogether-dev/" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faGlobe} size='sm' /></a>
                </li>
                {/* <li>
              <FontAwesomeIcon icon={faNpm} />
              <FontAwesomeIcon icon={faYarn} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faFontAwesome} />
              <FontAwesomeIcon icon={faBootstrap} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faSass} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faCss} />
              <FontAwesomeIcon icon={faUnsplash} />
            </li> */}
              </ul>
            </div>
            <div className="footer-info">
              <span className="footer-copyright">© 2024 Copyright <span>MinFan</span> All Rights Reserved.</span>
              <div className="footer-note">
                <span className="footer-note">本網站作品相關資訊來源於公司官方為主，僅供參考</span>
                <span className="footer-note">本網站僅供個人作品使用，不提供商業用途</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer >
  )
}
