import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../Components/Header'
import Alta from '../pages/Alta'
import Nosotros from '../pages/Nosotros'
import Contactanos from '../pages/Contactanos'

function RoutesApp() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/alta' element={<Alta />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contactanos' element={<Contactanos />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp