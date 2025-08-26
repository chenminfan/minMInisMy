import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import './header.scss';

type Props = {
  NAV_LINK?: any,
  setValueCategory?: any,
};
export default function Header(props: Props) {
  const { NAV_LINK, setValueCategory } = props;
  const location = useLocation();
  if (!setValueCategory) {
    return (
      <header className='header header-null'>
        <nav className="navbar">
          <ul className="navbar-nav">
            {NAV_LINK.map((nav) => (
              <li className='nav-item' key={`nav_${nav.link}`} onClick={() => {
                setValueCategory(nav.name);
              }}>
                <a
                  className={`nav-link ${location.pathname === `/category/${nav.link}` || (location.pathname === "/" && nav.name === "HOME") || (location.pathname.includes('portfolio') && location.pathname.slice(11).includes(nav.link)) ? 'is-active' : ''}`}
                  href={(nav.link === '#') ? '#' : `#/category/${nav.link}`}
                  data-gtm-id-name={nav.name}
                >{nav.icon}{nav.name}</a>
              </li>
            ))}
          </ul>

        </nav>
      </header>
    );
  }
  return (
    <header className="header isNavCollapsed">
      <nav className="navbar">
        <div className="container-fluid">

          <div className="collapse collapse-nav fade">
            <ul className="navbar-nav navbar-nav-header">

              {NAV_LINK.map((nav) => (
                <li className='nav-item' key={`nav_${nav.link}`} onClick={() => {
                  setValueCategory(nav.name);
                }}>
                  <a
                    className={`nav-link ${location.pathname === `/category/${nav.link}` || (location.pathname === "/" && nav.name === "HOME") || (location.pathname.includes('portfolio') && location.pathname.slice(11).includes(nav.link)) ? 'is-active' : ''}`}
                    href={(nav.link === '#') ? '#' : `#/category/${nav.link}`}
                  >{nav.icon}{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="btn btn-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" onClick={() => { }}>
          <FontAwesomeIcon className="mainIcon" icon={faBars} />
        </button>
      </nav>
      <div className="offcanvas offcanvas-uiHeader offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {NAV_LINK.map((nav) => (
              <li className='nav-item' key={`nav_${nav.link}`}
                data-bs-dismiss="offcanvas"
                onClick={() => {
                  setValueCategory(nav.name);
                }}
              >
                <a
                  className={`nav-link ${location.pathname === `/category/${nav.link}` || (location.pathname === "/" && nav.name === "HOME") || (location.pathname.includes('portfolio') && location.pathname.slice(11).includes(nav.link)) ? 'is-active' : ''}`}
                  href={(nav.link === '#') ? '#' : `#/category/${nav.link}`}
                >{nav.icon}{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
