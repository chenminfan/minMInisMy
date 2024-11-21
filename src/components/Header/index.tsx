import React, { useState, forwardRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './header.scss';

export const NAV_LINK = [{ name: 'About', link: '#About' }, { name: 'BBB', link: '#Booo' }]

export type NavLeftItemsType = {
  name: string,
  icon?: string,
  link: string,
};
const Link = forwardRef<HTMLLIElement, NavLeftItemsType>(({ name, link, icon }: NavLeftItemsType, ref) => {
  const location = useLocation();
  console.log(location.hash === link)
  return (
    <li className='nav-item' ref={ref}>
      <a className={`nav-link ${location.hash === link ? 'active' : ''}`} aria-current="page" href="#">{name}</a>
    </li>
  )
})

export default function Header(props) {
  const { headerLink = '#' } = props;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleMouseLeave = () => setIsNavCollapsed(true);


  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#"></a> */}

          <div className={`collapse collapse-nav fade ${isNavCollapsed ? 'show' : ''}`}>
            <ul className="navbar-nav navbar-nav-header">
              {NAV_LINK.map((nav) => <Link name={nav.name} link={nav.link} />)}
            </ul>
          </div>


          <button className="btn btn-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>


          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
