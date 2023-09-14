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

import {useEffect } from 'react';
import axios from 'axios';

function AdminRegistration() {

  const [userR, setUserR] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        axios.get(`http://localhost:8080/allUsers`)
            .then(response => {
                setUserR(response.data);
            })
            .catch(error => {
                console.error(error);
                alert(error);
            });
    }
}, []);

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

    {userR.length > 0 && (
        <table style={{width:'80%'}} className='data-row-registration'>
            {userR.map((row, index) => (
                <tr key={index} className='data-row-registration-tr'>
                    <td className='data-row-registration-td'>
                    <img src={row.profilePicture} alt='band' className='profile-picture' />
                    </td>
                    <td className='data-row-registration-td'>{row.firstName}</td>
                    <td className='data-row-registration-td'>{row.orgId}</td>
                    <td className='data-row-registration-td'>{row.status}</td>
                    <td className='data-row-registration-td'>
                    <Link to={`/admin/registration/proofcheck/${row.id}`}>
                        <span className='data-button'>
                        <button type='button' className='btn btn-primary'>View</button>
                        </span>
                    </Link>
                    </td>
                </tr>
                ))}
            
            <tr className='data-row-registration-tr'>
                <td className='data-row-registration-td'><img src={band} alt='band'className='profile-picture'></img></td>
                <td className='data-row-registration-td'>D.K.D.Anjalika</td>
                <td className='data-row-registration-td'>Artist</td>
                <td className='data-row-registration-td'>Pending</td>
                <td className='data-row-registration-td'> 
                    <Link to={"/admin/registration/proofcheck"}>
                        <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                    </Link>
                </td>
            </tr>
            <tr className='data-row-registration-tr'>
                <td className='data-row-registration-td'><img src={band} alt='band'className='profile-picture'></img></td>
                <td className='data-row-registration-td'>D.K.D.Anjaaaalika</td>
                <td className='data-row-registration-td'>Artist</td>
                <td className='data-row-registration-td'>Pending</td>
                <td className='data-row-registration-td'> 
                    <Link to={"/admin/registration/proofcheck"}>
                        <span className='data-button'><button type='button' className=' btn btn-primary'> View </button></span>
                    </Link>
                </td>
            </tr>  
        </table>
    )}



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
