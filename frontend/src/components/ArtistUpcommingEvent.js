import React, { useState,useEffect } from 'react'
import '../assets/css/artistUpcoming.css'
import event01 from '../assets/images/slide_2.jpg'
import eventType from '../assets/images/eventtype.png'
import artistUpcommingCalandar from '../assets/images/calendar(2).png'

export default function ArtistUpcommingEvent() {

 var date = new Date()
 var id = 758463
 const [events,setEvents] =useState([])
 const loadDate = () => {
  fetch("http://localhost:8080/requestMusicMember/viewEventList/758463")
  .then((res) => res.json())
  .then((result) => {  
      const newEvents = result.map(item => (
          <div className='eventItem'> 
              <img className='eventImage' src={event01} alt=''></img>
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

useEffect(() => {
loadDate();
}, []);


  return (
    <div>
      <p className='upcomingEventTitle'>Upcomming Events</p>
        {events}
    </div>
    
  )
}
