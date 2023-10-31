import React, {useEffect, useState } from 'react'
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
import Notification from '../components/common/Notification'
import '../assets/css/notification.css'

export default function ArtistDashboard() {
  

  const [expand,setExpandedSideBar] = useState(true)
  const [isVisibleNotificationUI, setVisibleNotificationUI] = useState(false)
  const [noNotification,setNotification] = useState(0)
  const userId = localStorage.getItem('userId')

  const handleOpenNotification = () =>{
    setVisibleNotificationUI(!isVisibleNotificationUI)
    fetch(`http://localhost:8080/notification/seen/${userId}`, { 
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log('Success:');
    })
    .catch((error) => {
      console.error('Error:');
    });
  }




  // get the no of unseen notification
  const handle = () =>{
    fetch(`http://localhost:8080/notification/unseen/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        setNotification(data);
        console.log(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }

  useEffect(()=>{
    handle();
  },[])

  return (

    
    <div>
      <SideMenuBarArtist>
        
        <div >
            <p className='headerDashboard'>Dashboard</p>
            <div className={expand ? 'notificationBg':'notificationBg-ex'}>
              <div className={noNotification >0 ? 'count-notification-bg':''}>
                <small>{noNotification >0 ? noNotification:undefined}</small>
              </div>
              <img src={notification} className='notificationIcon' alt='notification' onClick={(e)=>handleOpenNotification()}></img>
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
            {isVisibleNotificationUI ?  <Notification/>:undefined}
            

        </div>
        
        </SideMenuBarArtist>
    </div>
  )
}

