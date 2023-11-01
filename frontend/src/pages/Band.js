import React,{ useEffect, useState } from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StarRating from '../components/organizer/StarRating';
import Services from '../components/Services';
import BandSlider from '../components/BandSlider';
import EventTable from '../components/EventTable';
import PerformanceView from '../components/PerformanceView';
import EventSlider from '../components/EventSlider';
import Footer from '../components/common/Footer';
import ArtistSlider from '../components/ArtistSlider';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faList} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../assets/css/home.css'
import '../assets/css/event.css'

export default function 
HomeBand() {
  const [band, setBands] = useState([])
  const [searchInput, setSearchInput] = useState('');

  const imageExtention = ["jpg", "png", "jpeg"]
  const BASE_URL = "http://localhost:8080";


  useEffect(() => {
      fetch("http://localhost:8080/band/getAll")
          .then(res => res.json())
          .then((result) => {
              setBands(result);
              console.log(result);
          }
          )
  }, [])

  const filteredBands = band.filter((band) =>
  band.user.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
  band.user.lastName.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log(band)

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
                <p className='caption1'>Home {'>'} Bands</p>
                </div>
                <section>
                    <p className='description1'>
                    A band is a musical group consisting of multiple musicians who collaborate to create and perform music together. Bands can vary in size and style, and they often consist of members who play various instruments and contribute to vocals, producing a collective sound that defines their unique musical identity.</p>
                     
                  
                </section>
             
                <div className='eventcontainer123'>
                <div className='row search-artist-container'>

                {/* <div className='row search-band-container'>
                    
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
                    </div> */}

                    <Container>
                      <Form.Control
                        className="smaller-input"
                        name="foo" id="statusInput1"
                        placeholder="Enter Event Detail Here" value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </Container>

                    {filteredBands.map(band => (

            
                        <div className='col-md-3 artist-box' >
                            <Link to="/organizer/searchband/viewband" className='link1'>
                                <div className='image'>
                                    <img src={`${BASE_URL}/postData/uploads/image/${band.user.imagePath}`} alt="post media" />
                                </div>

                                <div className='content'>

                                    <h5>{band[0]}</h5>
                                    <StarRating rating={5} ></StarRating>

                                </div>
                            </Link>
                        </div>
                    

                    ))}
                  
                </div>
                </div>

            </div>

            {/* <div className='footerForHomeband'>

                        <Footer></Footer>

                        </div> */}
           </div> 

      </div>
 
  )
}
