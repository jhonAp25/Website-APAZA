import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import database from '../database/bd.json'
import '../assets/styles/productPage.css'

import Test from '../components/Test';
import { CardProductSale } from '../components/CardProductSale';

const ProductPage = () => {

    let params =  useParams()
    const [product , setProductCategory] = useState( database.filter(dat => dat.id === parseInt( params.id) ))


    
    


    
  return (

    <div >
        <div className='content_category'>
            <h1 className='title_category'>{params.category}</h1>  
        </div>
        <div className='ontent'>
        <CardProductSale  product={product}  />

        </div>


        <Test src="https://i.imgur.com/yHzA4u1.png" zoom={6} />

    </div>
  )
}

export default ProductPage