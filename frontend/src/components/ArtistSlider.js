import React, { useState } from 'react'
import sheshan from '../assets/images/shehan.jpeg'

import '../assets/css/artistSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faStar} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


export default function 
() {

  const [value,setValue] =useState(5)
    

  return (
    <div>
    <div className='listOfArtist'>
      
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{width:236,height:271}}> <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
            <img src={sheshan} className='artist1Pic' style={{width:236,height:271}}></img>
            <div className='reviewBox'>
                <label className='artist1Name'>Shihan Mihranga</label>
                <FontAwesomeIcon icon={faFacebook} className='facebookArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='twiterArtist'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedinIn} className='linkedinArtist'></FontAwesomeIcon>

            <div className='starList'>
                 {/* generate the stars */}
                <Rating name="read-only" value={value} readOnly />
            </div>
                
           
               
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
   
    </div>
  )
}
