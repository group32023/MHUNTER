// import React from 'react';
// import '../../assets/css/artistUpcoming.css';
// import event01 from '../../assets/images/slide_2.jpg';
// import eventType from '../../assets/images/eventtype.png';
// import artistUpcomingCalendar from '../../assets/images/calendar(2).png';

// export default function ArtistUpcommingEvent() {
//   const exampleEvents = [
//     {
//       event_name: 'Blits',
//       town: 'Galle',
//       description: 'Lorem ipsum dolor sit amet',
//       event_type: 'Concert',
//       date: '2023-08-15', // Example date format
//     },
//     {
//       event_name: 'Sakura',
//       town: 'Matara',
//       description: 'Lorem ipsum dolor sit amet',
//       event_type: 'Festival',
//       date: '2023-09-10', // Example date format
//     },
//     // Add more example events as needed
//   ];

//   const events = exampleEvents.map((item, index) => (
//     <div className='eventItem' key={index}>
//       <img className='eventImage' src={event01} alt='' />
//       <p className='eventTopic'>{item.event_name}</p>
//       <span className='locationEvent'>{item.town}</span>
//       <p className='eventDescripition'>{item.description}</p>
//       <div className='eventTypeDiv'>
//         <img className='eventTypeImage' src={eventType} alt='' />
//       </div>
//       <p className='eventTypeData'>{item.event_type}</p>
//       <div className='dateDiv'>
//         <img className='dateImage' src={artistUpcomingCalendar} alt='' />
//       </div>
//       <p className='dateData'>{item.date}</p>
//       <hr className='line' />
//     </div>
//   ));

//   return (
//     <div>
//       <p className='upcomingEventTitle'>Upcoming Events</p>
//       {events}
//     </div>
//   );
// }
