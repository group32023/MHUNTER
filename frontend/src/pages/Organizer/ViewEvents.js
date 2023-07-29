import React, { useEffect, useState } from 'react';
// import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import Topbar from '../../components/common/Topbar'; 
import './ViewEvents.css';
import musical from '../../assets/images/musical.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

function ViewEvents() {

    const [events, setEvents] = useState([])

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
            }
            )
    }, [])



    return (

        <div>

            {/* <SideMenuBarOrganizer /> */}
            {<Topbar></Topbar>}
            <div className="container" style={{ width: '1215px', marginLeft: '20%', height: '110vh' }} >

                <div className='row'>

                    {events.map(event => (
                        <div className='col-md-3' key={event.eventid}>
                            <a>
                                <div className='image'>
                                    <img src={musical}>
                                    </img>
                                </div>

                                <div className='content'>

                                    <h5>{event.event_name}</h5>
                                    <div className='newrow'>
                                        <FontAwesomeIcon icon="map-marker-alt" style={{ color: "#7643D2", fontSize: '20px' }} />
                                        <span style={{ color: "#11FE70", marginLeft: "2rem", marginTop: "-1.5rem", display: "block" }}>{extractloc(event.location)}</span>
                                    </div>

                                    <div className='newrow'>
                                        <FontAwesomeIcon icon="calendar" style={{ color: "#7643D2", fontSize: '18px' }} />
                                        <span>{event.date}</span>
                                    </div>

                                    <div className='newrow' style={{ marginTop: "0.3rem" }}>
                                        <FontAwesomeIcon icon="clock" style={{ color: "#7643D2", fontSize: '18px' }} />
                                        <span>{formatTime(event.start_time)}</span>
                                    </div>

                                </div>
                            </a>
                        </div>


                    ))}

                    <div className='col-md-3'>

                        <a>
                            <FontAwesomeIcon icon="plus" style={{ color: "#24292D", height: "15rem", width: "15rem", marginTop: "2rem",marginLeft:"-0.3rem" }} />
                        </a>
                    </div>

                </div>

            </div>
        </div>


    );

}

export default ViewEvents;