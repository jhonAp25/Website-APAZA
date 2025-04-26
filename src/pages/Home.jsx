import React from 'react'
import Banner from '../components/Banner'
import Main from '../components/Main'
import "../assets/styles/app.css"
import { SectionComponent } from '../layout/SectionComponent'

const Home = () => {
  return (
    <>  
        <Banner/>
        <div className='content'>
           <SectionComponent orientacion={true}/>
           <SectionComponent orientacion={false}/>
        </div>
       
    </>
  )
}

export default Home