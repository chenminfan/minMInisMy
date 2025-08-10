import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const shouldRestrict = process.env.REACT_APP_PREVIEW_RESTRICT === 'true';
const allowedDomains = ['localhost', '192.168.50.101'];
const isAllowed = allowedDomains.some(domain =>
  window.location.hostname.includes(domain)
);

const Blocked = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    🔒 目前暫無開放。
  </div>
);

const AppWrapper = () => {
  if (shouldRestrict && !isAllowed) return <Blocked />;
  return <App />;
};

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <HashRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
    <AppWrapper />
  </HashRouter>
);

reportWebVitals();