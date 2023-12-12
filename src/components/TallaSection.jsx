import React, { useState } from 'react'

const TallaSection = ({talla , tallaSelected, setTallaSelected}) => {

    

    const selectedTalla=(size)=>{
        setTallaSelected(size)
    }

  return (
    <div>
        <span style={{fontWeight: "800"}}>TALLA : </span>
        <div className='content_talla_select'>
            <span className={`talla  ${tallaSelected === "S" ? "tallaSelected" : "" }`}  onClick={()=>selectedTalla("S")} >S</span>    
            <span className={`talla  ${tallaSelected === "M" ? "tallaSelected" : "" }`} onClick={()=>selectedTalla("M")} >M</span>    
            <span className={`talla  ${tallaSelected === "L" ? "tallaSelected" : "" }`} onClick={()=>selectedTalla("L")} >L</span>    
            <span className={`talla  ${tallaSelected === "XL" ? "tallaSelected" : "" }`} onClick={()=>selectedTalla("XL")} >XL</span>    
        </div>
    </div>
  )
}

export default TallaSection