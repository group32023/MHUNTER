
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import Topbar from '../../components/common/Topbar';
// import CreateEvent from './CreateEvent';
import './ViewEvents.css';
import musical from '../../assets/images/musical.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Routes, Route } from 'react-router';
import OrganizerDashboard from './OrganizerDashboard';
import CreateEvent from './CreateEvent';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import SearchBand from './SearchBand'

import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
library.add(fas);

function ViewEvents() {

    const [events, setEvents] = useState([])
    const BASE_URL = "http://localhost:8080";

    const extractloc = (location) => {

        const parts = location.split(',');
        const placeName = parts[0];
        const town = parts[parts.length - 2];
        return `${placeName},${town}`;
    }

    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours, 10);
        const minute = parseInt(minutes, 10);
        const period = hour >= 12 ? 'pm' : 'am';
        const formattedHour = hour % 12 || 12;
        const formattedMinute = minute.toString().padStart(2, '0');
        return `${formattedHour}:${formattedMinute} ${period}`;
    };

    useEffect(() => {
        fetch("http://localhost:8080/event/getAll")
            .then(res => res.json())
            .then((result) => {
                setEvents(result);
                console.log(result);
            }
            )
            
    }, [])


    if (events === null) {

        return <div>Loading events...</div>;
    }

    return (


        <>
            <SideMenuBarOrganizer>
                <div className='row view-events-container'>
                    <Topbar />
                    {events.map(event => (
                        <div className='col-md-3 event-box' key={event.eventid}>
                            <Link to="/organizer/event/eventdashboard" className='link1'>

                                <div className='image'>
                                    <img src={`${BASE_URL}/postData/uploads/image/${event.image}.jpg`} alt="Event Image" />
                                </div>

                                <div className='content'>

                                    <h6>{event.event_name}</h6>
                                    <div className='newrow'>
                                        <FontAwesomeIcon icon="map-marker-alt" style={{ color: "#7643D2", fontSize: '20px' }} />
                                        <span style={{ color: "#11FE70", marginLeft: "2rem", marginTop: "-1.5rem", display: "block" }}>{extractloc(event.location)}</span>
                                    </div>

                                    <div className='newrow' style={{ marginTop: "0.3rem" }}>
                                        <FontAwesomeIcon icon="calendar" style={{ color: "#7643D2", fontSize: '18px' }} />
                                        <span>{event.date}</span>
                                    </div>

                                    <div className='newrow' style={{ marginTop: "0.3rem" }}>
                                        <FontAwesomeIcon icon="clock" style={{ color: "#7643D2", fontSize: '18px' }} />
                                        <span>{formatTime(event.start_time)}</span>
                                    </div>

                                </div>
                            </Link>
                        </div>


                    ))}

                    <div className='col-md-3 event-box'>

                        <Link to="/organizer/event/CreateEvent">
                            <FontAwesomeIcon
                                icon="plus"
                                style={{ color: "#24292D", height: "15rem", width: "15rem", marginTop: "2rem", marginLeft: "-0.3rem" }}
                            />
                        </Link>
                    </div>

                </div>

                <Routes>
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>

                    <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
                    <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist' element={<SearchArtist />} />
                    <Route path='/organizer/searchartist/viewartist' element={<ViewArtist />} />
                    <Route path='/organizer/searchartist/viewartist/makeartistrequest' element={<MakeArtistRequest />} />
                    <Route path='/organizer/searchband' element={<SearchBand />} />
                </Routes>
            </SideMenuBarOrganizer>
        </>

    );

}

export default ViewEvents;