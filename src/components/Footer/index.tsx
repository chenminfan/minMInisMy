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
                  <a href="#" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faSquareGithub} size='lg' /></a>
                </li>
                <li className='footer-list-item'>
                  <a href="#" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faCodepen} size='lg' /></a>
                </li>
                <li className='footer-list-item'>
                  <a href="#" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faEnvelope} size='lg' /></a>
                </li>
                <li className='footer-list-item'>
                  <a href="#" className='footer-list-link btn btn-outline-light main-btn'><FontAwesomeIcon icon={faGlobe} size='lg' /></a>
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
            <div className="footer-copyright">© 2024 Copyright <span>MinFan</span> All Rights Reserved.</div>
            <div className="footer-note">本網站僅供個人作品使用，不提供商業用途</div>
          </div>
        </div>
      </div>
    </footer >
  )
}
