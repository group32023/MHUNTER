import React, { useState } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'

import AdminDashboard from './AdminDashboard'
import AdminRegistration from './AdminRegistration';
import ProofCheck from './ProofCheck';
//import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'

function AllUserDetails() {
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
            <h1>User Details</h1>
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
        <span className='data-name'>D.K.D.Dickovita</span>
        <span className='data-email'>anjalika@gmail.com</span>
        <span className='data-status'>Artist</span>
        <Link to={'/admin/userdetails/viewdetails'}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>Umasha Perera</span>
        <span className='data-email'>pereraa@gmail.com</span>
        <span className='data-status'>Artist</span>
        <Link to={'/admin/userdetails/viewdetails'}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>Nirodha lakshan</span>
        <span className='data-email'>lakshan@gmail.com</span>
        <span className='data-status'>Artist</span>
        <Link to={'/admin/userdetails/viewdetails'}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>S.P.Theekshani</span>
        <span className='data-email'>thekshani@gmail.com</span>
        <span className='data-status'>Artist</span>
        <Link to={'/admin/userdetails/viewdetails'}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <div className='data-row'>
        <span><img src={band} alt='band'className='profile-picture'></img></span>
        <span className='data-name'>Udari Wijamuni</span>
        <span className='data-email'>wijamuni@gmail.com</span>
        <span className='data-status'>Artist</span>
        <Link to={'/admin/userdetails/viewdetails'}>
            <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
        </Link>
    </div>
    <Routes>        
          <Route path='/admin/admindashobard' element={<AdminDashboard/>} />
          <Route path='/admin/registration' element={<AdminRegistration/>} />
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

export default AllUserDetails
