import React, { useState } from 'react'
import  '../assets/styles/main.css';
import CardProduct from './CardProduct';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, NavLink } from 'react-router-dom';

const SeccionCategoryProduct = ({title, data}) => {

  const [productCategory , setProductCategory] = useState( data.filter(dat => dat.category === title.categoria) )

  console.log(data.filter(dat => dat.category === "casaca"))
  return (
    <div>
      <div className='content_title_section'>
           <Link style={{outline: "none" , textDecoration: "none" , color : "#fff"}} to={"/"+title.categoria}> <span>{title.categoria}</span></Link>
      </div>

      <div className='container_cards'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                
                breakpoints={{
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    },
                    1280: {
                    slidesPerView: 4,
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
                 <SwiperSlide style={{padding: "10px 0"}}> <CardProduct data= {c}/> </SwiperSlide>
              ))}
          
          
            
            </Swiper>
              
      </div>
    </div>
  )
}

export default SeccionCategoryProduct