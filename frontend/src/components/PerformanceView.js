import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import video from '../assets/images/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { useEffect,useRef } from 'react'
import '../assets/css/performance.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function PerformanceView() {

  // create a videoRef object
  const videoRef = useRef(null);
  

  useEffect(() => {
    if (videoRef.current && typeof videoRef.current.pause === 'function') {
      videoRef.current.pause(); // Pauses the video when the component mounts
      console.log(videoRef.current)
    }
  }, []);

// control the video 
  const handlePlayPause = (videoRef) => {
    if (videoRef.current && typeof videoRef.current.play === 'function') {
        console.log('awa')
        videoRef.current.pause();
      
    }
  };

  return (
    <div className="videoStream">
    <lable className="performanceView">LEATEST PERFORMANCE</lable>
    <Swiper
        slidesPerView={4}
        spaceBetween={150}
        freeMode={true}
        direction={'horizontal'}
        mousewheel={true}
        navigation={true}
        loop = {true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide:false
        }}
        
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{width:500,height:271,borderRadius:5}}> 
        <div className='artistSlide1'>
            <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player1" onClick={handlePlayPause}  controls></iframe>
          
        </div>
        <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player2"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} ><a href="www.google.com"></a></FontAwesomeIcon></button>
      </CardMedia>
    </Card>
  
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player3"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
     
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src={video} ref={videoRef} allowfullscreen id="player"  controls></iframe>
      </div>
      <button type="button" class="btn btn-danger" id="play1"><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
