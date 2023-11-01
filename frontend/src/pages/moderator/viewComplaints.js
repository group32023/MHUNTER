import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import Topbar from '../../components/common/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import profilePhoto from '../../assets/images/profilePhoto.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function ViewComplaints() {
  const { complaintID } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  // const [remarks, setRemarks] = useState('');

  useEffect(() => {
    // Fetch complaint data from the backend based on the complaintID
    fetch(`http://localhost:8080/complaint/complaintByComplaintID/{complaintID}`)
      .then((response) => response.json())
      .then((data) => setComplaint(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [complaintID]);

  // const handleStatusChange = (newStatus) => {
  //   // Handle status change (you can update this as needed)
  //   alert(`Status updated to: ${newStatus}`);
  // };

  // const handleSubmit = () => {
  //   // Handle submission (you can update this as needed)
  //   alert('Complaint updated');
  // };

  return (
    <>
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
                  </div>
                  {/* <div className="col-md-4 complaint-remark">
                    <div className="form-group">
                      <label htmlFor="status">Status:</label>
                      <select
                        className="form-control-r"
                        id="status"
                        value={complaint.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                      >
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Checking">Checking</option>
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
                  </div> */}
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
    </>
  );
}

export default ViewComplaints;
