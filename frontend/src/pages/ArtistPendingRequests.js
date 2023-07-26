import React from 'react'
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistDashboard.css'

export default function ArtistPendingRequests() {
  return (
    <div>
        <div className='artistSideBar'>
            <SideMenuBarArtist></SideMenuBarArtist>
            <h3 className='headerDashboard'>Pending Requests</h3>
            <div className='notificationBg'></div>
            <div className='homeBg'></div>
            <div className='logoutBg'></div>
        </div>
    </div>
  )
}

