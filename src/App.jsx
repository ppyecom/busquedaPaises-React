import './App.css'
import React from 'react'
import DisplayCountries from './components/countries/DisplayCountries'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Sidebar from './components/common/sidebar/Sidebar';
import View1 from './components/pages/view1/View1';
import View2 from './components/pages/view2/View2';


function App() {


  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <div className='container-prin'>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/view1' Component={View1}/>
          <Route path='/view2' Component={View2}/>
        </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
