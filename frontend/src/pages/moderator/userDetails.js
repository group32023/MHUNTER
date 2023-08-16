import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator'
import '../../assets/css/moderator/moderatorComplaints.css'
import Topbar from '../../components/common/Topbar'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import band from '../../assets/images/band.jpg'
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
import ModeratorDashoboardContent from './moderatorDashoboardContent';
import EventDetails from './eventDetails';
import ModeratorEvent from './event';
import ViewComplaints from './viewComplaints';
import ProofCheck from './ProofCheck';
import Suspenduser from './suspenduser';  
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
    <SideMenuBarModerator>
    <Topbar/>
    <div className='moderator-body-container'>

            {/*header icon*/}
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
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-email'>anjalika@gmail.com</span>
                <span className='data-status'>Organizer</span>
                <Link to={'/admin/userdetails/viewdetails'}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-email'>anjalika@gmail.com</span>
                <span className='data-status'>Organizer</span>
                <Link to={'/admin/userdetails/viewdetails'}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-email'>anjalika@gmail.com</span>
                <span className='data-status'>Organizer</span>
                <Link to={'/admin/userdetails/viewdetails'}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-email'>anjalika@gmail.com</span>
                <span className='data-status'>Organizer</span>
                <Link to={'/admin/userdetails/viewdetails'}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
            </div>
            <div className='data-row'>
                <span><img src={band} alt='band'className='profile-picture'></img></span>
                <span className='data-name'>D.K.D.Anjalika</span>
                <span className='data-email'>anjalika@gmail.com</span>
                <span className='data-status'>Organizer</span>
                <Link to={'/admin/userdetails/viewdetails'}>
                    <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                </Link>
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

export default AllUserDetails
