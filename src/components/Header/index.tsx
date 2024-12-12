import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import './header.scss';


export type NavLeftItemsType = {
  name: string,
  icon?: string,
  link: string,
  handleClick: () => void,
};
export default function Header(props) {
  const location = useLocation();
  const { NAV_LINK } = props;

  return (
    <header className="isNavCollapsed">
      <nav className="navbar">
        <div className="container-fluid">

          <div className="collapse collapse-nav fade">
            <ul className="navbar-nav navbar-nav-header">

              {NAV_LINK.map((nav) => (
                <li className='nav-item' key={`nav_${nav.link}`}>
                  <Link
                    className={`nav-link ${nav.link === location.pathname ? 'is-active' : ''}`}
                    to={nav.link}
                  >{nav.icon}{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>


          <button className="btn btn-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" onClick={() => { }}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav >
      <div className="offcanvas offcanvas-uiHeader offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {NAV_LINK.map((nav) => (
              <li className='nav-item' key={`nav_${nav.link}`}>
                <Link
                  className={`nav-link ${nav.link === location.pathname ? 'is-active' : ''}`}
                  to={nav.link}
                >{nav.icon}{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div >
    </header >
  )
}
