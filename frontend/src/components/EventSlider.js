import React, { useState,useEffect } from 'react'

import '../assets/css/eventSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import event from '../assets/images/event.jpg'
// import './styles.css';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function EventSlider() {
    const [event,setEvent] = useState([])
    const BASE_URL = "http://localhost:8080";


    const handle = () =>{
        fetch(`http://localhost:8080/event/getAll`).then((res)=>res.json()).then((data)=>{
            const newItem = data.map(item =>
                        (
                            <SwiperSlide style={{width:400,height:400}}> <div className='artistSlide1'>
                                <img src={`${BASE_URL}/postData/uploads/image/${item.eventImage}`} className='artist1Pic' style={{width:400,height:400}} alt='event'></img> 
                                </div>
                            </SwiperSlide>
                        ))
                        
                        setEvent(newItem)
                
    }) .catch(error =>{
          console.log('There was a problem with the fetch operation:', error.message)
      })
    
    }
    
     
    useEffect(()=>{
        handle();
      },[])
        
      
      if(event===null) return <div>Loading....................</div>


  return (
    <div>
        <div className='eventSliderDiv'>
        <Swiper
        slidesPerView={4}
        spaceBetween={120}
        freeMode={true}
        direction={'horizontal'}
        mousewheel={true}
        navigation={true}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            stopOnLastSlide:false
          }}
        
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        {event}
      </Swiper>

        </div>
    </div>
  )
}
