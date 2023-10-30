import "../assets/css/admin/adminProfile.css"
import band from '../assets/images/band.jpg';


import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist';
import { Link, Route, Routes} from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AdminProfile() {
  const [formData, setFormData] = useState({
    userId: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });
  const { id} = useParams();

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

  const backButton = () => {
    window.history.back();
  };

  const userUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/user/${id}`, formData)
      .then((response) => {
        //console.log(formData);
        handleShow();
        //alert('User is Updated Successfully');
      })
      .catch((error) => {
        alert('Error updating user: ' + error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SideMenuBarArtist>
      
    <div className='adminProfile-container'>
      <div className="adminProfile-backBtn">
        <button onClick={backButton}>Back</button>
      </div>
       
      <div className='adminProfile-form'>
        <h2>Profile Details</h2>

        <div className='artist-details-in-dashboard'>
            <img src={band}  alt="Artist" style={{ maxWidth: '100px', display: 'block', margin: '0 auto' , borderRadius:'50%', height:'100px'}} />
            <br />
            <div class="row">
                <div class="col-4">
                <label for="userCode"><b>User Code :</b></label>
                </div>
                <div class="col-8">
                <input type="text" id="uCode" name="uCode" placeholder="0011" value={formData.userId} style={{color:'white'}}/>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                <label for="lname"><b>First Name :</b></label>
                </div>
                <div class="col-8">
                <input type="text" id="fname" name="firstName" placeholder="Diani" value={formData.firstName} style={{color:'white'}}
                onChange={handleInputChange} />
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                <label for="lname"><b>Last Name :</b></label>
                </div>
                <div class="col-8">
                <input type="text" id="lname" name="lastName" placeholder="Dickovita" value={formData.lastName} style={{color:'white'}}
                onChange={handleInputChange}/>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                <label for="lname"><b>Address :</b></label>
                </div>
                <div class="col-8">
                <input type="text" id="address" name="address" placeholder="Matara" value={formData.address} style={{color:'white'}}
                onChange={handleInputChange}/>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                <label for="lname"><b>Phone No :</b></label>
                </div>
                <div class="col-8">
                <input type="text" id="phone number" name="phoneNumber" placeholder="071 2312345" value={formData.phoneNumber} style={{color:'white'}}
                onChange={handleInputChange}/>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                <label for="lname"><b>Email :</b></label>
                </div>
                <div class="col-8">
                <input type="text" id="email" name="email" placeholder="diani@gmail.com" value={formData.email} style={{color:'white'}}
                onChange={handleInputChange}/>
                </div>
            </div>

            <div className="d-flex justify-content-between button-proofcheck">
            <button type="submit"  className="btn btn-primary" style={{ backgroundColor: 'rgb(118, 67, 210)', border: 'none', height:'40px', width:'auto' }} onClick={userUpdate}>
              <h5>Update</h5>
            </button>
            <button type="button" className="btn btn-danger" style={{height:'40px', width:'auto', marginLeft:'10%'}}>
              <h5>Cancel</h5>
            </button>
          </div>

        </div>
                           
      </div>
    </div>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton  style={{backgroundColor:'#24292D', color:'white'}}>
          <Modal.Title>Hi Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{backgroundColor:'black', color:'white'}}>Your Details are Updated Successfully</Modal.Body>
        <Modal.Footer  style={{backgroundColor:'black',color:'white'}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

   
      </SideMenuBarArtist>
    </>
  )
}
