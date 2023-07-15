import './CreateEvent.css';
import { useState } from 'react';

function CreateEvent() {

  const [formData, setFormData] = useState({

    eventName: '',
    eventtype: '',
    date: '',
    eventCrowd: '',
    starttime: '',
    endtime: '',
    location: '',
    descrition: '',

  })

  const onChangeHandler = (event) => {

    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value

    })
    )

  }

  return (
    <div className="container">

      <form>

        <h2>Create Event</h2>
        <div className="form-group">

          <label htmlFor="eventname" className="form-label">Event Name</label>
          <input type="text" className="form-control" onChange={onChangeHandler} name="eventname" placeholder="Enter event name"></input>

        </div>

        <div className="form-group">

          <label htmlFor="eventtype" className="form-label">Event Type</label>
          <select className="form-select" onChange={onChangeHandler} name="eventtype" >

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
            <input type="date" className="form-control" onChange={onChangeHandler} name="date" placeholder="Enter expected crowd"></input>
          </div>

          <div className="form-group col-md-6">

            <label htmlFor="eventcrowd" className="form-label">Expected Crowd</label>
            <input type="text" className="form-control" onChange={onChangeHandler} name="eventcrowd" placeholder="Enter expected crowd"></input>

          </div>
        </div>


        <div className="form row">

          <div className="form-group col-md-6">
            <label htmlFor="starttime" className="form-label" >Starting Time</label>
            <input type="time" className="form-control" onChange={onChangeHandler} name="starttime" ></input>
          </div>

          <div className="form-group col-md-6">

            <label htmlFor="endtime" className="form-label">Ending Time</label>
            <input type="time" className="form-control" onChange={onChangeHandler} name="endtime" ></input>

          </div>
        </div>

        <div className="form-group">

          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" className="form-control" name="location" onChange={onChangeHandler} placeholder="Enter location"></input>

        </div>

        <div className="form-group">

          <label htmlFor="description" className="form-label">Description</label>
          <textarea type="text" className="form-control" onChange={onChangeHandler} name="description" placeholder="Enter event description"></textarea>

        </div>

        <div className="form-group">

          <button class="btn btn-primary" type="submit" onClick={(event)=> { event.preventDefault(); console.log(formData);}} >Create Event</button>

        </div>



      </form>

    </div>

  );


}

export default CreateEvent;