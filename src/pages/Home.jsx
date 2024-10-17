import React from 'react'
import Banner from '../components/Banner'
import Main from '../components/Main'
import "../assets/styles/app.css"

const Home = () => {
  return (
    <>  
        <Banner/>
        <div className='content'>
           <Main/>
        </div>
       
    </>
  )
}

export default Home