import React from 'react'

const Button = ({name , eventClick }) => {

    

  return (
    <div className='content_button' onClick={eventClick} >{name} </div>
  )
}

export default Button