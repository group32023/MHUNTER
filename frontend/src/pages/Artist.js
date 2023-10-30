import React,{ useEffect, useState } from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Topbar from '../components/common/Topbar';


import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StarRating from '../components/organizer/StarRating';


import Footer from '../components/common/Footer';
import ArtistSlider from '../components/ArtistSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faList} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/home.css'
import '../assets/css/event.css'

export default function 

    HomeArtist() {
           
  const [artist, setArtists] = useState([])
  const [searchInput, setSearchInput] = useState('');

  const BASE_URL = "http://localhost:8080";


  useEffect(() => {
      fetch("http://localhost:8080/artist/getAll")
          .then(res => res.json())
          .then((result) => {
              setArtists(result);
              console.log(result);
          }
          )
  }, [])
  
  const filteredArtists = artist.filter((artist) =>
  artist.user.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
  artist.user.lastName.toLowerCase().includes(searchInput.toLowerCase())
  );
  
  return (
    <div>
       
        <div>
        <img src={backgroundimage} id="backgroundimage"></img>
        <MainSlider></MainSlider>
            <div>
                <NavBar></NavBar>
            </div>
            <p className='telno'>Call Us: +94773374306</p>
            <FontAwesomeIcon icon={faPhone} className='telIcon' />
            
            <FontAwesomeIcon icon={faFacebook} className='facebookIcon'/>
            <FontAwesomeIcon icon={faTwitter} className='twitterIcon' />
            <FontAwesomeIcon icon={faGooglePlusG} className='googlePlusIcon'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='linkedInIcon' />

            {/* signup button*/}

            <div className='descriptionDiv'>
                <p className='caption'>Unlock the Rhythm</p>
                <section>
                    <p className='description'>
                    Introducing a Next-Level Music Event Management Experience
                    </p>
                </section>

                <button className='signupBtn'>SIGN UP</button>
                 
            </div>

            <div className='descriptionDiv1'>
               <div className='captionbackground'>
                <p className='caption1'>Home {'>'} Artists</p>
                </div>
                <section>
                    <p className='description1'>
                    Elevate your events with outstanding musical talent. MHUNTER provides a vast network of  artists, allowing you to handpick the perfect lineup. Easily browse, select, and assign artists to specific slots, ensuring a diverse and captivating program that leaves the crowd wanting more.                     
                    </p>
                    <p className='description2'>
                    Create Stunning Events:
                    <br></br>
                    With MHUNTER, event creation is a breeze. Seamlessly set up and customize your music events with essential details like event name, date, time, location. Craft the perfect atmosphere for your attendees, ensuring an unforgettable experience from start to finish.                    </p>
              
                </section>
             
                <div className='eventcontainer'>

           


            <div className='row search-artist-container'>
           

                <div className="search-container">
                    <div className="searchbar">

                        <input
                            className="form-control me-1 custom-input"
                            type="search"
                            placeholder="Search An Artist"
                            aria-label="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />

                    </div>

                    <div className='searchicon'>

                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>

                {filteredArtists.map(artist => (

        
                    <div className='col-md-3 artist-box' >
                        <Link to="/organizer/searchartist/viewartist" className='link1'>
                            <div className='image'>
                                <img src={`${BASE_URL}/postData/uploads/image/${artist.user.imagePath}`} alt="post media" />
                            </div>

                            <div className='content'>

                                <h5>{artist.user.firstName} {artist.user.lastName}</h5>
                                <StarRating rating={5} ></StarRating>

                            </div>
                        </Link>
                    </div>
                

                ))}

                  
                  </div> 

                </div>

            </div>
           

      </div>
    </div>
  )
}
