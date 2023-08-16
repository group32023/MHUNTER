import './MakeArtistRequest.css';
import { useState } from 'react';
import React from 'react';
import { format } from 'date-fns'
import Topbar from '../../components/common/Topbar';
import LocationInput from '../../components/organizer/LocationInput';
// import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import { Routes, Route } from 'react-router';
import OrganizerDashboard from './OrganizerDashboard';
import ViewEvents from './ViewEvents';
import CreateEvent from './CreateEvent';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';


function MakeArtistRequest() {


    const currentDate = format(new Date(), 'yyyy-MM-dd');
    // const [formData, setFormData] = useState({

    //     event_name: '',
    //     event_type: '',
    //     date: '',
    //     crowd: '',
    //     start_time: '',
    //     end_time: '',
    //     location: '',
    //     description: '',
    //     latitude: '',
    //     longitude: '',

    // })

    // const [crowdError, setCrowdError] = useState('');

    // const onChangeHandler = (event) => {
    //     if (!event.target) return; // Check if event.target exists

    //     const { name, value } = event.target;

    //     if (name === 'crowd') {

    //         if (value <= 0) {
    //             setCrowdError('Expected crowd should be a positive integer');
    //         }

    //         else if (!Number.isInteger(value)) {
    //             setCrowdError('Expected crowd should be a positive integer');
    //         }

    //         else {
    //             setCrowdError('');
    //             // Handle location selection
    //             setFormData((prevFormData) => ({
    //                 ...prevFormData,
    //                 [name]: value,
    //             }));
    //         }

    //     } else {
    //         // Handle form input changes
    //         setFormData((prevFormData) => ({
    //             ...prevFormData,
    //             [name]: value,
    //         }));
    //     }
    // };

    // const handleLocationSelect = (selectedLocation) => {
    //     // Update the location property in the formData state with the selected location data
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         location: selectedLocation.address,
    //     }));

    //     // Print the location value in the console
    //     console.log(selectedLocation.address);
    // };

    return (

        <>
            <SideMenuBarOrganizer>

                <div className='artist-request-container'>
                    {/* <SideMenuBarOrganizer /> */}

                    {/* <div className="container" style={{ width: '1215px', marginLeft: '20%' }} > */}

                    <Topbar />
                    <form className='artist-request-form'>

                        <h2>Make Request</h2>
                        <div className="form-group ">

                            <label htmlFor="event_name" className="form-label">Event Name</label>
                            <input type="text" className="form-control" name="event_name" ></input>

                        </div>

                        <div className="form-group">

                            <label htmlFor="event_type" className="form-label">Event Type</label>
                            <select className="form-select" name="event_type" >

                                <option value="musical">Musical Show</option>
                                <option value="party">Party</option>
                                <option value="awurudu">Awurudu Function</option>
                                <option value="get">Get Together</option>
                                <option value="other">Other</option>

                            </select>

                        </div>

                        <div className="form row">

                            <div className="form-group col-md-6">
                                <label htmlFor="date" className="form-label" >Date</label>
                                <input type="date" className="form-control" name="date" min={currentDate} ></input>
                            </div>

                            <div className="form-group col-md-6">

                                <label htmlFor="crowd" className="form-label">Expected Crowd</label>
                                <input type="text" className="form-control" name="crowd" ></input>

                            </div>
                        </div>


                        <div className="form row">

                            <div className="form-group col-md-6">
                                <label htmlFor="start_time" className="form-label" >Starting Time</label>
                                <input type="time" className="form-control" name="start_time" ></input>
                            </div>

                            <div className="form-group col-md-6">

                                <label htmlFor="end_time" className="form-label">Ending Time</label>
                                <input type="time" className="form-control" name="end_time" ></input>

                            </div>
                        </div>

                        <div className="form row">

                            <div className="form-group col-md-6">
                                <label htmlFor="start_time" className="form-label" >Artist Arrival Time</label>
                                <input type="time" className="form-control" name="start_time" ></input>
                            </div>

                            <div className="form-group col-md-6">

                                <label htmlFor="end_time" className="form-label">Artist Departure Time</label>
                                <input type="time" className="form-control" name="end_time" ></input>

                            </div>
                        </div>

                        <div className="form-group">

                            <label htmlFor="location" className="form-label">Location</label>
                            {/* <LocationInput  setFormData={setFormData} /> */}

                        </div>

                        <div className="form-group">

                            <label htmlFor="description" className="form-label">Special Notes</label>
                            <textarea type="text" className="form-control" name="description" ></textarea>

                        </div>

                        <div className="form-group">

                            <button class="btn " type="submit" >Submit</button>

                        </div>



                    </form>

                    {/* </div> */}

                </div>

                <Routes>
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/createevent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist' element={<SearchArtist />} />
                    <Route path='/organizer/searchartist/viewartist' element={<ViewArtist />} />
                    
                </Routes>
            </SideMenuBarOrganizer>
        </>
    );


}

export default MakeArtistRequest;