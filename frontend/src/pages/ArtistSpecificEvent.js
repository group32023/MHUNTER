import React from 'react'
import {useState} from 'react'
import '../assets/css/artistSpecificEvent.css'
import event01 from '../assets/images/slide_2.jpg'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import clock from '../assets/images/clock(1).png'
import stopWatch from '../assets/images/stopwatch(2).png'
import eventType from '../assets/images/eventtype.png'
import artistUpcommingCalandar from '../assets/images/calendar(2).png'
import crowd from '../assets/images/group.png'

import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'

export default function ArtistSpecificEvent() {
    const [expand,setExpandedSideBar] = useState(true)
  return (
    <div className='artistSpecificEventDiv'>
        <div className='mainArtistDashboard'>
            <SideMenuBarArtist></SideMenuBarArtist>
        </div>
            <p className='headerDashboard'>Events</p>
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

            <div className='mainDescriptionDiv'>
                <img src={event01} className='specificEventImg'></img>
                <p className='specificEventName'>BEAT BLITZ</p>
                <p className='specificEventDescription'>Join us for a heartwarming wedding celebration in the scenic coastal city of Matara. A day filled with love, laughter, and lasting memories. Let's toast to new beginnings!</p>

            </div>

            <div className='countDown'>
                <p className='countDownTitle'>Countdown</p>
                <img src={stopWatch} className='countClock'></img>
            </div>

            <div className='specificEventType'>
                <p className='specificEventTypeTitle'>Event Type</p>
                <div className='specificeventTypeDiv'>
                  <img className='spcificEventTypeImage' src={eventType} alt=''></img>
              </div>
              <p className='specificEventTypeExplain'>Outdoor Show</p>
            </div>

            <div className='specificEventDate'>
                <p className='specificEventDateTitle'>Event Date</p>
                <div className='specificDateDiv'>
                  <img className='specificdateImage' src={artistUpcommingCalandar} alt=''></img>
                </div>
              <p className='specificDateValue'>Jun 14 2023</p>
            </div>

            <div className='specificEventTime'>
                <p className='specificEventTimeTitle'>Event Time</p>
                <p className='specificDateValue'>17:00:00 - 00:00:00</p>
                <img className='specificTimeImage' src={clock} alt=''></img>
            </div>

            <div className='specificEventCrowd'>
                <p className='specificEventCrowdTitle'>Expected Crowd</p>
                <p className='specificCrowdValue'>1200</p>
                <img className='specificCrowdImage' src={crowd} alt=''></img>
            </div>

            <div className='specificEventLocation'>
               
            </div>

            <div className='specificEventIncome'>
                <p className='specificEventIncomeTitle'>Payment Details</p>
                <p className='specificTotal'>Total</p>
                <p className='specificTotalValue'>100,000</p>
                <p className='specificPayed'>Payed</p>
                <p className='specificPayedValue'>+50,000</p>
                <p className='specificRest'>Rest</p>
                <p className='specificRestValue'>-50,000</p>
            </div>

    </div>
  )
}
