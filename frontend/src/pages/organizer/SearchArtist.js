
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
import { Routes, Route } from 'react-router';

import CreateEvent from './CreateEvent';
import OrganizerDashboard from './OrganizerDashboard';
import ViewEvents from './ViewEvents';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
library.add(fas);

function SearchArtist() {

    return (
        <>
            <SideMenuBarOrganizer>
                <div className='row search-artist-container'>
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

                    <div className='col-md-3 artist-box' >
                        <Link to="/organizer/searchartist/viewartist" className='link1'>
                            <div className='image'>
                                <img src={anushka} alt='image1'>
                                </img>
                            </div>

                            <div className='content'>

                                <h5>Anushka Udana</h5>
                                <StarRating rating={5} ></StarRating>

                            </div>
                        </Link>
                    </div>

                    <div className='col-md-3 artist-box' >
                        <Link to="/organizer/searchartist/viewartist" className='link1'>
                            <div className='image'>
                                <img src={DineshGamage} alt='image2'>
                                </img>
                            </div>

                            <div className='content'>

                                <h5>Dinesh Gamage</h5>
                                <StarRating rating={5} ></StarRating>

                            </div>
                        </Link>
                    </div>

                    <div className='col-md-3 artist-box' >
                        <Link to="/organizer/searchartist/viewartist" className='link1'>
                            <div className='image'>
                                <img src={dineshtharanga} alt='image3'>
                                </img>
                            </div>

                            <div className='content'>

                                <h5>Dinesh Tharanga</h5>
                                <StarRating rating={5} ></StarRating>

                            </div>
                        </Link>
                    </div>

                    <div className='col-md-3 artist-box' >
                        <Link to="/organizer/searchartist/viewartist" className='link1'>
                            <div className='image'>
                                <img src={theekshana} alt='image4'>
                                </img>
                            </div>

                            <div className='content'>

                                <h5>Theekshana Anuradha</h5>
                                <StarRating rating={5} ></StarRating>

                            </div>
                        </Link>
                    </div>




                </div>

                <Routes>
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/createevent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist/viewartist' element={<ViewArtist />} />
                    <Route path='/organizer/searchartist/viewartist/makeartistrequest' element={<MakeArtistRequest />} />
                </Routes>
            </SideMenuBarOrganizer> 
        </>

    );

}

export default SearchArtist;