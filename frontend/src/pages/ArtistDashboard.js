import React from 'react'
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistDashboard.css'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'


export default function ArtistDashboard() {


  return (
    <div>
        <div className='artistSideBar'>
            <SideMenuBarArtist></SideMenuBarArtist>
            <h3 className='headerDashboard'>Dashboard</h3>
            <div className='notificationBg'>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className='homeBg'>
              <img src={home} alt='homebtn' className='homeIcon'></img>
            </div>
            <div className='logoutBg'>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>
        </div>
    </div>
  )
}

