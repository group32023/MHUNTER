
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Topbar from '../../components/common/Topbar';
// import CreateEvent from './CreateEvent';
import StarRating from '../../components/organizer/StarRating';
import './SearchBand.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route } from 'react-router';

import OrganizerDashboard from './OrganizerDashboard';
import ViewEvents from './ViewEvents';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import CreateEvent from './CreateEvent';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import ViewBand from './ViewBand'
import MakeBandRequest from './MakeBandRequest';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
library.add(fas);

function SearchBand() {

    const [band, setBands] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const { eventid } = useParams();

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

    return (
        <>
            <SideMenuBarOrganizer>
                <div className='row search-band-container'>
                    <Topbar />

                    <div className="search-container">
                        <div className="searchbar">

                            <input
                                className="form-control me-1 custom-input"
                                type="search"
                                placeholder="Search a Band"
                                aria-label="Search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />

                        </div>

                        <div className='searchicon'>

                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>

                    {filteredBands.map(band => (

            
                        <div className='col-md-3 band-box' >
                            <Link to={`/organizer/searchband/viewband/${band.musicMember.mmid}/${eventid}`} className='link1'>
                                <div className='image'>
                                    <img src={`${BASE_URL}/postData/uploads/image/${band.user.imagePath}`}alt="post media" />
                                </div>

                                <div className='content'>

                                    <h5>{band.user.firstName}</h5>
                                    <StarRating rating={5} ></StarRating>

                                </div>
                            </Link>
                        </div>
                    

                    ))}



                </div>

                <Routes>
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
                    <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist/:eventid' element={<SearchArtist />} />
                    <Route path='/organizer/searchartist/viewartist/:mmid/:eventid' element={<ViewArtist />} />
                    <Route path='/organizer/searchartist/viewartist/makeartistrequest/:mmid/:eventid' element={<MakeArtistRequest />} />
                    <Route path='/organizer/searchaband/viewband/:mmid/:eventid' element={<ViewBand/>} />
                    <Route path='/organizer/searchband/viewband/makebandrequest/:mmid/:eventid' element={<MakeBandRequest />} />
                </Routes>
            </SideMenuBarOrganizer>
        </>

    );

}

export default SearchBand;