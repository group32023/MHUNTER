
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../components/common/Topbar';
// import CreateEvent from './CreateEvent';
import StarRating from '../../components/organizer/StarRating';
import './SearchArtist.css';
import musical from '../../assets/images/musical.jpg';
import DineshGamage from '../../assets/images/DineshGamage.png';
import dineshtharanga from '../../assets/images/dineshtharanga.jpg';
import anushka from '../../assets/images/anushka.png';
import theekshana from '../../assets/images/theekshana.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function SearchArtist() {

    return (

        <div className='row'>
            <Topbar />

            <div className="search-container">
                <div className="searchbar">
                   
                    <input
                        className="form-control me-1 custom-input"
                        type="search"
                        placeholder="Search An Artist"
                        aria-label="Search"
                    />
                    
                </div>
 
                <div className='searchicon'>

                <FontAwesomeIcon icon={faSearch} />
                </div> 
            </div>

            <div className='col-md-3' >
                <a>
                    <div className='image'>
                        <img src={anushka}>
                        </img>
                    </div>

                    <div className='content'>

                        <h5>Anushka Udana</h5>
                        <StarRating rating={5} ></StarRating>

                    </div>
                </a>
            </div>

            <div className='col-md-3' >
                <a>
                    <div className='image'>
                        <img src={DineshGamage}>
                        </img>
                    </div>

                    <div className='content'>

                        <h5>Dinesh Gamage</h5>
                        <StarRating rating={4} ></StarRating>

                    </div>
                </a>
            </div>

            <div className='col-md-3' >
                <a>
                    <div className='image'>
                        <img src={dineshtharanga}>
                        </img>
                    </div>

                    <div className='content'>

                        <h5>Dinesh Tharanga</h5>
                        <StarRating rating={3.5} ></StarRating>

                    </div>
                </a>
            </div>

            <div className='col-md-3' >
                <a>
                    <div className='image'>
                        <img src={theekshana}>
                        </img>
                    </div>

                    <div className='content'>

                        <h5>Theekshana Anuradha</h5>
                        <StarRating rating={4} ></StarRating>

                    </div>
                </a>
            </div>




        </div>



    );

}

export default SearchArtist;