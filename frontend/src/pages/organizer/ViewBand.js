
import React, { useEffect, useState ,useRef } from 'react';
import { Link,useParams } from 'react-router-dom';
import Topbar from '../../components/common/Topbar';
import './ViewArtist.css';
import anushka from '../../assets/images/anushka.png';
import anushkashow from '../../assets/images/anushkashow.jpg';
import anushkashow2 from '../../assets/images/anushkashow2.jpg';
import anushkashow3 from '../../assets/images/anushkashow3.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from '../../components/organizer/StarRating';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import { Routes, Route } from 'react-router';
import OrganizerDashboard from './OrganizerDashboard';
import ViewEvents from './ViewEvents';
import ViewEventHistory from './ViewEventHistory';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import CreateEvent from './CreateEvent';
import MakeArtistRequest from './MakeArtistRequest';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import SearchBand from './SearchBand'

library.add(fas);

function ViewArtist() {

    const [feedback, setFeedbacks] = useState([]);
    const [post, setPosts] = useState([]);
    const [eventondate, setEventondate] = useState([]);
    const [event, setEvents] = useState([]);
    const [band, setbands] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const imageExtention = ["jpg", "png", "jpeg"]
    const videoExtention = ["mp4", "mkv"]
    const audioExtenstion = ["mp3", "pcm", "wav"]
    const BASE_URL = "http://localhost:8080";

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const extractloc = (location) => {

        const parts = location.split(',');
        const placeName = parts[0];
        const town = parts[parts.length - 2];
        return `${town}`;
    }

    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours, 10);
        const minute = parseInt(minutes, 10);
        const period = hour >= 12 ? 'pm' : 'am';
        const formattedHour = hour % 12 || 12;
        const formattedMinute = minute.toString().padStart(2, '0');
        return `${formattedHour}:${formattedMinute} ${period}`;
    };


    const { mmid, eventid } = useParams();

    // const mmid = 100;
    // const mmid1 = 758463;
    // const eventid = 3;
    let formattedDate;
    let formattedDate1;
    let formattedDateString;
    let options;
    let bandName;
    const formattedDateStringRef = useRef(null) ;
    const bandNameRef = useRef(null) ;

    useEffect(() => {
        fetch(`http://localhost:8080/band/viewSpecificBand/${mmid}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setbands(result);
                bandName = result.musicMember.user.firstName   ;
                bandNameRef.current = bandName;
                console.log(bandName);

            }
            )
    }, [])

    
    useEffect(() => {
        fetch(`http://localhost:8080/feedback/viewMusicMemberFeedback/${mmid}`)
            .then(res => res.json())
            .then((result) => {
                setFeedbacks(result);
                console.log(result);
            }
            )
    }, [])


    useEffect(() => {

        fetch(`http://localhost:8080/postData/postDetails/${mmid}`)
            .then(res => res.json())
            .then((result) => {
                setPosts(result);
                // console.log(result);
            }
            )

    }, [])


    useEffect(() => {
        fetch(`http://localhost:8080/event/viewSpecificEvent/${eventid}`)
            .then(res => res.json())
            .then((result) => {
                formattedDate = result.date;
                setEvents(result);
                formattedDate1 = new Date(result.date);
                options = { month: 'short', day: '2-digit' };
                formattedDateString = formattedDate1.toLocaleDateString('en-US', options);
                formattedDateStringRef.current = formattedDateString;
                // console.log(result);
                // console.log(formattedDateString ); 

                fetch(`http://localhost:8080/event/musicMemberEventsOnDate/${mmid}/${formattedDate}`)
                    .then(res => res.json())
                    .then((result) => {
                        setEventondate(result);
                        // console.log(result);
                    }
                    )

            }
            )

    }, [])

    
    // useEffect(() => {

    //     fetch(`http://localhost:8080/event/musicMemberEventsOnDate/${mmid}/${formattedDate}`)
    //         .then(res => res.json())
    //         .then((result) => {
    //             setEventondate(result);
    //             console.log(result);
    //         }
    //         )

    // }, [])


    return (


        <>
            <SideMenuBarOrganizer>
                <div className='organizer-view-band-container'>
                    <Topbar></Topbar>
                    <div className='row band-container'>
                        <div className='col-md-3 box-1 '>
                            <div className='d-flex flex-column'>

                                <div className='band-logo align-items-center'>
                                    <div className='image'>
                                        <img src={anushka}>
                                        </img>
                                    </div>

                                    <div className='content-box align-items-center'>

                                        <h5>{bandNameRef.current}</h5>
                                        {/* <StarRating rating={5} style={{marginLeft:"2rem"}} /> */}
                                    </div>
                                </div>



                                <div className='d-flex flex-column feedback-log align-items-center'>

                                    <h5>Feedbacks</h5>

                                    {feedback.map(feedback => (

                                        <div className='feedback'>

                                            <div className='d-flex align-items-center'>
                                                <div className='org-image'>
                                                    <img src={`${BASE_URL}/postData/uploads/image/${feedback.image}`} alt="User's Image" />
                                                </div>

                                                <div className='ml-2 content'>
                                                    <h7>{feedback.firstName}      {feedback.lastName}</h7>
                                                    <StarRating rating={feedback.rate} />
                                                </div>
                                            </div>
                                            <div className='summary'>

                                                <p>{feedback.description}
                                                </p>
                                            </div>

                                        </div>

                                    ))}

                                    {/* <div className='feedback'>

                                        <div className='d-flex align-items-center'>
                                            <div className='org-image'>
                                                <img src={anushka} alt="User's Image" />
                                            </div>

                                            <div className='ml-2 content'>
                                                <h7>Namal Gamage</h7>
                                                <StarRating rating={5} />
                                            </div>
                                        </div>
                                        <div className='summary'>

                                            <p>The Confidential were amazing! They have been worth every penny, totally made the evening special very professional and talented.
                                            </p>
                                        </div>

                                    </div> */}

                                </div>
                            </div>

                        </div>
                        <div className='col-md-8 box-2 d-flex flex-column '>

                            {post.map(post => (
                                <div className='feed-post'>

                                    <div className='d-flex align-items-center'>
                                        <div className='band-image'>
                                            <img src={anushka} alt="User's Image" />
                                        </div>

                                        <div className='ml-2 content'>
                                            <h7>{bandNameRef.current}</h7>
                                            {/* <p>12 hrs</p> */}
                                        </div>
                                    </div>
                                    <div className='post-content'>
                                        <div className='post-caption'>
                                            <p>{post.description}</p>
                                        </div>

                                        <div className='post-image'>
                                            {
                                                (imageExtention.includes(post.fileType))
                                                    ? <img src={`${BASE_URL}/postData/uploads/image/${post.fileName}`} alt="post media" />
                                                    : (videoExtention.includes(post.fileType))
                                                        ? <video controls width="640" height="360"><source src={`${BASE_URL}/postData/uploads/video/${post.fileName}`} type={`video/${post.fileType}`} /></video>
                                                        : <audio controls><source src={`${BASE_URL}/postData/uploads/audio/${post.fileName}`} type={`audio/${post.fileType}`} /></audio>
                                            }
                                        </div>
                                    </div>
                                </div>


                            ))}

                            {/* <div className='feed-post'>

                                <div className='d-flex align-items-center'>
                                    <div className='artist-image'>
                                        <img src={anushka} alt="User's Image" />
                                    </div>

                                    <div className='ml-2 content'>
                                        <h7>Anushka Udana</h7>
                                        <p>2 days</p>
                                    </div>
                                </div>
                                <div className='post-content'>
                                    <div className='post-caption'>
                                        <p>Get ready to rock the night!
                                        </p>
                                    </div>

                                    <div className='post-image'>
                                        <img src={anushkashow2} alt="post Image" />
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>


                    <div className='click-btns'>


                        <button type="button" class="btn btn-lg" onClick={handleShowModal}>Events On {formattedDateStringRef.current}</button>
                        <Link to={`/organizer/searchband/viewband/MakeBandRequest/${mmid}/${eventid}`}>
                            <button type="button" class="btn btn-lg">Make a Request</button>
                        </Link>
                    </div>

                    {showModal && (
                        <div className="overlay">
                            <Modal show={showModal} onHide={handleCloseModal} className='modal-class-new' centered>
                                <Modal.Header closeButton>
                                    <Modal.Title className='events-view-modal-title'>Events on {formattedDateStringRef.current}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='view-music-events-table d-flex flex-column '>

                                        <div className='titlenew-row music-events-table-data-row d-flex mb-4'>

                                            <div className='event-type'>Event Type</div>
                                            <div className='event-location'>Location</div>
                                            <div className='event-time'>Time</div>
                                        </div> 

                                        {eventondate.map(event => (
                                            <div className='datanew-row music-events-table-data-row d-flex'>

                                                <div className='event-type'>{event.event_type}</div>
                                                <div className='event-location'>{extractloc(event.location)}</div>
                                                <div className='event-time'>{formatTime(event.start_time)}</div>
                                            </div>

                                        ))}
                                        {/* <div className='datanew-row music-events-table-data-row d-flex'>

                                            <div className='event-type'>Musical Show</div>
                                            <div className='event-location'>Mathara</div>
                                            <div className='event-time'>8.00</div>
                                        </div>
                                        <div className='datanew-row music-events-table-data-row d-flex'>

                                            <div className='event-type'>Musical Show</div>
                                            <div className='event-location'>Dabulla</div>
                                            <div className='event-time'>10.00</div>
                                        </div> */}

                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseModal}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )}
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
                    <Route path='/organizer/searchband/:eventid' element={<SearchBand />} />
                </Routes>

            </SideMenuBarOrganizer>
        </>
    );

}

export default ViewArtist;