
// import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import Register from './components/Register/Register';

function App () {
  const location = useLocation();

  return (
    <div className=''>
      {(location.pathname !== '/' && location.pathname !== '/register' ) &&  <Nav/> }
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/home' element={<Cards/>}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
