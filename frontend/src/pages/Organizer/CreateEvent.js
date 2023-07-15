import './CreateEvent.css';

function CreateEvent() {

  return (
    <div className="container">

      <form>

        <h2>Create Event</h2>
        <div className="form-group">

          <label htmlFor="eventname" className="form-label">Event Name</label>
          <input type="text" className="form-control" id="eventname" placeholder="Enter event name"></input>

        </div>   

        <div className="form-group">

          <label htmlFor="eventcrowd" className="form-label">Expected Crowd</label>
          <input type="text" className="form-control" id="eventcrowd" placeholder="Enter expected crowd"></input>

        </div>

      </form>

    </div>

  );


}

export default CreateEvent;