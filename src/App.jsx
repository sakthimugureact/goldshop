import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Loginportal from './Components/Portals/Loginportal'
import Register from './Pages/Register/Register'
import Contactportal from './Components/Portals/Contactportal'
import Trending from './Pages/Trending'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Loginportal/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/contact' element={<Contactportal/>}></Route>
      <Route path='/trending' element={<Trending/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App