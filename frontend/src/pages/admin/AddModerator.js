import React from 'react'
import { useRef, useState} from 'react'
import { Link, Route, Routes,useNavigate,useParams } from 'react-router-dom';
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'

import AdminDashboard from './AdminDashboard'
import AdminRegistration from './AdminRegistration';
import ProofCheck from './ProofCheck';
//import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'

export default function AddModerator() {
    const formRef = useRef(null);

    const inputRef = useRef(null);
    const [Image, setImage] = useState("");
  
    const handleImageClick = () =>{
      inputRef.current.click();
    }
    const handleImageChange = (event) =>{
      const file = event.target.files[0];
      console.log(file);
      setImage(event.target.files[0]);
    }
    const resetFormFields = () => {
      setArtistName("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setAddress("");
      setPassword("");
      setCon_Password("");
      setImage("");
    };
    
    const [name, setArtistName] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setCon_Password] = useState("");
    const type = "Moderator";
  
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    const regDate = `${year}-${month}-${day}`;
    const save = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("address", address);
      formData.append("password", password);
      formData.append("type", type);
      formData.append("regDate", regDate);
      formData.append("Image", Image);
      try {
  
        if(password.length < 8){
          alert("Password must have at least 8 characters");
        }
        else if(password !== confirmPassword){
          alert("Input Confirm your password correctly");
        }
        else{
  
          const response = await fetch("http://localhost:8080/user/signup", {
            method: "POST",
            body: formData, 
          });
  
          if (response.ok) {
            formRef.current.reset();
            resetFormFields();
            alert("Moderator Registration Successfully");
            
          } else {
            const errorMessage = await response.text();
            if (errorMessage === "Email already exists!") {
              alert("Email is already registered. Please use a different email.");
            } else {
              alert("Failed to register artist");
            }
          }
          
        }
  
  
      }catch(err){
        alert(err);
      }
    }
  
  
    return (
        <>
        <SideMenuBarAdmin>
        <Topbar/>
      <div className='template d-flex justify-content-center align-items-center '>
          
            <form ref={formRef} onSubmit={save} className='artist_signup_form_container p-5 rounded vh-50' style={{backgroundColor:'#2f363e'}} enctype="multipart/form-data">
              <div className='artist-signup-left-box' >


                    <div className='mb-2 text-white text-field' style={{display:'flex'}}>
                      <div style={{padding:'5px'}} >
                        <label htmlFor='Email'>First Name</label>
                        <input type='text' placeholder='' className='form-control' required
                          value = {firstName}
                          onChange ={(event) => {
                          setFirstName(event.target.value);
                        }}/>
                      </div>
                      <div style={{padding:'5px'}}>
                        <label htmlFor='Email'>Last Name</label>
                        <input type='text' placeholder='' className='form-control' required
                        value = {lastName}
                        onChange ={(event) => {
                        setLastName(event.target.value);
                      }}/>
                      </div>
  
                    </div>

                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='Email'>Email</label>
                      <input type='email' placeholder='' className='form-control' required
                        value = {email}
                        onChange ={(event) => {
                        setEmail(event.target.value);
                      }}
                      />
                    </div>
                    
                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='PhoneNumber'>Phone Number</label>
                      <input type='tel' placeholder='071 1234567' className='form-control' pattern='[0-9]{3} [0-9]{7}'
                      value = {phoneNumber}
                      onChange ={(event) => {
                      setPhoneNumber(event.target.value);
                    }}/>
                    </div>
                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='Address'>Address</label>
                      <input type='text' placeholder='' className='form-control' required
                      value = {address}
                      onChange ={(event) => {
                      setAddress(event.target.value);
                    }}/>
                    </div>
                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='Address'>Password</label>
                      <input type='password' placeholder='' className='form-control' required
                      value = {password}
                      onChange ={(event) => {
                      setPassword(event.target.value);
                    }}/>
                    </div>
                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='Address'>Confirm Password</label>
                      <input type='password' placeholder='' className='form-control'
                      value = {confirmPassword}
                      onChange ={(event) => {
                      setCon_Password(event.target.value);
                    }}/>
                    </div>
              </div>
              <div className='artist-signup-right-box'>
                  <div className=''>
                      <h4>Add Moderator</h4>
                  </div>
  
                  <div className='artist-image' onClick={handleImageClick}>
                    <div>
      
                    {Image ? 
                      <img src={URL.createObjectURL(Image)} alt="ArtistDp" height={150} width={150}/>
                    :
                      <img src={require('../../assets/images/artist.jpg')} alt="ArtistDp" height={150} width={150}/>
                    }
                    <input 
                      type='file' 
                      name="Image"
                      ref={inputRef} 
                      onChange={handleImageChange} 
                      style={{display:'none'}}
                    />  
                    </div>  
  
                    <div className='upload-image'>
                    <h6 ><b>Upload Image</b></h6>
                    </div>
                    
                  </div>

  
                    <div className='signup-button' >
                      <button type='submit' >Add Moderator</button>
                    </div>
                  
              </div>
            </form>
    
          
      </div>
      <Routes>        
            <Route path='/admin/admindashobard' element={<AdminDashboard/>} />
            <Route path='/admin/registration' element={<AdminRegistration/>} />
            <Route path='/admin/registration/proofcheck' element={<ProofCheck/>} />
            

            <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails/>} />
            <Route path='/admin/report' element={<AdminReport/>} />
            <Route path='/admin/settings' element={<AdminSettings/>} />
      </Routes>
      </SideMenuBarAdmin>
      </>
  
    )
}
