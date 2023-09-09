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
import CalendarEventPopup from '../components/common/CalendarEventPopup'
import DashboardCarousel from '../components/organizer/dashboardCarousel'
import ArtistDashboardCarousel from '../components/ArtistDashboardCarousel'
import { Link, useNavigate } from 'react-router-dom'

export default function ArtistDashboard() {
  

  const [expand,setExpandedSideBar] = useState(true)

  return (
    <div>
      <SideMenuBarArtist>
        
        <div >
            <p className='headerDashboard'>Dashboard</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className={expand ? 'homeBg':'homeBg-ex'}>
            <Link to={'/'}>
                <img src={home} alt='homebtn' className='homeIcon'></img>
              </Link>
            </div>
            <div className={expand ? 'logoutBg':'logoutBg-ex'}>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div>

            {/* web post */}
            <ArtistDashboardCarousel/>

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
            <div className='he'>
            
            </div>
            

        </div>
        
        </SideMenuBarArtist>
    </div>
  )
}

