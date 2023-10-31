import React, { useRef, useState,useEffect } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import band from '../../assets/images/band.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

import { Link, Route, Routes } from 'react-router-dom';

import AdminDashboard from './AdminDashboard'
import AdminRegistration from './AdminRegistration';
import ProofCheck from './ProofCheck';
import AllUserDetails from './AllUserDetails';
//import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'
import fimage from '../../assets/icons/requestlog.png'

function ViewUserDetails() {
  const [userformData, setuserFormData] = useState([]);
  const { id} = useParams();
  const {type} = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:8080/user/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setuserFormData(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, [id]);

    /*const [formData, setFormData] = useState({
        name: '',
        usecode: '',
        userType: '',
        address: '',
        email: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      };
    
      const inputRef = useRef(null);*/

    
      return (
        <>
        <SideMenuBarAdmin>
        <Topbar/>
        <div className='header-admin'>
          <div className='header-title'>
              <h2>View Details </h2>
          </div>
        </div>

        <form>
          <div className='user-details'>
            <div >
              <img src={band} alt='band' className='profile-picture-proofcheck'></img>
            </div>
            <div className="my-form">
              <table>
                <tr>
                  <td className='label'>Name  :</td>
                  <td><input type="text" name="name" value={userformData.firstName} placeholder='D.K.D.Dickovita' style ={{color:'white'}}/></td>
                </tr>

                <tr>
                  <td className='label'>User Code :</td>
                  <td><input type="text" name="usecode" value={userformData.userId} placeholder='0012' style ={{color:'white'}} /></td>
                </tr>

                <tr>
                  <td className='label' >User Type :</td>
                  <td><input type="text" name="userType" value={type} placeholder='Artist' style ={{color:'white'}}/></td>
                </tr>
                <tr>
                  <td className='label'>Address  :</td>
                  <td><input type="text" name="address" value={userformData.address} placeholder='No 03, Colombo' style ={{color:'white'}}/></td>

                </tr>

                  <td className='label'>Email   :</td>
                  <td><input type="email" name="email" value={userformData.email} placeholder='anjalika@gmail.com' style ={{color:'white'}}/></td>
              </table>
            </div>
          </div>
          
          <div className="d-flex justify-content-between button-proofcheck">
            
            <button  type="button" className="btn btn-danger"><h5>Remove User</h5></button>
          </div>
        </form>

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

export default ViewUserDetails
