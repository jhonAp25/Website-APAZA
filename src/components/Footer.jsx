import React from 'react'
import { FaFacebookSquare , FaWhatsapp, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div style={{background: "#03040A"}}>
        <span>Siguenos!!</span>

        <div>
            <FaFacebookSquare color='#fff' />
            <FaWhatsapp color='#fff' />
            <FaInstagram  color='#fff' />
        </div>
        

    </div>
  )
}

export default Footer