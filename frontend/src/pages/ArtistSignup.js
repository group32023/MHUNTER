import React from 'react'
import { useRef, useState} from 'react'

export default function ArtistSignup() {
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
  
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage2'>
        <div className='artist_signup_form_container p-5 rounded vh-50'>
            <div className='artist-signup-left-box'>
                  <div className='artist-text'>
                    <h6><b>Start your journey to be hired today!</b></h6>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='ArtistName'>Artist Name</label>
                    <input type='text' placeholder='' className='form-control'/>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='Email'>Email</label>
                    <input type='email' placeholder='' className='form-control'/>
                  </div>
                  <div className='mb-2 text-white text-field' style={{display:'flex'}}>
                    <div style={{padding:'5px'}} >
                      <label htmlFor='Email'>First Name</label>
                      <input type='text' placeholder='' className='form-control'/>
                    </div>
                    <div style={{padding:'5px'}}>
                      <label htmlFor='Email'>Last Name</label>
                      <input type='text' placeholder='' className='form-control'/>
                    </div>

                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='PhoneNumber'>Phone Number</label>
                    <input type='number' placeholder='' className='form-control'/>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='Address'>Address</label>
                    <input type='text' placeholder='' className='form-control'/>
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
                    <label for=""> I have read the User Agreement and I agree with it.</label><br/>
                    </div>
                    <input type="checkbox"  name="" value="" />
                    <label for="" style={{ color:'white'}}> I accept the Terms and Conditions.</label><br/><br />
                  </div>

                  <div className='signup-button'>
                    <button>Signup</button>
                  </div>
                
            </div>

  
        </div>
    </div>

  )
}

