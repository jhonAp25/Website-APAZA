import React, { useState } from 'react'

const ColorSection = ({color, colorSelectd, setColorSelected}) => {
    
    const selectedColor =(color)=>{
        setColorSelected(color)
    }

  return (
    <div>
        <div>
            <span style={{fontWeight: "800"}}>COLOR: </span>
            <span style={{textTransform: "capitalize"}}>{colorSelectd}</span>
        </div>

        <div className='content_colors_palette'>
            {color.map(c=>(
                <div className={`color  ${c.nombre === colorSelectd ? "colorSelected" : "" }`}   onClick={()=>selectedColor(c.nombre)}  style={{background: c.codigo}} >  </div>
            ))}
        </div>


    </div>
  )
}

export default ColorSection