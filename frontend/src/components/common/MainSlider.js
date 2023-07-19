import React, { } from 'react';
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
import slide6 from '../../assets/images/slide_6.jpg'
import slide7 from '../../assets/images/slide_7.jpg'
import slide8 from '../../assets/images/slide_8.jpg'
import slide9 from '../../assets/images/slide_9.jpg'

// import required modules
import { Navigation, Pagination,Autoplay } from 'swiper/modules';

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
        <SwiperSlide><img src={slide1} alt='image1'></img></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='image2'></img></SwiperSlide>
        <SwiperSlide><img src={slide8} alt='image3'></img></SwiperSlide>
        <SwiperSlide><img src={slide7} alt='image4'></img></SwiperSlide>
        <SwiperSlide><img src={slide9} alt='image5'></img></SwiperSlide>
        <SwiperSlide><img src={slide6} alt='image6'></img></SwiperSlide>
      </Swiper>
    </>
  );
}
