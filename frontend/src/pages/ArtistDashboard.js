import React from 'react';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistDashboard.css'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import PendingRequest from '../components/PendingRequest'
import ArtistIncome from '../components/ArtistIncome'
import ArtistCalendar from '../components/ArtistCalendar'
import ArtistEarningOverview from '../components/ArtistEarningOverview'
import ArtistUpcommingEvent from '../components/ArtistUpcommingEvent'







export default function ArtistDashboard() {

  return (

    
    <div>
      <div className='mainArtistDashboard'>
        <SideMenuBarArtist></SideMenuBarArtist>
        <div className='artistSideBarOne'>
            <p className='headerDashboard'>Dashboard</p>
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

            {/* web post */}
            <div className='artistWebPoster'>
              <p>Welcome</p>
              <span>welcome to one and only music event management system</span>
              <img src={kpop} alt='' className='webPostImage'></img>
            </div>

            {/* pending request */}
            <PendingRequest />

            {/* Income */}
            <ArtistIncome/>

            <ArtistCalendar/>

            <ArtistEarningOverview/>

            <ArtistUpcommingEvent/>

        </div>
        
      </div>
    </div>
  )
}

