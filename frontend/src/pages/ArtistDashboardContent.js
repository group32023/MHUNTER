import React, {useState } from 'react'
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


export default function ArtistDashboardContent() {
  

  const [expand,setExpandedSideBar] = useState(true)

  return (

    
    <div>
      <div className='mainArtistDashboard'>
        <SideMenuBarArtist setExpandedSideBar={setExpandedSideBar}></SideMenuBarArtist>
        <div className='artistSideBarOne' id='artistSideBarOne'>
            <p className='headerDashboard'>Dashboard</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
              <img src={home} alt='homebtn' className='homeIcon'></img>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>

            {/* web post */}
            <div className={expand ? 'artistWebPoster':'artistWebPoster-exp'}>
              <p>Welcome</p>
              <span>welcome to one and only music event management system</span>
              <img src={kpop} alt='' className='webPostImage'></img>
            </div>

            {/* pending request */}
            <div className={expand ? 'pendingRequestDiv':'pendingRequestDiv-exp'}>
                <PendingRequest />
            </div>

            {/* Income */}
            <div className={expand ? 'artistIncomeDiv':'artistIncomeDiv-exp'}>
                <ArtistIncome/>
            </div>

            <div className={expand ? 'artistCalanderDiv':'artistCalanderDiv-exp'}>
                <ArtistCalendar/>
            </div>

            <div className={expand ? 'artistEarningOverview':'artistEarningOverview-exp'}>
              <ArtistEarningOverview/>
            </div>
            
            <div className={expand ? 'artistUpcommingEvent':'artistUpcommingEvent-ex'}>
              <ArtistUpcommingEvent/>
            </div>

        </div>
        
      </div>
    </div>
  )
}

