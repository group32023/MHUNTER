import React, { useState,useEffect } from 'react'
import '../assets/css/artistUpcoming.css'
import event01 from '../assets/images/slide_2.jpg'
import eventType from '../assets/images/eventtype.png'
import artistUpcommingCalandar from '../assets/images/calendar(2).png'
import empty from '../assets/images/empty(1).png'

export default function ArtistUpcommingEvent() {

 var date = new Date()
 var id = 758463
 const [events,setEvents] =useState([])
 const BASE_URL = "http://localhost:8080";
 
 const loadDate = () => {
  const mmId = localStorage.getItem('mmid');
  if(mmId){
    fetch(`http://localhost:8080/requestMusicMember/viewEventList/${mmId}`)
    .then((res) => res.json())
    .then((result) => {  
        const newEvents = result.map(item => (
            <div className='eventItem'> 
                <img className='eventImage' src={`${BASE_URL}/postData/uploads/image/${item.image}.jpg`} alt=''></img>
                <p className='eventTopic'>{item.event_name}</p>
                <span className='locationEvent'>{item.town}</span>
                <p className='eventDescripition'>{item.description}</p>
                <div className='eventTypeDiv'>
                    <img className='eventTypeImage' src={eventType} alt=''></img>
                </div>
                <p className='eventTypeData'>{item.event_type}</p>
                <div className='dateDiv'>
                    <img className='dateImage' src={artistUpcommingCalandar} alt=''></img>
                </div>
                <p className='dateData'>{item.date}</p>
                <hr className='line'></hr>
            </div>
        ));
        setEvents(newEvents);
    })
}
}

useEffect(() => {
loadDate();
console.log(events.length)
}, []);


  return (
    <div>
      <p className='upcomingEventTitle'>Upcomming Events</p>
        {(events.length<=0)? <><img src={empty} className='emptyUpcommingEventImg'></img><span className='emptyContentUpcommingEvent'>it's empty in here.</span></>:events}
    </div>
    
  )
}
