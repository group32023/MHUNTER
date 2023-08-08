import React, {useState } from 'react'
import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import '../../assets/css/artistDashboard.css'
import notification from '../../assets/images/notification.png'
import home from '../../assets/images/home-button.png'
import logout from '../../assets/images/logout.png'
import kpop from '../../assets/images/kpop.png'
import PendingRequest from '../../components/Moderator/PendingRequest'
import ArtistIncome from '../../components/Moderator/ArtistIncome'
import ArtistCalendar from '../../components/Moderator/ArtistCalendar'
import ArtistEarningOverview from '../../components/Moderator/ArtistEarningOverview'
import ArtistUpcommingEvent from '../../components/Moderator/ArtistUpcommingEvent'


export default function ArtistDashboard() {
  

  const [expand,setExpandedSideBar] = useState(true)

  return (

    
    <div>
    <div className='mainArtistDashboard'>
      <SideMenuBarModerator setExpandedSideBar={setExpandedSideBar}></SideMenuBarModerator>
      <div className='artistSideBarOne' id='artistSideBarOne'>
          <p className='headerDashboard'>Dashboard</p>
       
            
            
            

            {/* web post */}
            <div className={expand ? 'artistWebPoster':'artistWebPoster-exp'}>
              <p>Welcome</p>
              <span>welcome to one and only music event management system</span>
              <img src={kpop} alt='' className='webPostImage'></img>
            </div>

            {/* pending request */}
            {/* <div className={expand ? 'pendingRequestDiv':'pendingRequestDiv-exp'}>
                <PendingRequest />
            </div> */}

            {/* Income */}
            <div className={expand ? 'artistIncomeDiv':'artistIncomeDiv-exp'}>
                <ArtistIncome/>
            </div>

            {/* <div className={expand ? 'artistCalanderDiv':'artistCalanderDiv-exp'}>
                <ArtistCalendar/>
            </div> */}

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
