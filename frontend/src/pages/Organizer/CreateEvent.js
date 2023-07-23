import './CreateEvent.css';
import { useState } from 'react';
import React from 'react';
import LocationInput from '../../components/Organizer/LocationInput';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';

function CreateEvent() {

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

  })

  const onChangeHandler = (event) => {
    if (!event.target) return; // Check if event.target exists
  
    const { name, value } = event.target;
  
    if (name === 'location') {
      // Handle location selection
      setFormData((prevFormData) => ({
        ...prevFormData,
        location: value,
      }));
    } else {
      // Handle form input changes
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
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
  
    <div>
    <SideMenuBarOrganizer/>
    
    <div className="container" style={{ width: '1210px', marginLeft: '20%', marginTop: '0.5rem' }} >
 
      <form>

        <h2>Create Event</h2>
        <div className="form-group">  

          <label htmlFor="event_name" className="form-label">Event Name</label>
          <input type="text" className="form-control" onChange={onChangeHandler} name="event_name" ></input>

        </div>   

        <div className="form-group">

          <label htmlFor="event_type" className="form-label">Event Type</label>
          <select className="form-select" onChange={onChangeHandler} name="event_type" >

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
            <input type="date" className="form-control" onChange={onChangeHandler} name="date" ></input>
          </div>

          <div className="form-group col-md-6">

            <label htmlFor="crowd" className="form-label">Expected Crowd</label>
            <input type="text" className="form-control" onChange={onChangeHandler} name="crowd" ></input>

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

          <button class="btn btn-primary" type="submit" onClick={(event)=> { event.preventDefault(); console.log(formData); fetch("http://localhost:8080/event/add",{
            method: "POST",
            headers : {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
          })  }} >Create Event</button>

        </div>



      </form>

    </div>

    </div>
  );


}

export default CreateEvent;