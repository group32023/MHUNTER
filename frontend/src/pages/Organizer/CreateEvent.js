import './CreateEvent.css';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'
import Topbar from '../../components/common/Topbar';
import LocationInput from '../../components/organizer/LocationInput';
// import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import { Routes, Route } from 'react-router';
import OrganizerDashboard from './OrganizerDashboard';
import ViewEvents from './ViewEvents';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import SearchBand from './SearchBand'

function CreateEvent() {


  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const [formData, setFormData] = useState({

    event_name: '',
    event_type: '',
    date: '',
    crowd: '',
    start_time: '',
    end_time: '',
    location: '',
    description: '',
    latitude: '',
    longitude: '',
    image:'',

  })

  const [crowdError, setCrowdError] = useState('');

  const onChangeHandler = (event) => {
    if (!event.target) return; // Check if event.target exists

    const { name, value } = event.target;

    if (name === 'event_type') {

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        image: value,
        
      }));
      console.log(formData);

    } else {
      // Handle form input changes
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      console.log(formData);
    }
  };

  const handleLocationSelect = (selectedLocation) => {
    // Update the location property in the formData state with the selected location data
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: selectedLocation.address,
    }));

    // Print the location value in the console
    console.log(selectedLocation.address);
  };

  return (
    <>
      <SideMenuBarOrganizer>
        <div className='create-event-container'>
          {/* <SideMenuBarOrganizer /> */}

          {/* <div className="container" style={{ width: '1215px', marginLeft: '20%' }} > */}

          <Topbar />
          <form className='create-event-form'>

            <h2>Create Event</h2>
            <div className="form-group ">

              <label htmlFor="event_name" className="form-label">Event Name</label>
              <input type="text" className="form-control" onChange={onChangeHandler} name="event_name" ></input>

            </div>

            <div className="form-group">

              <label htmlFor="event_type" className="form-label">Event Type</label>
              <select className="form-select" onChange={onChangeHandler} name="event_type" >

                <option value="Musical Show">Musical Show</option>
                <option value="Party">Party</option>
                <option value="Wedding">Wedding</option>
                <option value="Get Together">Get Together</option>
                <option value="Other">Other</option>

              </select>

            </div>

            <div className="form row">

              <div className="form-group col-md-6">
                <label htmlFor="date" className="form-label" >Date</label>
                <input type="date" className="form-control" onChange={onChangeHandler} name="date" min={currentDate} ></input>
              </div>

              <div className="form-group col-md-6">

                <label htmlFor="crowd" className="form-label">Expected Crowd</label>
                <input type="text" className="form-control" onChange={onChangeHandler} name="crowd" ></input>
                {crowdError && <div className='invalid-feedback'>{crowdError}</div>}
              </div>
            </div>


            <div className="form row">

              <div className="form-group col-md-6">
                <label htmlFor="start_time" className="form-label" >Starting Time</label>
                <input type="time" className="form-control" onChange={onChangeHandler} name="start_time" ></input>
              </div>

              <div className="form-group col-md-6">

                <label htmlFor="end_time" className="form-label">Ending Time</label>
                <input type="time" className="form-control" onChange={onChangeHandler} name="end_time" ></input>

              </div>
            </div>

            <div className="form-group">

              <label htmlFor="location" className="form-label">Location</label>
              <LocationInput onLocationSelect={handleLocationSelect} setFormData={setFormData} />

            </div>

            <div className="form-group">

              <label htmlFor="description" className="form-label">Description</label>
              <textarea type="text" className="form-control" onChange={onChangeHandler} name="description" ></textarea>

            </div>

            <div className="form-group">
              <Link to="/organizer/event" className='link1'>
                <button class="btn " type="submit" onClick={(event) => {
                  event.preventDefault(); console.log(formData); fetch("http://localhost:8080/event/add", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                  }).then(() => {
                    window.location.href = "/organizer/event";
                })
                }} >Create Event</button>
              </Link>
            </div>



          </form>

          {/* </div> */}

        </div>

        <Routes>
          <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
          <Route path='/organizer/event' element={<ViewEvents />}></Route>
          <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
          <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
          <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
          <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
          <Route path='/organizer/searchartist/:eventid' element={<SearchArtist />} />
          <Route path='/organizer/searchartist/viewartist/:mmid/:eventid' element={<ViewArtist />} />
          <Route path='/organizer/searchartist/viewartist/makeartistrequest/:mmid/:eventid' element={<MakeArtistRequest />} />
          <Route path='/organizer/searchband/:eventid' element={<SearchBand />} />
        </Routes>
      </SideMenuBarOrganizer>
    </>
  );


}

export default CreateEvent;