import React from 'react'
import {banner} from '../assets/styles/banner.css';


const Banner = () => {
  return (
    <div className='content_banner'>
        <div className='capa_1'>
            <div className='background'></div>
            <div className='content_image'>
                <img  src="https://i.imgur.com/kMaHgDA.png" alt="men for short"  />
            </div>


            <div className='content_title'>
                <div className='content_title_background'>
                    <span className='title_background'>SHORT</span>
                    <span className='title_background'>SHORT</span>
                    <span className='title_background'>SHORT</span>
                    <span className='title_main'>SHORT</span>
                </div>
               
            </div>
        </div>
       
    </div>
  )
}

export default Banner