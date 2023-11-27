import React from 'react'
import {main} from '../assets/styles/main.css';
import SeccionCategoryProduct from './SeccionCategoryProduct';

const Main = () => {
  return (
    <div style={{background : "#6DA69F" }}>

   
        <div className='content_main' >
            <SeccionCategoryProduct/>
            <SeccionCategoryProduct/>
            <SeccionCategoryProduct/>



        </div>
    </div>
  )
}

export default Main