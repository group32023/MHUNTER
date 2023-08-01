import React from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin';
import '../../assets/css/admin/adminDashboard.css'
import notification from '../../assets/images/notification-a.png'
import home from '../../assets/images/home-button-a.png'
import logout from '../../assets/images/logout-a.png'

export default function AdminDashboard() {
  return (
    <div className='main-container'>
      <div className='side-bar'>
        <SideMenuBarAdmin />
      </div>
      <div className='body-container'>
        <div className='header-admin'>

          <div className='header-title'>
              <h1>Dashboard</h1>
          </div>

          <div className='header-icon'>
              <img src={notification} className='notificationIcon' alt='notification'></img>
              <img src={home} alt='homebtn' className='homeIcon'></img>
              <img src={logout} alt='logout'className='logout'></img>
              <p className='logoutbtn'>Logout</p>
          </div>

        </div>

        <div className='body-admin'>
          <div className="container text-center">
            <div className="row">
                      <div className="col-sm-4 bg-black">
                        <p>Current Project</p>
                      </div>
                      <div className="col-sm-4 top-artists">          
                        <p>Project 2</p>    
                      </div>
                      <div className="col-sm-4">
                        <p>Calender</p>
                      </div>
            </div>
          </div>
        </div>

      </div> 
    </div>
  )
}
