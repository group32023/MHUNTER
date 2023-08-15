import React, { useState } from 'react'
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator'
import Topbar from '../../components/common/Topbar'
import '../../assets/css/moderator/moderatorComplaints.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import profilePhoto from '../../assets/images/profilePhoto.jpeg'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'

function AllUserDetails() {
    
  return (
    <div className='moderator-body-container'>
 

            {/*header icon*/}
            <div className='header-admin'>

                <div className='header-title'>
                    <h1>View Complaints</h1>
                </div> 

            </div>
            <div className="Complaincontainer" >
      <div className="complaint row">
        <div className="col-5">
          <h2>Complaint Details</h2>
          <br></br>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={profilePhoto} alt="Profile" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-4 complaint-details">
          <p>Complaint ID: C1001</p>
          <p>Name: Karen Smith</p>
          <p>Title: Refund Payment</p>
          <p>Date: 2023/06/05</p>
          <p>Description: Refund payment has not been done yet.</p>
        </div>
        <div className="col-md-4 complaint-remark">
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select className="form-control-r" id="status">
              <option>Completed</option>
              <option>Pending</option>
              <option>Cheking</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="remarks">Remarks:</label>
            <textarea className="form-control-r" id="remarks"  style={{ height: '120px',width:"300px" }} />
          </div>
          <button className="btn btn-primary-sub">Submit</button>
          <button className="btn btn-secondary-cancel">Cancel</button>
        </div>
      </div>
    </div>

            

        </div> 
  )
}

export default AllUserDetails
