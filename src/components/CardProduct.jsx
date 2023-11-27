import React from 'react'
import trama_fondo from '../assets/images/trama_fondo.png';

const CardProduct = () => {
  return (
    <div >
        <div className='container_card'>
            <img className='fondo' src={trama_fondo} alt="" srcSet="" />
           
            <img className='image_product' src="https://i.imgur.com/gh4c0v4.png" alt="" sizes="" srcSet="" />
         
        </div>
        
    </div>
  )
}

export default CardProduct