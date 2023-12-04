import React, { useState } from 'react'
import trama_fondo from '../assets/images/trama_fondo.png';
import { useParams } from 'react-router-dom'
import database from '../database/bd.json'
import '../assets/styles/productPage.css'

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

            </div>
        </div>

    </>
  )
}

export default ProductPage