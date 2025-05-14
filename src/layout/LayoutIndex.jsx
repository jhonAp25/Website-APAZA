import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop '

const LayoutIndex = () => {
  return (
    <div>
        <NavBar/>
        <div>
        <ScrollToTop /> 
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default LayoutIndex