import React, { useState,useEffect } from 'react'
import band from '../assets/images/band.jpg'

import '../assets/css/bandSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination,Mousewheel, Autoplay } from 'swiper/modules';


export default function 
() {

  const [value,setValue] =useState(5,4)
  const [band,setBand] = useState([])
  const BASE_URL = "http://localhost:8080";

const handle = () =>{
    fetch(`http://localhost:8080/band/view`).then((res)=>res.json()).then((data)=>{
        const newItem = data.map(item =>
                    (
                        <SwiperSlide style={{width:236,height:271}}> <div className='artistSlide1'>
                        <img src={`${BASE_URL}/postData/uploads/image/${item.imgPath}`} className='artist1Pic' style={{width:236,height:271}}></img>
                        <div className='reviewBox'>
                            <label className='artist1Name'>{item.bandName}</label>
                            <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>
            
                        <div className='starList'>
                             {/* generate the stars */}
                            <Rating name="read-only" value={item.rate} readOnly className='rating'/>
                        </div>
                        </div>
                    </div></SwiperSlide>
                    ))
                    
                    setBand(newItem)
            
}) .catch(error =>{
      console.log('There was a problem with the fetch operation:', error.message)
  })

}

 
useEffect(()=>{
    handle();
  },[])
    
  
  if(band===null) return <div>Loading....................</div>
    

  return (
    <div>
    <div className='listofBandBg'></div>
    <div className='listOfBand'>
    <label className='bandHeader'>BANDS</label>
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
        {band}
      </Swiper>
    </div>
   
    </div>
  )
}
