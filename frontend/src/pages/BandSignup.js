import React from 'react'
import { useRef, useState} from 'react'

export default function BandSignup() {
    const formRef = useRef(null);
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
  
    const handleImageClick = () =>{
      inputRef.current.click();
    }
    const handleImageChange = (event) =>{
      const file = event.target.files[0];
      console.log(file);
      setImage(event.target.files[0]);
    }

    const [bandname, setBandName] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setCon_Password] = useState("");
    const membertype = "Band";
    const regdate = new Date();
    const save = (event) => {
      event.preventDefault();
      const band = {
         bandname, email, firstname, lastname, phonenumber, address, password, membertype, regdate };
      try {
  
        if(password.length < 8){
          alert("Password must have at least 8 characters");
        }
        else if(password !== confirmpassword){
          alert("Input Confirm your password correctly");
        }
        else{
          /*console.log("Artist Name:", artistname);
          console.log("Email:", email);
          console.log("First Name:", firstname);
          console.log("Last Name:", lastname);
          console.log("Phone Number:", phonenumber);
          console.log("Address:", address);
          console.log("Password:", password);
          console.log(confirmpassword);*/
          
          fetch("http://localhost:8080/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(band),
          })
  
         formRef.current.reset();
    
          alert("Band Registration Sucessfully");
        }
  
  
      }catch(err){
        alert(err);
      }
    }
    
    return (
      <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage2'>
        <form ref={formRef} onSubmit={save} className='artist_signup_form_container p-5 rounded vh-50'>
          
              <div className='artist-signup-left-box'>
                    <div className='artist-text'>
                      <h6><b>Start your journey to be hired today!</b></h6>
                    </div>
                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='ArtistName'>Band Name</label>
                      <input type='text' placeholder='' className='form-control'required
                    value = {bandname}
                    onChange ={(event) => {
                    setBandName(event.target.value);
                  }}/>
                    </div>
                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='Email'>Email</label>
                      <input type='email' placeholder='' className='form-control'required
                    value = {email}
                    onChange ={(event) => {
                    setEmail(event.target.value);
                  }}/>
                    </div>
                    <div className='mb-2 text-white text-field' style={{display:'flex'}}>
                      <div style={{padding:'5px'}} >
                        <label htmlFor='Email'>First Name</label>
                        <input type='text' placeholder='' className='form-control' required
                    value = {firstname}
                    onChange ={(event) => {
                    setFirstName(event.target.value);
                  }}/>
                      </div>
                      <div style={{padding:'5px'}}>
                        <label htmlFor='Email'>Last Name</label>
                        <input type='text' placeholder='' className='form-control' required
                    value = {lastname}
                    onChange ={(event) => {
                    setLastName(event.target.value);
                  }}/>
                      </div>
  
                    </div>
                    <div className='mb-2 text-white text-field'>
                      <label htmlFor='PhoneNumber'>Phone Number</label>
                      <input type='tel' placeholder='' className='form-control' required pattern='[0-9]{3} [0-9]{7}'
                    value = {phonenumber}
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
                    <input type='password' placeholder='' className='form-control' required
                    value = {confirmpassword}
                    onChange ={(event) => {
                    setCon_Password(event.target.value);
                  }}/>
                  </div>
              </div>
              <div className='artist-signup-right-box'>
                  <div className=''>
                      <h4>Band Sign Up</h4>
                  </div>
  
                  <div className='artist-image' onClick={handleImageClick}>
                    <div>
      
                    {image ? 
                      <img src={URL.createObjectURL(image)} height={150}/>
                    :
                      <img src={require('../assets/images/band.jpg')} height={150}/>
                    }
                    <input 
                      type='file' 
                      ref={inputRef} 
                      onChange={handleImageChange} 
                      style={{display:'none'}}
                    />  
                    </div>  
  
                    <div className='upload-image'>
                    <h6 ><b>Upload Image</b></h6>
                    </div>
                    
                  </div>
                  <div>
                      <div style={{display:'flex', color:'white'}}>
                      <input type="checkbox"  name="" value=""  />
                      <label for=""> I have read the User Agreement and I agree with it.</label><br/>
                      </div>
                      <input type="checkbox"  name="" value="" />
                      <label for="" style={{ color:'white'}}> I accept the Terms and Conditions.</label><br/><br />
                    </div>
  
                    <div className='signup-button'>
                      <button type='submit'>Signup</button>
                    </div>
                  
              </div>
  
    
          
        </form>
      </div>
  
    );
  };
  
  