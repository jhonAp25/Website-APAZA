import React, { useState } from 'react'
import trama_fondo from '../assets/images/trama_fondo.png';
import { useParams } from 'react-router-dom'
import database from '../database/bd.json'
import '../assets/styles/productPage.css'
import ColorSection from '../components/ColorSection';
import TallaSection from '../components/TallaSection';

const ProductPage = () => {

    let params =  useParams()
    const [product , setProductCategory] = useState( database.filter(dat => dat.id === parseInt( params.id) ))
    console.log(product)
  return (

    <>
        <div className='content_category'>
            <h1 className='title_category'>{params.category}</h1>  
        </div>

        <div className='content_main grid'>
            <div className='container_product_selected'>
                <img className='fondo' src={trama_fondo} alt="" srcSet="" />
            
                <img className='image_product_selected' src={product[0].image} alt="" sizes="" srcSet="" />
            
            </div>

            <div className='content_info'>
                <div className='content_title_info'>
                    <span className='title_info'>{product[0].modelo}</span>
                    <span className='description_info'>{product[0].descripcion}</span>
                </div>

                <div className='content_precio'>
                    <div className='precio_num'>
                        <span>Normal</span>
                        <span className='precio_normal' style={{ fontWeight: "200" }} >S/ {product[0].precio + 10}.00 PEN</span>
                    </div>
                    <div className='precio_num'>
                        <span>Internet</span>
                        <span className='precio_inter'>S/ {product[0].precio}.00 PEN</span>
                    </div>
                    <div className='precio_num'>
                        <span>Descuento</span>
                        <span className='precio_desc'>- {product[0].precio} %</span>
                    </div>
                </div>

                <div className='content_color'>
                    <ColorSection color={product[0].color}/>
                  
                </div>

                <div className='content_talla'>
                   <TallaSection talla={product[0].talla}/>
                </div>

                <div>
                    BOTONES
                </div>
            </div>  
        </div>

    </>
  )
}

export default ProductPage