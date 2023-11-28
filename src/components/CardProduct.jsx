import React from 'react'
import trama_fondo from '../assets/images/trama_fondo.png';

const CardProduct = ({data}) => {
 
  return (
    <div >
        <div className='container_card'>
            <img className='fondo' src={trama_fondo} alt="" srcSet="" />
           
            <img className='image_product' src={data.image} alt="" sizes="" srcSet="" />
         
        </div>
        
    </div>
  )
}

export default CardProduct