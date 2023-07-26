import React from 'react'
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistDashboard.css'
import '../assets/css/artistPendingRequests.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';


export default function ArtistDashboard() {
  return (
    <div>
        <div className='artistSideBar'>
            <SideMenuBarArtist></SideMenuBarArtist>
            <h3 className='headerDashboard'>Dashboard</h3>
            <div className='notificationBg'></div>
            <div className='homeBg'></div>
            <div className='logoutBg'></div>
        </div>
        <div class="requestContainer">
          <img src={profileImage} class="profile"></img>
          <div class="eventDetails">
            <h2>W.R.A.Kavinda Perera</h2>
            <p class="eventType">Birthday Party</p>
            <p class="eventDate">2023.11.02</p>
            <p class="venue">Colombo 05</p>
          </div>
          <MDBBtn class="viewBtn">View</MDBBtn>
        </div>
    </div>
  )
}

