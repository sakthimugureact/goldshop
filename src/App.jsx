import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Loginportal from './Components/Portals/Loginportal'
import Register from './Pages/Register/Register'
import Contactportal from './Components/Portals/Contactportal'
import Trending from './Pages/Trending'
import Earring from './Components/Browse/Earring'
import Orderpage from './Pages/Orderpage'
import EaringMore from './Pages/EaringMore'
import Productdetails from './Pages/Productdetails'
import Pedants from './Components/Browse/Pedants'
import PedantMore from './Pages/PedantMore'
import Pedantdetails from './Pages/Pedantdetails'
import PersonDetail from './Pages/PersonDetail'

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
      <Route path='/earring' element={<Earring/>}></Route>
      <Route path='/order' element={<Orderpage/>}></Route>
      <Route path='/earringmore' element={<EaringMore/>}></Route>
      <Route path='/productdetails/:id' element={<Productdetails/>}></Route>
      <Route path='/pedant' element={<Pedants/>}></Route>
      <Route path='/pedantmore' element={<PedantMore/>}></Route>
      <Route path='/pedantdetails/:id' element={<Pedantdetails/>}></Route>
      <Route path='/persondetails' element={<PersonDetail/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App