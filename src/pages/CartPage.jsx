import React from 'react'
import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


const CartPage = () => {
    let params = useParams();
    let { state } = useLocation();
    console.log(state)
  
  return (
    <>

        <div className='content_category'>
            <h1 className='title_category'>{params.category}</h1>  
        </div>



    </>
  )
}

export default CartPage