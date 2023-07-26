import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import video from '../assets/images/video.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

import '../assets/css/performance.css'
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';


export default function PerformanceView() {

  const videoRefs = useRef()

  // let navigate = useNavigate()
  


  // function moveMusicPlayer(){
  //   // navigate("www.google.com")
  // }

 function playVideo(){
    videoRefs.current.play();
  }


  return (
    <div>
      <div className="performancebg"></div>
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
        <SwiperSlide style={{width:500,height:236,borderRadius:5}}> 
        <div className='artistSlide1'>
            <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
        <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video} ref={videoRefs}  allowfullscreen id="player1" title="performance" width={236} height={236}  ></video>
          
        </div>
        <button type="button" class="btn btn-danger" id="play1" onClick={playVideo} ><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen title="performance" ref={videoRefs} width={236} height={236} ></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon></button>
      </CardMedia>
    </Card>
  
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
        <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen id="player3" title="performance" ref={videoRefs} width={236} height={236}  ></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen id="player" title="performance" ref={videoRefs} width={236} height={236}></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen id="player" title="performance" ref={videoRefs} width={236} height={236}></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen id="player" title="performance" ref={videoRefs} width={236} height={236}></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen id="player" title="performance" ref={videoRefs}  width={236} height={236}></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
      
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen id="player" title="performance" ref={videoRefs}  width={236} height={236}></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='artistSlide1'>
        <Card sx={{ maxWidth: 236 }} >
     
      <CardMedia className="backgroudVideoCard">
      <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" src={video}  allowfullscreen id="player" title="performance" ref={videoRefs} width={236} height={236}></video>
      </div>
      <button type="button" class="btn btn-danger" id="play1" onClick={playVideo}><FontAwesomeIcon icon={faPlay} /></button>
      </CardMedia>
    </Card>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
