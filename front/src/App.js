
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

  const [characters, setCharacters] = useState([])
  
  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
         if (data.id) { 
           setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        })
        .catch(err => console(err))
 }

  const onClose = (id) =>{
    setCharacters(characters.filter((char) => char.id !== Number(id)))
  }
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
      {location.pathname !== '/' &&  <Nav onSearch={onSearch}/> }
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </div>
  )
}

export default App
