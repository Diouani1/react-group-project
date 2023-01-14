import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeadingPage from '../HeadingPage/HeadingPage'
import MainHeader from '../MainHeader/MainHeader'
import WorkHistory from "../WorkHistory/WorkHistory";

const Main = () => {
    
  return (
    <div>
      <MainHeader/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeadingPage/>}/>
        <Route path="/workhistory" element={<WorkHistory/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main