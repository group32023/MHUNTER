import React, { useState } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin';
import '../../assets/css/admin/adminDashboard.css'
import notification from '../../assets/images/notification-a.png'
import home from '../../assets/images/home-button-a.png'
import logout from '../../assets/images/logout-a.png'
import Calendar from 'react-calendar';

export default function AdminDashboard() {
  const[date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  }
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


        <div className="container ">
          <div className="row">
            <div className="col-sm-4 ">
              <div className='top-band-list'>
                <h4 className='text-center'>Top 10 Bands</h4>
              </div>
            </div>
            <div className="col-sm-4">
              <div className='top-band-list'>
                <h4 className='text-center'>Top 10 Artists</h4>
              </div>
            </div>
            <div className="col-sm-4">
              <div className='admin-calendar text-center'>
                <Calendar onChange={onChange} value={date} />
              </div>
            </div>
          </div>
        </div>

      </div> 
    </div>
  )
}
