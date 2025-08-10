import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import '@assets/bootstrap.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@assets/bootstrap.scss';
import '@assets/all.scss'
import Header from '@components/Header';
import Footer from '@components/Footer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const allowedDomains = [
  'localhost',
  process.env.REACT_APP_PREVIEW_WN_IP,
  process.env.REACT_APP_PREVIEW_IP_IP,
];
const hostname = window.location.hostname;
const isAllowed = allowedDomains.some(domain =>
  hostname === domain || hostname.endsWith(`.${domain}`)
);
const NAV_LINK = [
  { name: 'HOME', link: '#' },
]
const Blocked = () => (
  <>
    <Header NAV_LINK={NAV_LINK} />
    <main>
      <section className='home-section home-section-first is-show'>
        🔒 目前暫無開放。
      </section>
    </main>
    <Footer />
  </>
);

const AppWrapper = () => {
  // if (shouldRestrict && !isAllowed) return <Blocked />;
  if (process.env.REACT_APP_PREVIEW_RESTRICT && !isAllowed) return <App isBlocked={true} />;
  return <App isBlocked={false} />;
};
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 可改成 'auto' 若不需動畫
  }, [pathname]);

  return null;
};
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <HashRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
    <ScrollToTop />
    <AppWrapper />
  </HashRouter>
);

reportWebVitals();