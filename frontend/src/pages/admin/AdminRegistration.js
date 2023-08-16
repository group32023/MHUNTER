import React, { useState } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import notification from '../../assets/images/notification-a.png'
import home from '../../assets/images/home-button-a.png'
import logout from '../../assets/images/logout-a.png'
import { Link,Routes, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'

import AdminDashboard from './AdminDashboard'
import ProofCheck from './ProofCheck';
import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'

function AdminRegistration() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      console.log('Searching for:', searchTerm);
    };
  return (
    <>
    <SideMenuBarAdmin>
    <Topbar/>
    <div className='header-admin'>
      <div className='header-title'>
        <h1>Registration</h1>
      </div>
    </div>
            {/*search bar*/}
    <div className="container mt-3 search-bar">
        <div className="input-group mb-3">
            <input
            type="text"
            className="form-control "
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            />
            <div className="input-group-append">
            <button className="btn btn-primary search-button" type="button" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            </div>
        </div>
    </div>
    {/*table*/}
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>D.K.D.Anjalika</span>
        <span className='data-memberType'>Artist</span>
        <span className='data-status'>Pending</span>
        <Link to={"/admin/registration/proofcheck"}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>D.K.D.Anjalika</span>
        <span className='data-memberType'>Artist</span>
        <span className='data-status'>Pending</span>
        <Link to={"/admin/registration/proofcheck"}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>D.K.D.Anjalika</span>
        <span className='data-memberType'>Artist</span>
        <span className='data-status'>Pending</span>
        <Link to={"/admin/registration/proofcheck"}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>D.K.D.Anjalika</span>
        <span className='data-memberType'>Artist</span>
        <span className='data-status'>Pending</span>
        <Link to={"/admin/registration/proofcheck"}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>D.K.D.Anjalika</span>
        <span className='data-memberType'>Artist</span>
        <span className='data-status'>Pending</span>
        <Link to={"/admin/registration/proofcheck"}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>

    <Routes>
          
          <Route path='/admin/admindashobard' element={<AdminDashboard/>} />
          <Route path='/admin/registration/proofcheck' element={<ProofCheck/>} />
          <Route path='/admin/userdetails' element={<AllUserDetails/>} />
          <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails/>} />
          <Route path='/admin/report' element={<AdminReport/>} />
          <Route path='/admin/settings' element={<AdminSettings/>} />
    </Routes>
    </SideMenuBarAdmin>
    </>
  )
}

export default AdminRegistration