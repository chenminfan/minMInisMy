import React, { useState, forwardRef } from 'react'
import { useLocation } from 'react-router-dom';
import './header.scss';

export type NavLeftItemsType = {
  name: string,
  icon?: string,
  link: string,
};
const Link = forwardRef<HTMLLIElement, NavLeftItemsType>(({ name, link, icon }: NavLeftItemsType, ref) => {
  const location = useLocation();
  return (
    <li className='nav-item' ref={ref}>
      <a className={`nav-link ${location.hash === link ? 'active' : ''}`} href={`${link}`}>{name}</a>
    </li>
  )
})

export default function Header(props) {
  const { NAV_LINK } = props;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleMouseLeave = () => setIsNavCollapsed(true);


  return (
    <header className={isNavCollapsed ? '' : 'isNavCollapsed'}>
      <nav className="navbar">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"></a> */}

          <div className={`collapse collapse-nav fade ${isNavCollapsed ? 'show' : ''}`}>
            <ul className="navbar-nav navbar-nav-header">
              {NAV_LINK.map((nav) => <Link name={nav.name} link={nav.link} key={`header_${nav.name}`} />)}
            </ul>
          </div>


          <button className="btn btn-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" onClick={() => { handleNavCollapse() }}>
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span className="material-symbols-outlined">
            home
          </span></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {NAV_LINK.map((nav) => <Link name={nav.name} link={nav.link} key={`header_off_${nav.name}`} />)}
          </ul>
        </div>
      </div>
    </header>
  )
}
