import React, { useState,useEffect } from 'react'
import eventimage from '../assets/images/slide_8.jpg';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../assets/images/profilePhoto.jpeg';
import crowd from '../assets/images/people.png';
import duration from '../assets/images/hourglass.png';
import eventtype from '../assets/images/eventtype.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays,faClock} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/eventTable.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function () {

  const [event,setEvent] = useState([])
  const BASE_URL = "http://localhost:8080";
  const [page,setPage] = useState(1)
  const noOfLinePerPage = 4

  const handle = () =>{
    fetch(`http://localhost:8080/event/getAll`).then((res)=>res.json()).then((data)=>{
       
      setEvent(data);
            
}) .catch(error =>{
      console.log('There was a problem with the fetch operation:', error.message)
  })

}

 
useEffect(()=>{
    handle();
  },[])

    // set the current page
  const handleChange= (event,value)=>{
    setPage(value)
  }

// setup the pagination
  function setPagination(){
    let noOfLine =1
    let displayedData = [];
    if(event.length < noOfLinePerPage*page){
      noOfLine = event.length
    }
    else{
      noOfLine =  noOfLinePerPage*page
    }
    for (let i = noOfLinePerPage*(page-1); i < noOfLine; i++) {
      displayedData.push(event[i]);
      
    }
    return displayedData
  }
    
  
  if(event===null) return <div>Loading....................</div>

  return (
    <div>
       
        <div>
             
                <div className='eventTablecontainer'>

                    
                {setPagination().map((eventList) => 
                     <div className="requestContainerForEvent123">
                              <img src={profileImage} className="profile4"></img>
                              <div className="eventDetails">
                                <h5>{eventList['organizerName']}</h5>
                                <p class="eventType7"><img src={eventtype} className="EventIconPendingRequest1"></img>{eventList['event_name']}</p>
                                    <p class="eventDate7"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest1"/>{eventList['date']}</p>
                                    <p class="venue7"><FontAwesomeIcon icon={faClock} id="LocationIconPendingRequest1"/>{eventList['start_time']}</p>
                                    <p class="eventDate8"><img src={crowd} className="CalenderIconPendingRequest2"></img>{eventList['crowd']}</p>
                                    <p class="venue8"><FontAwesomeIcon icon={faLocationDot} id="LocationIconPendingRequest2"/>{eventList['town']}</p>
                              </div>
     
   
    
      
   
  </div>)}

                </div>

                <div className='artistEventPagination'>
                  <Stack spacing={2}>
                    <Pagination count={(Math.round(event.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
                  </Stack>
                </div>

            </div>
            

      </div>
    
  )
}
