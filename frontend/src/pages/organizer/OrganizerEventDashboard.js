import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import "../../assets/css/OrganizerEventDashboard.css"
import Topbar from '../../components/common/Topbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


import CreateEvent from './CreateEvent';
import ViewEvents from './ViewEvents';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import OrganizerDashboard from './OrganizerDashboard';
import OrganizerEventLocation from '../../components/organizer/OrganizerEventLocation';


import { BiSolidEdit } from "react-icons/bi";
import { BiSolidBox } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidTimeFive } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { BiSolidPlusCircle } from "react-icons/bi";
import { BiSolidCircle } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css'

import profilePhoto from '../../assets/images/profilePhoto.jpeg'
import locationDemo from '../../assets/images/locationDemo.jpeg'
import EventBanner4 from '../../assets/images/eventbanner4.jpg'
import PaymentArtist4 from '../../assets/images/paymentArtist4.jpg'
import PaymentArtist5 from '../../assets/images/paymentArtist5.jpeg'
import PaymentArtist6 from '../../assets/images/paymentArtist6.jpg'
import PaymentArtist7 from '../../assets/images/paymentArtist7.jpg'
import PaymentArtist8 from '../../assets/images/paymentArtist8.png'




function OrganizerEventDashboard() {

    const { eventid } = useParams();
    const [event, setEvent] = useState(null);
    const zoom = 15;


    useEffect(() => {
        axios.get(`http://localhost:8080/event/byEventid/${eventid}`)
            .then((response) => {
                setEvent(response.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching event data:', error);
            });
    }, [eventid]);

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <SideMenuBarOrganizer>
                <div className='eventDashboard_content_container'>
                    <Topbar customProp="Events" />



                    <div className="row">
                        <div className="horizontalLine col-md-12 py-2 fs-7">
                            <span >Events / {event.event_name.toUpperCase()}</span>
                        </div>
                    </div>



                    <div className="row">
                        <div className="eventDescriptionDiv  mt-3 col-md-7">
                            <div className="row p-2 ">
                                <div className="eventImgDiv col-md-5 mt-2">
                                    <img alt='' src={EventBanner4} width='385px' height='210px' />
                                </div>
                                <div className="eventDescDiv col-md-7 mt-2"  >
                                    <span className="eventDescDivSpan">{event.event_name.toUpperCase()}</span>
                                    <div className="row" style={{ display: 'flex' }}>
                                        <div className="eventDescInnerDiv col-md-10 py-2 " >
                                            <p style={{ textAlign: 'justify' }}>
                                                {event.description}
                                            </p>
                                        </div>
                                        <div className='' style={{ display: 'flex', flex: '1', padding: '0px', margin: '0px' }}>
                                            <BiSolidEdit className='descriptionIcon fs-4 d-flex align-items-center justify-content-center ' />
                                            <BiSolidBox className='descriptionIcon fs-4  d-flex align-items-center justify-content-center ' />
                                        </div>

                                    </div>

                                    <div className="row mt-2" style={{ fontFamily: 'MyCustomFont1', display: 'flex' }}>
                                        <div className="dateTimeDiv">
                                            <div className="row">
                                                <BiSolidCalendar className='dateIcon fs-1 col-md-3 ' />
                                                <div className='col-md-8 mt-2'>
                                                    <p>Event Date<br></br>
                                                        <span className='fs-4'>{event.date}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dateTimeDiv">
                                            <div className="row" >
                                                <BiSolidTimeFive className='timeIcon fs-1 col-md-3 ' />
                                                <div className='col-md-8 mt-2'>
                                                    <p>Event Time<br></br>
                                                        <span className='fs-4'>{event.start_time}</span>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className="locationDescriptionDiv mt-3 col-md-4">
                            <div className="locationTypeDescriptionDiv">
                                <iframe
                                    src={`https://maps.google.com/maps?q=${event.latitude},${event.longitude}&z=${zoom}&output=embed`}
                                    width="600"
                                    height="250"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="google map"
                                ></iframe>
                                {/* <img className='' src={locationDemo} alt='' ></img> */}
                            </div>

                        </div>
                    </div>


                    <div className="row">
                        <div className="requestTypeDescriptionDiv  mt-2 col-md-7" id='scrollbarStyle-1' style={{ fontFamily: 'MyCustomFont' }}>
                            <div className="p-3">
                                <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>Requests</p>
                                <hr></hr>
                                <div className="requestTableDiv d-flex justify-content-center align-items-center">

                                    <div className="row headerContent mb-3">
                                        <div className="column">
                                            <div className="fs-6" style={{ fontFamily: 'MyCustomFont1' }}>
                                                Artist/Band
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="fs-6" style={{ fontFamily: 'MyCustomFont1' }}>
                                                Status
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row tableContent">
                                        <div className="column">
                                            <div className="content">
                                                <img alt='' src={PaymentArtist4} width='45px' height='45px' className='mx-4' />
                                                Dim3
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="content confirmed d-flex align-items-center justify-content-center mt-2" style={{ fontFamily: 'MyCustomFont2' }}>
                                                Confirmed <BiSolidCircle className='mx-2' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row tableContent">
                                        <div className="column">
                                            <div className="content">
                                                <img alt='' src={PaymentArtist5} width='45px' height='45px' className='mx-4' />
                                                Ravi Royster
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="content d-flex align-items-center justify-content-center mt-2" style={{ color: 'orange', fontFamily: 'MyCustomFont2' }}>
                                                Pending <BiSolidCircle className='mx-2' style={{ color: 'orange' }} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row tableContent">
                                        <div className="column">
                                            <div className="content">
                                                <img alt='' src={PaymentArtist6} width='45px' height='45px' className='mx-4' />
                                                MidLane
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="content d-flex align-items-center justify-content-center mt-2" style={{ color: 'red', fontFamily: 'MyCustomFont2' }} >
                                                Rejected<BiSolidCircle className='mx-2' style={{ color: 'red' }} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row tableContent">
                                        <div className="column">
                                            <div className="content">
                                                <img alt='' src={PaymentArtist5} width='45px' height='45px' className='mx-4' />
                                                B N S
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="content d-flex align-items-center justify-content-center mt-2" style={{ color: 'orange', fontFamily: 'MyCustomFont2' }}>
                                                Pending <BiSolidCircle className='mx-2' style={{ color: 'orange' }} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row tableContent">
                                        <div className="column">
                                            <div className="content">
                                                <img alt='' src={PaymentArtist8} width='45px' height='45px' className='mx-4' />
                                                Dinesh Gamage
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="content confirmed d-flex align-items-center justify-content-center mt-2" style={{ fontFamily: 'MyCustomFont2' }}>
                                                Confirmed <BiSolidCircle className='mx-2' />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>



                        <div className="locationDescriptionDiv mt-2 col-md-4">
                            <div className="eventTypeDescriptionDiv " style={{ fontFamily: 'MyCustomFont1' }}>
                                <div className="p-3">
                                    <div className="row " style={{ marginLeft: '30px' }} >
                                        <BiSolidCalendarStar className='dateEventTypeIcon fs-1 col-md-3 ' />
                                        <div className=' col-md-8 mb-4' >
                                            <p className='fs-6' style={{ fontFamily: 'MyCustomFont' }}>Event Type<br></br>
                                                <span className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>{event.event_type.toUpperCase()}</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="crowdTypeDescriptionDiv " >
                                <div className="p-3">
                                    <div className="row" style={{ marginLeft: '30px' }}>
                                        <BiSolidUser className='timeCrowdIcon fs-1 col-md-3 ' />
                                        <div className='col-md-8'>
                                            <p className='fs-6' style={{ fontFamily: 'MyCustomFont' }}>Expected Crowd<br></br>
                                                <span className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>{event.crowd}</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="addTypeDescriptionDiv p-2" style={{ fontFamily: 'MyCustomFont1' }}>
                                <div className="row col-md-12 ">
                                    <Link to="/organizer/searchartist" style={{ color: 'white', textDecoration: 'none' }}>
                                        <div className="addRow  p-2 text-center">Add Artist
                                            <BiSolidPlusCircle className='plusIcon mx-2 fs-3' />
                                        </div>
                                    </Link>

                                    <Link to="/organizer/searchartist" style={{ color: 'white', textDecoration: 'none' }}>
                                        <div className="addRow p-2 mt-2 text-center">Add Band
                                            <BiSolidPlusCircle className='plusIcon mx-2 fs-3' />
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            <div className="row btnTypeDescriptionDiv " style={{ fontFamily: 'MyCustomFont1' }}>
                                <button className="eventDashboardCancelBtn col-md-5" >
                                    Cancel Event
                                </button>
                                <button className="resheduleBtn col-md-5" >
                                    Reshedule Event
                                </button>
                            </div>
                        </div>
                    </div>




                </div>

                <Routes>
                    {/* Nested routes for the Organizer Dashboard */}
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist' element={<SearchArtist />} />
                    <Route path='/organizer/searchartist/viewartist' element={<ViewArtist />} />
                    <Route path='/organizer/searchartist/viewartist/makeartistrequest' element={<MakeArtistRequest />} />

                </Routes>

            </SideMenuBarOrganizer>

        </>
    )
}

export default OrganizerEventDashboard