import React, { useState } from 'react'
import { HiOutlineMinusSm ,HiOutlinePlusSm } from "react-icons/hi";

const ButtonAmount = ({quantity , setQuantity}) => {

    
    
    const changeQuantity=(action)=>{
        
        setQuantity( action ? quantity + 1 : quantity -1  <= 0 ? 1 :  quantity -1 )
    }


  return (
    <div className='content_quantity'>
        <span className='menos' onClick={()=>changeQuantity(false)} > <HiOutlineMinusSm size={20}/>   </span>
        <span style={{padding: "15px"}}>{quantity}</span>
        <span className='mas' onClick={()=>changeQuantity(true)}> <HiOutlinePlusSm size={20}/> </span>
    </div>
  )
}

export default ButtonAmount