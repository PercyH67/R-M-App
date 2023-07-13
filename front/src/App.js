
import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav"
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App () {

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com'
  const password = '1password'

  function login (userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  return (
    <div className=''>
      {location.pathname !== '/' &&  <Nav/> }
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards/>}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </div>
  )
}

export default App
