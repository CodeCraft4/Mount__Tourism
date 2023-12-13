import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import {Routes,Route} from 'react-router-dom'
import About from './Pages/About/Index'
import Trails from 'Pages/Trails/Index'
import News from 'Pages/News/Index'
import Contact from 'Pages/Contact/Index'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/trails' element={<Trails/>}></Route>
    <Route path='/news' element={<News/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default App
