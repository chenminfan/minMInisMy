import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <data className='d-flex align-items-center justify-content-between text-white mb-md-7 mb-4'>
          <ul className="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" className="text-white mx-3" role="link" aria-label="footer-link">
                <i className="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href="#" className="text-white mx-3" role="link" aria-label="footer-link">
                <i className="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href="#" className="text-white mx-3" role="link" aria-label="footer-link">
                <i className="bi bi-line"></i></a>
            </li>
          </ul>
        </data>
        <div className="footer-copyright">© 2024 本網站僅供個人作品使用，不提供商業用途，All Rights Reserved.</div>
      </div>
    </footer >
  )
}
