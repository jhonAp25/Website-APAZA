import React from 'react'
import trama_fondo from '../assets/images/trama_fondo.png';
import { Link } from 'react-router-dom';

const CardProduct = ({data}) => {
 
  return (
    <Link to={`/${data.category}/${data.id}`}>
        <div className='container_card'>
            <img className='fondo' src={trama_fondo} alt="" srcSet="" />
           
            <img className='image_product' src={data.image} alt="" sizes="" srcSet="" />

            <div  className='card_info_prod'>
              <div className='info'>
                <span className='title_info'>{data.category}</span>
                <span className='name_info'>{data.modelo}</span>
              </div>
              <div>
                <span className='precio_info'>S/ {data.precio}</span>
              </div>
            </div>
         
        </div>
        
    </Link>
  )
}

export default CardProduct