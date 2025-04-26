import React from 'react'

const Button = ({name , eventClick , secondary }) => {

    

  return (
    <div className={`content_button ${secondary ? 'secondary' : ''}`} onClick={eventClick} >{name} </div>
  )
}

export default Button