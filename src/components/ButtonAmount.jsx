import React, { useState } from 'react'
import { HiOutlineMinusSm ,HiOutlinePlusSm } from "react-icons/hi";

const ButtonAmount = ({quantity , setQuantity}) => {

    
    
    const changeQuantity=(action)=>{
        
        setQuantity( action ? quantity + 1 : quantity -1  <= 0 ? 1 :  quantity -1 )
    }


  return (
    <div className='content_quantity'>
        <div className='menos' onClick={()=>changeQuantity(false)} > <HiOutlineMinusSm size={20}/>   </div>
        <div style={{padding: "30px 20px"}}>{quantity}</div>
        <div className='mas' onClick={()=>changeQuantity(true)}> <HiOutlinePlusSm size={20}/> </div>
    </div>
  )
}

export default ButtonAmount