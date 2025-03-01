import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceHolder from './Pages/PlaceHolder/PlaceHolder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin , SetShowLogin] = useState(false)

  return (
    <>
    {showLogin? <LoginPopup SetShowLogin={SetShowLogin}/> : <></>}
      <div className='app'>

        <Navbar SetShowLogin={SetShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceHolder />} />
        </Routes>
      </div>
      <Footer />

    </>

  )
}

export default App
