import React from 'react'
import trama_fondo from '../assets/images/trama_fondo.png';
import { Link } from 'react-router-dom';

const CardProduct = ({data}) => {
 
  return (
    <Link to={`/${data?.category}/${data?.id}`} style={{position : "relative"}}>
        <div className='container_card'>
            <img className='fondo' src={trama_fondo} alt="" srcSet="" />
            <img className='image_product' src="https://i.imgur.com/db5W6Pf.png" alt="" sizes="" srcSet="" />
        </div>

        <div  className='card_info_prod'>
          <div className='info'>
            <div className='name_precio'>
              <span className='name_name_text'>.Short</span>
              <span className='pen'>29.99</span></div>
            <div className='name_info'>Algodón suave y poliéster resistente. Ideal para todo el día.</div>

            <div className='name_talla1 card_prod_talla'>
              <span><strong>XS</strong> 101234</span>
              <span><strong>S</strong> 202345</span>
              <span><strong>M</strong> 303456</span>
            </div>

            <div className='name_talla2 card_prod_talla'>
              <span><strong>L </strong>404567</span>
              <span><strong>XL</strong> 505678</span>
            </div>
          
          </div>   
        </div>
      
    </Link>
  )
}

export default CardProduct