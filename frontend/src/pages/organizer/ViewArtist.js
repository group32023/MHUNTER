
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

library.add(fas);

function ViewArtist() {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (

        <div className='organizer-view-artist-container'>
            <Topbar></Topbar>
            <div className='row artist-container'>
                <div className='col-md-3 box-1 '>
                    <div className='d-flex flex-column'>

                        <div className='artist-logo align-items-center'>
                            <div className='image'>
                                <img src={anushka}>
                                </img>
                            </div>

                            <div className='content-box'>

                                <h5>Anushka Udana</h5>
                                {/* <StarRating rating={5} style={{marginLeft:"2rem"}} /> */}
                            </div>
                        </div>

                        <div className='d-flex flex-column feedback-log align-items-center'>

                            <h5>Feedbacks</h5>
                            <div className='feedback'>

                                <div className='d-flex align-items-center'>
                                    <div className='org-image'>
                                        <img src={anushka} alt="User's Image" />
                                    </div>

                                    <div className='ml-2 content'>
                                        <h7>Saman Vidyarathna</h7>
                                        <StarRating rating={5} />
                                    </div>
                                </div>
                                <div className='summary'>

                                    <p>The Confidential were amazing! They have been worth every penny, totally made the evening special very professional and talented.
                                    </p>
                                </div>

                            </div>

                            <div className='feedback'>

                                <div className='d-flex align-items-center'>
                                    <div className='org-image'>
                                        <img src={anushka} alt="User's Image" />
                                    </div>

                                    <div className='ml-2 content'>
                                        <h7>Saman Vidyarathna</h7>
                                        <StarRating rating={5} />
                                    </div>
                                </div>
                                <div className='summary'>

                                    <p>The Confidential were amazing! They have been worth every penny, totally made the evening special very professional and talented.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='col-md-8 box-2 d-flex flex-column '>

                    <div className='feed-post'>

                        <div className='d-flex align-items-center'>
                            <div className='artist-image'>
                                <img src={anushka} alt="User's Image" />
                            </div>

                            <div className='ml-2 content'>
                                <h7>Anushka Udana</h7>
                                <p>12 hrs</p>
                            </div>
                        </div>
                        <div className='post-content'>
                            <div className='post-caption'>
                                <p>Stepping onto the stage to share my soul through music. Get ready to be swept away by the rhythm and emotions. 🎶✨ #LivePerformance #yunpluggedstudio
                                </p>
                            </div>

                            <div className='post-image'>
                                <img src={anushkashow3} alt="post Image" />
                            </div>
                        </div>
                    </div>

                    <div className='feed-post'>

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
                    </div>
                </div>

            </div>


            <div className='click-btns'>

                <button type="button" class="btn btn-lg" onClick={handleShowModal}>Events On 21</button>
                <Link to="/organizer/searchartist/viewartist/MakeArtistRequest">
                    <button type="button" class="btn btn-lg">Make a Request</button>
                </Link>
            </div>

            {showModal && (
                <div className="overlay">
                    <Modal show={showModal} onHide={handleCloseModal} className='modal-class-new'centered>
                        <Modal.Header closeButton>
                            <Modal.Title className='events-view-modal-title'>Events on August 21</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='view-music-events-table d-flex flex-column '>

                                <div className='titlenew-row music-events-table-data-row d-flex mb-4'>
                                    
                                    <div className='event-type'>Event Type</div>
                                    <div className='event-location'>Location</div>
                                    <div className='event-date'>Date</div>
                                    <div className='event-time'>Time</div>
                                </div>

                               
                                <div className='datanew-row music-events-table-data-row d-flex'>
                                   
                                    <div className='event-type'>Musical Show</div>
                                    <div className='event-location'>Galle</div>
                                    <div className='event-date'>2023/01/09</div>
                                    <div className='event-time'>12.00</div>
                                </div>
                                <div className='datanew-row music-events-table-data-row d-flex'>
                                    
                                    <div className='event-type'>Musical Show</div>
                                    <div className='event-location'>Mathara</div>
                                    <div className='event-date'>2023/03/19</div>
                                    <div className='event-time'>8.00</div>
                                </div>
                                <div className='datanew-row music-events-table-data-row d-flex'>
                                  
                                    <div className='event-type'>Musical Show</div>
                                    <div className='event-location'>Dabulla</div>
                                    <div className='event-date'>2023/05/11</div>
                                    <div className='event-time'>10.00</div>
                                </div>

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


    );

}

export default ViewArtist;