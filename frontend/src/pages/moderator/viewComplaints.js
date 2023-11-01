import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import Topbar from '../../components/common/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePhoto from '../../assets/images/profilePhoto.jpeg';

function ViewComplaints() {
  const { complaintID } = useParams();

  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [remarks, setRemarks] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/complaint/complaintByComplaintID/${complaintID}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const complaintData = data[0];
          setComplaint(complaintData);
        } else {
          console.error('No complaint data found for complaintID:', complaintID);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [complaintID]);

  // const handleStatusChange = (newStatus) => {
  //   // Update the status in the local state
  //   setComplaint({
  //     ...complaint,
  //     status: newStatus,
  //   });
  // };

  const handleSubmit = () => {
    // Update the remarks in the local state
    setComplaint({
      ...complaint,
      remark: remarks,
    });

    // Send the updated complaint data to the server
    fetch(`http://localhost:8080/complaint/update/${complaintID}`, {
  method: 'PUT',  // Change the HTTP method to PUT
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    status: status,  // Replace with your selected status value
    remark: remarks,         // Use the 'remarks' variable
  }),
})
  .then((response) => response.json())
  .then((responseData) => {
    // Handle the response from the server (e.g., show a success message)
    alert('Complaint updated with status and remark');
    navigate('/moderator/complaints');
  })
  .catch((error) => console.error('Error updating complaint:', error));
};


  return (
    <SideMenuBarModerator>
      <Topbar />
      <div className="moderator-body-container">
        <div className="header-admin">
          <div className="header-title">
            <h1>View Complaints</h1>
          </div>
        </div>
        <div className="Complaincontainer">
          <div className="complaint row">
            <div className="col-5">
              <h2>Complaint Details</h2>
              <br></br>
            </div>
          </div>
          <div className="row">
            {complaint ? (
              <>
                <div className="col-md-4">
                  <img src={profilePhoto} alt="Profile" className="img-fluid rounded-circle" />
                </div>
                <div className="col-md-3 complaint-details">
                  <p>Complaint ID: {complaint.complaintID}</p>
                  <p>Title: {complaint.title}</p>
                  <p>Date: {complaint.date}</p>
                  <p>Description: {complaint.description}</p>
                  <p>Any Remarks: {complaint.remark}</p>

                </div>
                <div className="col-md-4 complaint-remark">
                  <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select
                      className="form-control-r"
                      id="status"
                      value={complaint.status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="COMPLETED">Completed</option>
                      <option value="PENDING">Pending</option>
                      <option value="CHEKING">Checking</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="remarks">Remarks:</label>
                    <textarea
                      className="form-control-r"
                      id="remarks"
                      style={{ height: '120px', width: '300px' }}
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-primary-sub" onClick={handleSubmit}>
                    Submit
                  </button>
                  <button
                    className="btn btn-secondary-cancel"
                    onClick={() => navigate('/moderator/complaints')}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="col-md-12">
                <p>Loading complaint details...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SideMenuBarModerator>
  );
}

export default ViewComplaints;
