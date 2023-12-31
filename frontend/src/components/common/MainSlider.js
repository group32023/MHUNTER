import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../assets/css/mainSlider.css';

// slider
import slide1 from '../../assets/images/slide_1.jpg'
import slide2 from '../../assets/images/slide_2.jpg'
import slide3 from '../../assets/images/slide_3.jpg'
import slide4 from '../../assets/images/slide_4.jpg'
import slide5 from '../../assets/images/slide_5.jpg'
import slide6 from '../../assets/images/slide_6.jpg'
import slide7 from '../../assets/images/slide_7.jpg'
import slide8 from '../../assets/images/slide_8.jpg'
import slide9 from '../../assets/images/slide_9.jpg'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="Description of the image1"></img></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="Description of the image2"></img></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="Description of the image3"></img></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="Description of the image4"></img></SwiperSlide>
        <SwiperSlide><img src={slide9} alt="Description of the image5"></img></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="Description of the image6"></img></SwiperSlide>
      </Swiper>
    </>
  );
}
