import React from 'react'
import { useParams } from 'react-router-dom';

import  "../assets/styles/productPage.css"
import CardProduct from '../components/CardProduct';

const ProductPage = () => {

  let params = useParams();
  return (
    <>    
    
    <div className='content_category'>
      <h1 className='title_category'>{params.category}</h1>  
    </div>

    <div className='background_home'>
      <div className='content_main content_product'>
        <CardProduct />
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
       
      </div>
       
    </div>

    </>

  )
}

export default ProductPage