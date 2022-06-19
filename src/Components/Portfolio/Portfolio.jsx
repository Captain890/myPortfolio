import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Project1 from './../../img/Project1.png';
import Project2 from './../../img/Project2.png';
import Project3 from './../../img/Project3.png';
import Project4 from './../../img/Project4.png';
const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}

        <Swiper
            spaceBetween={40}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={Project1} alt="project1" />   
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project2} alt="project2" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project3} alt="project3" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project4} alt="project4" />
            </SwiperSlide>
            
                
                
        </Swiper>
    </div>
  )
}

export default Portfolio