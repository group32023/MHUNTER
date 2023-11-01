import React, { useState } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import { Link, Route, Routes,useNavigate,useParams } from 'react-router-dom';
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

import {useEffect } from 'react';
import axios from 'axios';

function AllUserDetails() {
  const { type} = useParams();
  console.log(type);
    const [userR, setUserR] = useState([]);
  let navigate = useNavigate();
  const load=(id, type)=>{
    if (id) {
      navigate(`/admin/userdetails/viewdetails/${id}/${type}`);
    } else {
      console.error("Invalid id:", id);
    }

  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      if (type === "Artist") {
        axios.get(`http://localhost:8080/artist/view/verified`)
          .then(response => {
            setUserR(response.data);
          })
          .catch(error => {
            console.error(error);
            alert(error);
          });
      } else if (type === "Band") {
        axios.get(`http://localhost:8080/band/view/verified`)
          .then(response => {
            setUserR(response.data);
          })
          .catch(error => {
            console.error(error);
            alert(error);
          });
      } else if (type === "Organizer") {
      axios.get(`http://localhost:8080/orgnizer/view/verified`)
        .then(response => {
          setUserR(response.data);
        })
        .catch(error => {
          console.error(error);
          alert(error);
        });
    }
    }
  }, [type]);

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
    <div className='header-admin' >
      <div className='header-title' >
        <h1></h1>
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
                    <img src={`http://localhost:8080/postData/uploads/image/${row.imgPath}`} alt='band' className='profile-picture' />
                    </td>
                    <td className='data-row-registration-td'>{row.firstName}</td>
                    <td className='data-row-registration-td'>{row.email}</td>
                    <td className='data-row-registration-td'>{row.type}</td>
                    <td className='data-row-registration-td'>
                   
                    <span className='data-button'>
                        <button type='button' className='btn btn-primary' onClick={()=>load(row.id, row.type)}>View</button>
                    </span>
                    
                    </td>
                </tr>
                ))}
                
            
        </table>
    )}

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
