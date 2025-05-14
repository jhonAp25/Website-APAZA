import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import  "../assets/styles/categoryPage.css"
import  "../assets/styles/app.css"
import "../assets/styles/productPage.css"
import CardProduct from '../components/CardProduct';
import database from '../database/bd.json'

const CategoryPage = () => {
  let params = useParams();
  const [productCategory , setProductCategory] = useState(database.filter(dat => dat.category === params.category) )

  console.log(database.filter(dat => dat.category === params.category) )
 
  return (
    <>    
    
    <div className='content_category'>
      <h1 className='title_category'>{params.category}</h1>  
    </div>

    <div className='background_home'>
      <div className=' content_product content'>
    
            {productCategory.map(c=>(
                <CardProduct products={c} />
              ))}

       
      </div>
       
    </div>

    </>

  )
}

export default CategoryPage