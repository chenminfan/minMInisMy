import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <HashRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
    <App />
  </HashRouter>
);

reportWebVitals();