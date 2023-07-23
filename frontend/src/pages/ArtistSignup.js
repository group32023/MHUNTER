import React from 'react'
import { useRef, useState} from 'react'
//import axios from 'axios';

export default function ArtistSignup() {
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
  
  const [artistname, setArtistName] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setCon_Password] = useState("");
  
  async function save(event) {
    event.preventDefault();
    try {

      if(password.length < 8){
        alert("Password must have at least 8 characters");
      }
      else if(password !== confirm_password){
        alert("Input Confirm your password correctly");
      }
      else{
        console.log("Artist Name:", artistname);
        console.log("Email:", email);
        console.log("First Name:", firstname);
        console.log("Last Name:", lastname);
        console.log("Phone Number:", phonenumber);
        console.log("Address:", address);
        console.log("Password:", password);
        console.log(confirm_password);

        /*const formData = new FormData();
        formData.append('image', image);
        formData.append('artistname', artistname);
        formData.append('email', email);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('phonenumber', phonenumber);
        formData.append('address', address);
        formData.append('password', password);
        await axios.post('/api/artist/signup', formData);

        const response = await fetch('/api/artist/signup', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          const errorData = await response.json();
          console.log(errorData); 
        }*/
        

        formRef.current.reset();
  
        alert("Artist Registration Sucessfully");
      }


    }catch(err){
      alert(err);
    }
  }


  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage2'>
        
          <form ref={formRef} onSubmit={save} className='artist_signup_form_container p-5 rounded vh-50'>
            <div className='artist-signup-left-box' >
                  <div className='artist-text'>
                    <h6><b>Start your journey to be hired today!</b></h6>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='ArtistName'>Artist Name</label>
                    <input type='text' placeholder='' className='form-control' required
                    value = {artistname}
                    onChange ={(event) => {
                    setArtistName(event.target.value);
                  }}
                    />



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
                    <input type='tel' placeholder='071 1234567' className='form-control' pattern='[0-9]{3} [0-9]{7}'
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
                    <input type='password' placeholder='' className='form-control'
                    value = {confirm_password}
                    onChange ={(event) => {
                    setCon_Password(event.target.value);
                  }}/>
                  </div>
            </div>
            <div className='artist-signup-right-box'>
                <div className=''>
                    <h4>Artist Sign Up</h4>
                </div>

                <div className='artist-image' onClick={handleImageClick}>
                  <div>
    
                  {image ? 
                    <img src={URL.createObjectURL(image)} height={150}/>
                  :
                    <img src={require('../assets/images/artist.jpg')} height={150}/>
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
                    <label htmlFor="userAgreementCheckbox"> I have read the User Agreement and I agree with it.</label><br/>
                    </div>
                    <input type="checkbox"  name="" value="" />
                    <label htmlFor="termsAndConditionsCheckbox" style={{ color:'white'}}> I accept the Terms and Conditions.</label><br/><br />
                  </div>

                  <div className='signup-button' >
                    <button type='submit' >Signup</button>
                  </div>
                
            </div>
          </form>
  
        
    </div>

  )
}

