import React, { useEffect } from 'react'
import {useState} from 'react'
import '../assets/css/artistSpecificEvent.css'
import event01 from '../assets/images/slide_2.jpg'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import clock from '../assets/images/clock(1).png'
import stopWatch from '../assets/images/stopwatch(2).png'
import eventType from '../assets/images/eventtype.png'
import artistUpcommingCalandar from '../assets/images/calendar(2).png'
import crowd from '../assets/images/group.png'
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import Countdown from "react-countdown";
import { Link } from 'react-router-dom'

import GoogleMapReact from 'google-map-react';
import { useNavigate, useParams } from 'react-router-dom'
import { Data } from '@react-google-maps/api'
import CircularProgress from '@mui/material/CircularProgress';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ArtistSpecificEvent() {
    const [expand,setExpandedSideBar] = useState(true)
    const [data, setData] = useState([])
    const BASE_URL = "http://localhost:8080";

    let eventId = useParams()
    eventId =eventId.id

    const loadData = ()=>{
      fetch(`http://localhost:8080/event/viewSpecificEvent/${eventId}`).then((res)=>res.json()).then((result)=>setData(result))

    }

    useEffect(()=>{
      loadData();
    },[])

    

    var now = new Date();
    let day = data.date +"T"+data.startTime;
    var future = new Date(day);
    var differenceInMs = future.getTime() - now.getTime();
    var differenceInSeconds = Math.floor(differenceInMs / 1000);
    console.log(differenceInMs,differenceInSeconds)

    const renderer = ({ days,hours, minutes, seconds, completed }) => {
      if (completed) {
          return <span style={{ color: 'red', fontSize: '25px',position: 'absolute',top: '32px',left: '110px'}}>Countdown completed!</span>;
      } else {
          return <span style={{ color: '#11FE70', fontSize: '40px' ,position: 'absolute',top: '25px',left: '110px'}}>{(days<10)? '0'+days :days}:{(hours<10)?'0'+hours:hours}:{(minutes<10)?'0'+minutes:minutes}:{(seconds<10)?'0'+seconds:seconds}</span>;
      }
  };

  

  // google map
  const defaultProps = {
    center: {
      lat: data.latitude,
      lng: data.longitude
    },
    zoom: 11
  };

  
  const clickEvent =()=>{
    
    window.location.href =`https://www.google.com/maps/place/${data.town}/@${data.latitude},${data.longitude}`
  }
  

  if(data.length === 0) return <div className='progressBar'><CircularProgress color="secondary" /></div>
  
  return (
    <div className='artistSpecificEventDiv'>
        <div className='mainArtistDashboard'>
            <SideMenuBarArtist></SideMenuBarArtist>
        </div>
            <p className='headerDashboard'>Events</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
            <Link to={'/'}>
                <img src={home} alt='homebtn' className='homeIcon'></img>
              </Link>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>

            <div className='mainDescriptionDiv'>
                <img src={`${BASE_URL}/postData/uploads/image/${data.eventImage}`} className='specificEventImg'></img>
                <p className='specificEventName'>{data.eventName}</p>
                <p className='specificEventDescription'>{data.description}</p>

            </div>

            <div className='countDown'>
                <p className='countDownTitle'>Countdown</p>
                <img src={stopWatch} className='countClock'></img>
                <Countdown date={Date.now() + differenceInSeconds * 1000} renderer ={renderer}>

                </Countdown>
                <span className='days'>Days</span>
                <span className='hours'>Hours</span>
                <span className='mins'>Mins</span>
                <span className='secs'>Secs</span>
            </div>

            <div className='specificEventType'>
                <p className='specificEventTypeTitle'>Event Type</p>
                <div className='specificeventTypeDiv'>
                  <img className='spcificEventTypeImage' src={eventType} alt=''></img>
              </div>
              <p className='specificEventTypeExplain'>{data.eventType}</p>
            </div>

            <div className='specificEventDate'>
                <p className='specificEventDateTitle'>Event Date</p>
                <div className='specificDateDiv'>
                  <img className='specificdateImage' src={artistUpcommingCalandar} alt=''></img>
                </div>
              <p className='specificDateValue'>{data.date}</p>
            </div>

            <div className='specificEventTime'>
                <p className='specificEventTimeTitle'>Event Time</p>
                <p className='specificTimeValue'>{data.startTime} - {data.endTime}</p>
                <img className='specificTimeImage' src={clock} alt=''></img>
            </div>

            <div className='specificEventCrowd'>
                <p className='specificEventCrowdTitle'>Expected Crowd</p>
                <p className='specificCrowdValue'>{data.crowd}</p>
                <img className='specificCrowdImage' src={crowd} alt=''></img>
            </div>

            <div className='specificEventLocation'>

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyDH-XDRV7DiBfOPlXaq6Oj6LPoDw9bthuo" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}

                onClick={clickEvent}>
                  <AnyReactComponent
                    lat={6.922002}
                    lng={79.7738031}
                    text="My Marker"
                  />
                  
                </GoogleMapReact>
              </div>
               
            </div>

            <div className='specificEventIncome'>
                <p className='specificEventIncomeTitle'>Payment Details</p>
                <p className='specificTotal'>Total</p>
                <p className='specificTotalValue'>100,000</p>
                <p className='specificPayed'>Payed</p>
                <p className='specificPayedValue'>+50,000</p>
                <p className='specificRest'>Rest</p>
                <p className='specificRestValue'>-50,000</p>
            </div>

    </div>
  )
}
