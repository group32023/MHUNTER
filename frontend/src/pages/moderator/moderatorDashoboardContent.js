import React, {useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import '../../assets/css/moderator/moderatorComplaints.css'
import Topbar from '../../components/common/Topbar'
import ModeratorImage from '../../assets/images/moderatorDash.png'
import ModeratorPendingRequest from '../../components/Moderator/moderatorPendingRequest'
import ModeratorUpcommingEvent from '../../components/Moderator/moderatorUpcommingEvent'
import ModeratotPendingComplaints from '../../components/Moderator/moderatorPendingComplaints'
import ModeratorMemberincrease from '../../components/Moderator/moderatorMemberincrease'
import Calendar from 'react-calendar';
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
import ModeratorDashoboardContent from './moderatorDashoboardContent';
import EventDetails from './eventDetails';
import ModeratorEvent from './event';
import ViewComplaints from './viewComplaints';
import ProofCheck from './ProofCheck';
import Suspenduser from './suspenduser';  


export default function ModeratorDashboard() {
  const[date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }
  const [expand,setExpandedSideBar] = useState(true)

  return (
    <>
    <SideMenuBarModerator>
    <Topbar/>

    <div className='moderator-body-container'>

            {/*header icon*/}
            <div className='header-admin'>

                <div className='header-title'>
                    <h1>Dashboard</h1>
                </div> 

            </div>
            <div className={expand ? 'moderatorWebPoster':'moderatorWebPoster-exp'}>
              <center><p>Welcome!</p></center>
              <img src={ModeratorImage } alt='' className='webPostImage2'></img>

              <span>Welcome to a world where your music event dreams become a reality with just a few clicks...</span>
            </div>
            <div className="col-sm-4 moderator-cal">
              <div className='Moderator-calendar text-center'>
                <Calendar onChange={onChange} value={date} />
              </div>
              </div>
              

              {/* <div className={expand ? 'moderatorUpcommingEvent':'moderatorUpcommingEvent-ex'}>
              <ModeratorUpcommingEvent/>
               </div> */}
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
    <Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/moderator/moderatorDashoboardContent' element={<ModeratorDashoboardContent />}></Route>
          <Route path='/moderator/registration' element={<ModeratorRegistration />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/complaints/viewComplaints' element={<ViewComplaints />}></Route>

          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>
          <Route path='/moderator/event/eventDetails' element={<EventDetails />}></Route>
          <Route path='/moderator/registration/ProofCheck' element={<ProofCheck />}></Route>
          <Route path='/moderator/registration/Proofcheck/suspenduser' element={<Suspenduser />}></Route>

        </Routes>
      </SideMenuBarModerator>
          </>

    

  )
}
