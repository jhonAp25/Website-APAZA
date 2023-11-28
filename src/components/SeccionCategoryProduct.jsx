import React, { useState } from 'react'
import {main} from '../assets/styles/main.css';
import CardProduct from './CardProduct';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';

const SeccionCategoryProduct = ({title, data}) => {

  const [productCategory , setProductCategory] = useState( data.filter(dat => dat.category === title.categoria) )

  console.log(data.filter(dat => dat.category === "casaca"))
  return (
    <div>
      <div className='content_title_section'>
           <NavLink to={"/"+title.categoria}> <span>{title.categoria}</span></NavLink>
      </div>

      <div className='container_cards'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                
                breakpoints={{
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    },
                }}
                loop={true}
                pagination={{  clickable: true }}
                autoplay={{  delay: 1500,  disableOnInteraction: false }}
                modules={[ Pagination]}
                
                
                className="mySwiper"
            >

              {productCategory.map(c=>(
                 <SwiperSlide> <CardProduct data= {c}/> </SwiperSlide>
              ))}
          
          
            
            </Swiper>
              
      </div>
    </div>
  )
}

export default SeccionCategoryProduct