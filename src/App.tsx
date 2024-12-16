import React, { Routes, Route } from 'react-router-dom';
import Main from '@page/Main';
import Home from '@page/Home';
import PortfolioClass from '@app/page/PortfolioClass';
import PortfolioPage from '@page/PortfolioPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Main />} >
        <Route path='/' element={<Home />}></Route>
        <Route path='/category/:portfolioId' element={<PortfolioClass />}></Route>
        <Route path='/portfolio/:categoryId' element={<PortfolioPage />}></Route>
      </Route >
    </Routes >
  )
}
