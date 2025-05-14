import React from 'react'
import Banner from '../components/Banner'
import "../assets/styles/app.css"
import "../assets/styles/main.css"
import { SectionComponent } from '../layout/SectionComponent'
import { SectionTypeLayout } from '../layout/SectionTypeLayout'

const Home = () => {
  return (
    <>  
        <Banner/>
        <div className=''>
           <SectionTypeLayout/>
           <SectionComponent orientacion={true}  id={6} />
           <SectionComponent orientacion={false} id={4} />
        </div>
       
    </>
  )
}

export default Home