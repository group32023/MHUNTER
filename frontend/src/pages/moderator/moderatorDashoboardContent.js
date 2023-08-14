import React, {useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Topbar from '../../components/common/Topbar';
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import '../../assets/css/moderator/moderatorComplaints.css'
import ModeratorImage from '../../assets/images/moderatorDash.png'
import ModeratorPendingRequest from '../../components/Moderator/moderatorPendingRequest'
import ModeratorUpcommingEvent from '../../components/Moderator/moderatorUpcommingEvent'
import ModeratotPendingComplaints from '../../components/Moderator/moderatorPendingComplaints'
import ModeratorMemberincrease from '../../components/Moderator/moderatorMemberincrease'
import Calendar from 'react-calendar';


export default function ArtistDashboard() {
  const[date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }
  const [expand,setExpandedSideBar] = useState(true)

  return (

    <div className='moderator-container'>
    
    <Topbar/>
            {/*header icon*/}
            <div className='header-admin'>

                <div className='header-title'>
                    <h1>Dashboard</h1>
                </div> 

            </div>
            <div className={expand ? 'moderatorWebPoster':'moderatorWebPoster-exp'}>
              <p>Welcome!</p>
              <img src={ModeratorImage } alt='' className='webPostImage2'></img>

              <span>Welcome to a world where your music event dreams become a reality with just a few clicks...</span>
            </div>
            <div className="col-sm-4 moderator-cal">
              <div className='Moderator-calendar text-center'>
                <Calendar onChange={onChange} value={date} />
              </div>
              </div>
              

              <div className={expand ? 'moderatorUpcommingEvent':'moderatorUpcommingEvent-ex'}>
              <ModeratorUpcommingEvent/>
            </div>
                 {/* pending request */}
                 <div className={expand ? 'moderatorpendingRequestDiv':'moderatorpendingRequestDiv-exp'}>
                <ModeratorPendingRequest />
            </div>
                             {/* pending request */}
                <div className={expand ? 'moderatorpendingomplaintsDiv':'moderatorpendingomplaintsDiv-exp'}>
                 <ModeratotPendingComplaints />
                </div>
                <div className={expand ? 'moderatorregisterOverview':'moderatorregisterOverview-exp'}>
                 < ModeratorMemberincrease/>
                </div>
 
            

    </div>
    

  )
}
