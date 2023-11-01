import React,{ useEffect, useState } from 'react'
import NavBar from '../components/common/NavBar';
import MainSlider from '../components/common/MainSlider';
import backgroundimage from '../assets/images/backgroundimage1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Topbar from '../components/common/Topbar';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from '../components/common/Footer';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StarRating from '../components/organizer/StarRating';


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
  const [page,setPage] = useState(1);
  const noOfLinePerPage = 4;

  useEffect(() => {
      fetch("http://localhost:8080/artist/getAll")
          .then(res => res.json())
          .then((result) => {
              setArtists(result);
          }
          )
  }, [])
  
  const filteredArtists = artist.filter((artist) =>
  artist.user.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
  artist.user.lastName.toLowerCase().includes(searchInput.toLowerCase())
  );


  
  function setPagination(){
    let noOfLine =1
    let displayedData = []
    if(filteredArtists.length>0){
      if(filteredArtists.length < noOfLinePerPage*page){
        noOfLine = filteredArtists.length
      }
      else{
        noOfLine =  noOfLinePerPage*page
      }
      for (let i = noOfLinePerPage*(page-1); i < noOfLine; i++) {
        displayedData.push(filteredArtists[i]);
        
      }
      return displayedData
    }
    else{
      
      return displayedData 
    }
    
  }

  const handleChange= (event,value)=>{
    setPage(value)
  }
  
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

            <div className='descriptionDiv7'>
               <div className='captionbackground'>
                <p className='caption1'>Home {'>'} Artists</p>
                </div>
                <section>
                    <p className='description1'>
                    An artist is an individual who creates visual, auditory, or performing art. They use their creativity and skills to express ideas, emotions, or concepts through various forms of artistic expression, such as painting, sculpture, music, dance, literature, and more.                  
                    </p>
                  
                </section>
             
                <div className='eventcontainer'>

           


            <div className='row search-artist-container'>
           

                {/* <div className="search-container">
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

                {setPagination().map(artist => (

        
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

                <div className='paginationForArtistHome'>
                  <div className='artistEventPagination'>
                  <Stack spacing={2}>
                    <Pagination count={(Math.round(filteredArtists.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
                  </Stack>
                </div>
              </div>

                  
                  </div> 

                </div>

            </div>
            {/* <div className='footerForHomeartist'>

            <Footer></Footer>

            </div> */}

      </div>
    </div>
  )
}
