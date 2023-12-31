import React from 'react'
import { useRef, useState} from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function ArtistSignup() {
  const formRef = useRef(null);

  const inputRef = useRef(null);
  const [Image, setImage] = useState("");

  const [showModal, setShowModal] = useState(false);

  //const handleCloseModal = () => setShowModal(false);
  const handleCloseModal = () => {
    setShowModal(false);
    window.location.href = "/login";
  };
  
  const handleShowModal = () => setShowModal(true);
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
  const type = "Artist";

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const regDate = `${year}-${month}-${day}`;
  //const regDate = new Date();
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
    /*const artist = {
       name, email, firstName, lastName, phoneNumber, address, password, type, regDate,image};*/
    try {

      if(password.length < 8){
        alert("Password must have at least 8 characters");
      }
      else if(password !== confirmPassword){
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
        
        
        /*fetch("http://localhost:8080/user/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(artist),
        })

        formRef.current.reset();
        resetFormFields();
        alert("Artist Registration Sucessfully");*/

        const response = await fetch("http://localhost:8080/user/signup", {
          method: "POST",
          body: formData, // Use FormData to send the data and the image
        });

        if (response.ok) {
          formRef.current.reset();
          resetFormFields();
          handleShowModal();
          //alert("Artist Registration Successfully");
          //window.location.href = "/login";
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
    <div className='login template d-flex justify-content-center align-items-center vh-100 bgimage2'>
        
          <form ref={formRef} onSubmit={save} className='artist_signup_form_container p-5 rounded vh-50' enctype="multipart/form-data">
            <div className='artist-signup-left-box' >
                  <div className='artist-text'>
                    <h6><b>Start your journey to be hired today!</b></h6>
                  </div>
                  <div className='mb-2 text-white text-field'>
                    <label htmlFor='ArtistName'>Artist Name</label>
                    <input type='text' placeholder='' className='form-control' required
                    value = {name}
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
                    <h4>Artist Sign Up</h4>
                </div>

                <div className='artist-image' onClick={handleImageClick}>
                  <div>
    
                  {Image ? 
                    <img src={URL.createObjectURL(Image)} alt="ArtistDp" height={150} width={150}/>
                  :
                    <img src={require('../assets/images/artist.jpg')} alt="ArtistDp" height={150} width={150}/>
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
                <div>
                    <div style={{display:'flex', color:'white'}}>
                    <input type="checkbox" required name="" value=""  />
                    <label htmlFor="userAgreementCheckbox"> I have read the User Agreement and I agree with it.</label><br/>
                    </div>
                    <input type="checkbox" required name="" value="" />
                    <label htmlFor="termsAndConditionsCheckbox" style={{ color:'white'}}> I accept the Terms and Conditions.</label><br/><br />
                  </div>

                  <div className='signup-button' >
                    <button type='submit' >Signup</button>
                  </div>
                
            </div>
          </form>
          <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome to our Band Artist Organizer Management System!</p>
             <p>We are thrilled to have you on board. Please note that you have successfully registered as an artist. 
             However, to fully participate in events, we kindly request that you submit a certificate validating your authenticity within the next two weeks through postal.
              Until the certificate is received, you can update your profile with your latest works and information.
               Please be aware that during this period, the organizers will be unable to send any event requests your way.
                </p><p>Thank you for your understanding, and we look forward to your active participation in our upcoming events!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>

    

  )
}

