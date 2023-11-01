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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProofCheck() {
  const [formData, setFormData] = useState([]);
  const { id} = useParams();
  const {type} = useParams();
  const [showModal, setShowModal] = useState(false);

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
    axios
      .put(`http://localhost:8080/userStatus/${id}`)
      .then((response) => {
        setShowModal(true);
        alert("User is Verified");
        window.history.back();
      })
      .catch((error) => {
        alert('Error updating user: ' + error);
      });
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
              <img src={`http://localhost:8080/postData/uploads/image/${formData.imagePath}`}
               alt="band" className="profile-picture-proofcheck" />
            </div>
            <div className="my-form">
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
                        style ={{color:'white'}} value={type}
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
          <br />

          <div className="d-flex justify-content-between button-proofcheck">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary" style={{ backgroundColor: 'rgb(118, 67, 210)', border: 'none' }}>
              <h5>Accept</h5>
            </button>
            <button type="button" className="btn btn-danger">
              <h5>Reject</h5>
            </button>
          </div>
        </form>


        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>User Verification</Modal.Title>
          </Modal.Header>
          <Modal.Body>User is verified.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        
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

