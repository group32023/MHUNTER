import React, { useRef, useState, useEffect } from 'react';
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin';
import '../../assets/css/admin/adminDashboard.css';
import band from '../../assets/images/band.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes} from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminRegistration from './AdminRegistration';
import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar';
import fimage from '../../assets/icons/requestlog.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProofCheck() {
  const [formData, setFormData] = useState([]);
  const { id} = useParams();// Access the 'id' parameter from the route

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
        setFormData(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, [id]);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const inputRef = useRef(null);
  const [image, setImage] = useState('');

  const handleImageClick = () => {
    inputRef.current.click();
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };  


  return (
    <>
      <SideMenuBarAdmin>
        <Topbar />

        <div className="header-admin">
          <div className="header-title">
            <h2>Check Proof </h2>
          </div>
        </div>

        <form className="form-user-details" >
          <div className="user-details">
            <div>
              <img src={band} alt="band" className="profile-picture-proofcheck" />
            </div>
            <div className="my-form" onClick={handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td className="label">Name :</td>
                    <td>
                      <input type="text" name="name"  style ={{color:'white'}} value={formData.firstName}/>
                    </td>
                  </tr>

                  <tr>
                    <td className="label">User Code :</td>
                    <td>
                      <input
                        type="text"
                        name="usecode"
                        placeholder="1010"
                        style ={{color:'white'}} value={formData.userId}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="label">User Type :</td>
                    <td>
                      <input
                        type="text"
                        name="userType"
                        placeholder="Artist"
                        style ={{color:'white'}} value={formData.type}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Address :</td>
                    <td>
                      <input
                        type="text"
                        name="address"
                        placeholder="Matara"
                        style ={{color:'white'}} value={formData.address}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="label">Email :</td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        placeholder="anjalika@gmail.com"
                        style ={{color:'white'}} value={formData.email}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="proof">
            <span className="label" style={{ fontSize: 'larger' }}>
              Proof :
            </span>
            <span className="proof-file">
              <div onClick={handleImageClick}>
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="Proof" height={150} width={150} />
                ) : (
                  <img src={fimage} alt="Proof" height={100} width={100} className="upload-icon" />
                )}
                <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
              </div>
            </span>
            <span className="proof-file">
              <div onClick={handleImageClick}>
                {image ? (
                  <img src={URL.createObjectURL(image)} alt="proof" height={150} width={150} />
                ) : (
                  <img src={fimage} alt="Proof" height={100} width={100} className="upload-icon" />
                )}
                <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
              </div>
            </span>
          </div>
          <div className="d-flex justify-content-between button-proofcheck">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgb(118, 67, 210)', border: 'none' }}>
              <h5>Accept</h5>
            </button>
            <button type="button" className="btn btn-danger">
              <h5>Reject</h5>
            </button>
          </div>
        </form>
        <Routes>
          <Route path="/admin/admindashobard" element={<AdminDashboard />} />
          <Route path="/admin/registration" element={<AdminRegistration />} />
          <Route path="/admin/registration/proofcheck/:id" element={<ProofCheck />} />
          <Route path="/admin/userdetails" element={<AllUserDetails />} />
          <Route path="/admin/userdetails/viewdetails" element={<ViewUserDetails />} />
          <Route path="/admin/report" element={<AdminReport />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Routes>
      </SideMenuBarAdmin>
    </>
  );
}

export default ProofCheck;
