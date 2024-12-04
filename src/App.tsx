import React, { Routes, Route } from 'react-router-dom';
import Main from '@page/Main';
import Home from '@page/Home';
import WebPortfolio from '@page/WebPortfolio';

export default function App() {
  return (
    <Routes>
      <Route element={<Main />} >
        <Route path='/' element={<Home />}></Route>
        <Route path='/web' element={<WebPortfolio />}></Route>
      </Route >
    </Routes >
  )
}
