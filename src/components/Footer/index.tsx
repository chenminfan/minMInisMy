import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faObjectGroup, faLaptopCode, faPaintbrush, faHouseChimney } from '@fortawesome/free-solid-svg-icons'

import './footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <data className='d-flex align-items-center justify-content-between text-white mb-md-7 mb-4'>
          <ul className="d-flex list-unstyled mb-0 h4">
            <li>
              <FontAwesomeIcon className="mainIcon" icon={faObjectGroup} beat />
            </li>
            <li>

            </li>
            <li>

            </li>
          </ul>
        </data>
        <div className="footer-copyright">© 2024 本網站僅供個人作品使用，不提供商業用途，All Rights Reserved.</div>
      </div>
    </footer >
  )
}
