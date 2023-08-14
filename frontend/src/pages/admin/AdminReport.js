import React from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import notification from '../../assets/images/notification-a.png'
import home from '../../assets/images/home-button-a.png'
import logout from '../../assets/images/logout-a.png'
import { Link } from 'react-router-dom';

function AdminReport() {
  return (
    <div className='main-container'>
        <div className='side-bar'>
        <SideMenuBarAdmin />
        </div>
        <div className='body-container'>
        <div className='header-admin'>

            <div className='header-title'>
                <h2>Report</h2>
            </div>

            <div className='header-icon'>
                <img src={notification} className='notificationIcon' alt='notification'></img>
                <img src={home} alt='homebtn' className='homeIcon'></img>
                <img src={logout} alt='logout'className='logout'></img>
                <Link to={"/"} className='logoutbtn'>
                <p>Logout</p>
                </Link>
            </div>

        </div>
        </div>
    </div>
  )
}

export default AdminReport
