import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

/* 樣式引入 */
import '@assets/bootstrap.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@assets/all.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWrapper = () => {
  return <App isBlocked={false} />;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

root.render(
  <HashRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
    <ScrollToTop />
    <AppWrapper />
  </HashRouter>
);

reportWebVitals();
