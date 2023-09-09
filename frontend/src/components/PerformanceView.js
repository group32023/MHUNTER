import React, { useEffect, useState } from 'react'
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
  const [post,setData] = useState([])
  const BASE_URL = "http://localhost:8080";
  const videoExtention = ["mp4","mkv"]


  const loadData = ()=>{
    fetch(`http://localhost:8080/postData/postDetails`)
    .then((res)=>res.json())
    .then((result)=>{ 
      const newPost = result.filter(item => videoExtention.includes(item.fileType));
      setData(newPost)
})
  }

  useEffect(()=>{
    loadData()
  },[])

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
       {post.map(item => (
   <SwiperSlide style={{width:500, height:236, borderRadius:5}}>
      <div className="artistSlide1">
         <Card sx={{ maxWidth: 236 }}>
            <CardMedia className="backgroudVideoCard">
               <div className="embed-responsive embed-responsive-16by9">
                  <video className="embed-responsive-item" src={`${BASE_URL}/postData/uploads/video/${item.fileName}`} ref={videoRefs} allowFullScreen id="player1" title="performance" width={236} height={236}></video>
               </div>
               <button type="button" className="btn btn-danger" id="play1" onClick={playVideo}>
                  <FontAwesomeIcon icon={faPlay} />
               </button>
            </CardMedia>
         </Card>
      </div>
   </SwiperSlide>
))}
 
      </Swiper>
    </div>
    </div>
  );
}
