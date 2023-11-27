import React from 'react'
import {banner} from '../assets/styles/banner.css';
import {EffectFade,  Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Banner = () => {
  return (
    <div className='content_banner'>
        
        <Swiper
           slidesPerView={1}
           spaceBetween={10}
           pagination={{
             clickable: true,}}
            effect={'fade'}
            loop={true}
            autoplay={{  delay: 3500,  disableOnInteraction: false }}
            modules={[EffectFade,Autoplay, Pagination]}
            className="mySwiper"
        >
        <SwiperSlide>
            <div className='capa_1'>
                <div className='content_image'>
                    <img  src="https://i.imgur.com/88g0Ys4.png" alt="men for short"  />
                </div>  
                <div className='content_title_background'>
                    <span className='title_background'>SHORT</span>
                    <span className='title_background'>SHORT</span>
                    <span className='title_background'>SHORT</span>
                    <span className='title_main'>SHORT</span>
                </div>            
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='capa_1'>
                <div className='content_image'>
                    <img  src="https://i.imgur.com/6lqcxsl.png" alt="men for short"  />
                </div>  
                <div className='content_title_background'>
                    <span className='title_background'>POLERA</span>
                    <span className='title_background'>POLERA</span>
                    <span className='title_background'>POLERA</span>
                    <span className='title_main'>POLERA</span>
                </div>            
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='capa_1'>
                <div className='content_image'>
                    <img  src="https://i.imgur.com/88g0Ys4.png" alt="men for short"  />
                </div>  
                <div className='content_title_background'>
                    <span className='title_background'>POLO</span>
                    <span className='title_background'>POLO</span>
                    <span className='title_background'>POLO</span>
                    <span className='title_main'>POLO</span>
                </div>            
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='capa_1'>
                <div className='content_image'>
                    <img  src="https://i.imgur.com/JdZvUOa.png" alt="men for short"  />
                </div>  
                <div className='content_title_background'>
                    <span className='title_background'>CASACA</span>
                    <span className='title_background'>CASACA</span>
                    <span className='title_background'>CASACA</span>
                    <span className='title_main'>CASACA</span>
                </div>            
            </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Banner