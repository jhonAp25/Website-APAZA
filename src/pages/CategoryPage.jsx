import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import  "../assets/styles/categoryPage.css"
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
      <div className='content_main content_product'>
    
            {productCategory.map(c=>(
                <CardProduct data={c} />
              ))}

       
      </div>
       
    </div>

    </>

  )
}

export default CategoryPage