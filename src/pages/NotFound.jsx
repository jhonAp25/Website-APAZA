import React from 'react'
import { Link, useRouteError} from  "react-router-dom"


const NotFound = () => {

    const error = useRouteError()

  return (
    <div>
        <h1>404</h1>
        {error.statusText} 
        <Link to="/">Returb</Link>
    </div>
  )
}

export default NotFound