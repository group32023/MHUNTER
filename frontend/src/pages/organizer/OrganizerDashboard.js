import React from 'react'
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer'
import '../../assets/css/OrganizerDashboard.css'




export default function OrganizerDashboard() {

  function click() {
    console.log('awa')
  }
  return (
    <div>
      <div className='mainArtistDashboard'>
        <SideMenuBarArtist></SideMenuBarArtist>
        <div className='artistSideBarOne'>
          <p className='headerDashboard'>Dashboard</p>
          {/* <div className='notificationBg'>
              <img src={notification} className='notificationIcon' alt='notification'></img>
            </div>
            <div className='homeBg'>
              <img src={home} alt='homebtn' className='homeIcon'></img>
            </div>
            <div className='logoutBg'>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
            </div> */}

          {/* web post */}
          <div className='artistWebPoster'>
            <p>Welcome</p>

          </div>


        </div>

      </div>
    </div>
  )
}