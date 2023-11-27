import React from 'react'
import {main} from '../assets/styles/main.css';
import CardProduct from './CardProduct';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SeccionCategoryProduct = () => {
  return (
    <div>
      <div className='content_title_section'>
          <span>Joggers</span>
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
            <SwiperSlide> <CardProduct/> </SwiperSlide>
            <SwiperSlide> <CardProduct/> </SwiperSlide>
            <SwiperSlide> <CardProduct/> </SwiperSlide>
            <SwiperSlide> <CardProduct/> </SwiperSlide>
            
            </Swiper>
              
      </div>
    </div>
  )
}

export default SeccionCategoryProduct