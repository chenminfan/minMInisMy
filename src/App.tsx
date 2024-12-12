import React, { Routes, Route } from 'react-router-dom';
import Main from '@page/Main';
import Home from '@page/Home';
import Web from '@page/Web';
import WebDesign from '@page/WebDesign';
import Graphic from '@page/Graphic';
import PortfolioPage from '@page/PortfolioPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Main />} >
        <Route path='/' element={<Home />}></Route>
        <Route path='/web' element={<Web />}></Route>
        <Route path='/webDesign' element={<WebDesign />}></Route>
        <Route path='/graphic' element={<Graphic />}></Route>
        <Route path='/portfolio/:portfolioId' element={<PortfolioPage />}></Route>
      </Route >
    </Routes >
  )
}
