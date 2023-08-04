import React, { useState,useEffect } from 'react'
import '../assets/css/artistUpcoming.css'
import event01 from '../assets/images/slide_2.jpg'
import eventType from '../assets/images/eventtype.png'
import artistUpcommingCalandar from '../assets/images/calendar(2).png'

export default function ArtistUpcommingEvent() {

  const [events,setEvents] =useState([])

  useEffect(() => {
    const newEvent =<div key={events.length}> <p className='upcomingEventTitle'>Upcoming Events</p> <img className='eventImage' src={event01} alt=''></img><p className='eventTopic'>BEAT BLITZ</p><span className='locationEvent'>Matara</span><p className='eventDescripition'>Join us for a heartwarming wedding celebration in the scenic coastal city of Matara. A day filled with love, laughter, and lasting memories. Let's toast to new beginnings!</p><div className='eventTypeDiv'><img className='eventTypeImage' src={eventType} alt=''></img></div><p className='eventTypeData'>Wedding</p><div className='dateDiv'><img className='dateImage' src={artistUpcommingCalandar} alt=''></img></div><p className='dateData'>Jun 14 2023</p><hr className='line'></hr></div>
    setEvents(prevEvents => [...prevEvents, newEvent]);
  }, []);

 

  return (
    <div>
        
            {events}
        </div>
    
  )
}
