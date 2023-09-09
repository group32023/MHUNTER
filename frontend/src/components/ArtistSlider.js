import React, { useState,useEffect } from 'react'

import '../assets/css/artistSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import StarIcon from '@mui/icons-material/Star';

// import './styles.css';

// import required modules
import { FreeMode, Pagination,Mousewheel, Autoplay } from 'swiper/modules';


export default function 
() {

  const [value,setValue] =useState(5,4)
  const [artist,setArtist] = useState([])
  const BASE_URL = "http://localhost:8080";

const handle = () =>{
    fetch(`http://localhost:8080/artist/view`).then((res)=>res.json()).then((data)=>{
        const newItem = data.map(item =>
                    (
                        <SwiperSlide style={{width:236,height:271}}> <div className='artistSlide1'>
                        <img src={`${BASE_URL}/postData/uploads/image/${item.imgPath}`} className='artist1Pic' style={{width:236,height:271}}></img>
                        <div className='reviewBox'>
                            <label className='artist1Name'>{item.artistName}</label>
                            <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>
            
                        <div className='starList'>
                             {/* generate the stars */}
                             <Rating name="read-only" value={item.rate} readOnly />
                        </div>
                        </div>
                    </div></SwiperSlide>
                    ))
                    
                    setArtist(newItem)
            
}) .catch(error =>{
      console.log('There was a problem with the fetch operation:', error.message)
  })

}

 
useEffect(()=>{
    handle();
  },[])
    
  
  if(artist===null) return <div>Loading....................</div>

  return (
    <div >
    <div className='listofArtistBg'></div>
    <div className='listOfArtist'>
      
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
        {artist}
      </Swiper>
    </div>
   
    </div>
  )
}
