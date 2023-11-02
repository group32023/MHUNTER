import './MakeBandRequest.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns'
import Topbar from '../../components/common/Topbar';
import LocationInput from '../../components/organizer/LocationInput';
// import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import { Routes, Route } from 'react-router';
import OrganizerDashboard from './OrganizerDashboard';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import ViewEvents from './ViewEvents';
import CreateEvent from './CreateEvent';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import SearchBand from './SearchBand'
import ViewBand from './ViewBand'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';


function MakeBandRequest() {


    const orgid1 = parseInt(localStorage.getItem('orgid'), 10);
    console.log('orgid:', orgid1);


    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const [event, setEvents] = useState([]);

    // const orgid = 1;
    const { mmid, eventid } = useParams();

    const currentDate = format(new Date(), 'yyyy-MM-dd');


    const [formData, setFormData] = useState({

        arrivalTime: '',
        departureTime: '',
        specialNotes: '',
        // org_id : orgid1

    })


    const onChangeHandler = (e) => {
        if (!e.target) return; // Check if event.target exists

        const { name, value } = e.target;

        // Handle form input changes
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        console.log(formData);

    };


    useEffect(() => {
        fetch(`http://localhost:8080/event/viewSpecificEvent/${eventid}`)
            .then(res => res.json())
            .then((result) => {

                setEvents(result);
                console.log(result);

            }
            )

    }, [])

    

    return (

        <>
            <SideMenuBarOrganizer>

                <div className='band-request-container'>
                    {/* <SideMenuBarOrganizer /> */}

                    {/* <div className="container" style={{ width: '1215px', marginLeft: '20%' }} > */}

                    <Topbar />
                    <form className='band-request-form'>

                        <h2>Make Request</h2>
                        <div className="form-group ">

                            <label htmlFor="event_name" className="form-label">Event Name</label>
                            <input type="text" className="form-control" name="event_name" value={event.eventName} readOnly ></input>

                        </div>

                        <div className="form-group">

                            <label htmlFor="event_type" className="form-label">Event Type</label>
                            <select className="form-select" name="event_type" readOnly >

                                <option value={event.eventType}>{event.eventType}</option>

                            </select>

                        </div>

                        <div className="form row">

                            <div className="form-group col-md-6">
                                <label htmlFor="date" className="form-label" >Date</label>
                                <input type="date" className="form-control" name="date" min={currentDate} value={event.date}></input>
                            </div>

                            <div className="form-group col-md-6">

                                <label htmlFor="crowd" className="form-label">Expected Crowd</label>
                                <input type="text" className="form-control" name="crowd" value={event.crowd} ></input>

                            </div>
                        </div>


                        <div className="form row">

                            <div className="form-group col-md-6">
                                <label htmlFor="start_time" className="form-label" >Starting Time</label>
                                <input type="time" className="form-control" name="start_time" value={event.startTime}></input>
                            </div>

                            <div className="form-group col-md-6">

                                <label htmlFor="end_time" className="form-label">Ending Time</label>
                                <input type="time" className="form-control" name="end_time" value={event.endTime}></input>

                            </div>
                        </div>

                        <div className="form-group">

                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" className="form-control" name="location" value={event.location} ></input>
                            {/* <LoadScript googleMapsApiKey="AIzaSyBHUE7QQ_cie9vWpTKHX7rOuqAoD8uxhCA">
                                <GoogleMap
                                    center={{ lat: event.latitude, lng: event.longitude }}
                                    zoom={14}
                                >
                                    <Marker position={{ lat: event.latitude, lng: event.longitude }} />
                                </GoogleMap>
                            </LoadScript> */}

                        </div>

                        <div className="form row">

                            <div className="form-group col-md-6">
                                <label htmlFor="start_time" className="form-label" >Arrival Time</label>
                                <input type="time" className="form-control" name="arrivalTime" onChange={onChangeHandler}></input>
                            </div>

                            <div className="form-group col-md-6">

                                <label htmlFor="end_time" className="form-label">Departure Time</label>
                                <input type="time" className="form-control" name="departureTime" onChange={onChangeHandler}></input>

                            </div>
                        </div>



                        <div className="form-group">

                            <label htmlFor="description" className="form-label">Special Notes</label>
                            <textarea type="text" className="form-control" name="specialNotes" onChange={onChangeHandler}></textarea>

                        </div>

                        <div className="form-group">
                            <Link to="/organizer/event" className='link1'>
                                <button class="btn " type="submit" onClick={(e) => {
                                    e.preventDefault(); console.log(formData); fetch(`http://localhost:8080/requestMusicMember/add/${mmid}/${eventid}/${orgid1}`, {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(formData)
                                    }).then(() => {
                                        window.location.href = `/organizer/event/eventdashboard/${eventid}`;
                                    })
                                }} >Submit</button>
                            </Link>

                        </div>



                    </form>

                    {/* </div> */}

                </div>

                <Routes>
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
                    <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist/:eventid' element={<SearchArtist />} />
                    <Route path='/organizer/searchartist/viewartist/:mmid/:eventid' element={<ViewArtist />} />
                    <Route path='/organizer/searchartist/viewartist/makeartistrequest/:mmid/:eventid' element={<MakeArtistRequest />} />
                    <Route path='/organizer/searchband/:eventid' element={<SearchBand />} />
                    <Route path='/organizer/searchband/viewband/:mmid/:eventid' element={<ViewBand/>} />
                </Routes>
            </SideMenuBarOrganizer>
        </>
    );


}

export default MakeBandRequest;