// import * as React from "react";
// import shihan from '../assets/images/shihan.jpg'
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import { red } from "@mui/material/colors";


// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import '../assets/css/performance.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

// import { FreeMode, Pagination,Mousewheel } from 'swiper/modules';

// export default function PerformanceView() {
//   return (
//     <div className="videoStream">
    
//     <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         freeMode={true}
//         direction={'horizontal'}
//         mousewheel={true}
//         navigation={true}
        
//         modules={[FreeMode, Pagination,Mousewheel]}
//         className="mySwiper"
//       >
//         <SwiperSlide style={{width:236,height:271,borderRadius:5}}> 
//         <div className='artistSlide1'>
//             <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
//         </div>
//         </SwiperSlide>

//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
            
                
           
               
            
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
            
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
            
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
//         </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='artistSlide1'>
//         <Card sx={{ maxWidth: 345 }} >
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shihan Mihiranga"
//         subheader="September 14, 2016"
//       className="headerofVideo"/>
//       <CardMedia>
//         <video width={240} height={200} controls>
//           <source src={film}></source>
//         </video>
//       </CardMedia>
//     </Card>
//         </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
