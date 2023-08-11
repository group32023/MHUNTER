
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../components/common/Topbar';
import './ViewArtist.css';
import anushka from '../../assets/images/anushka.png';
import anushkashow from '../../assets/images/anushkashow.jpg';
import anushkashow2 from '../../assets/images/anushkashow2.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from '../../components/organizer/StarRating';
library.add(fas);

function ViewArtist() {

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
                                <p>Get ready to rock the night! 
                                </p>
                            </div>

                            <div className='post-image'>
                                <img src={anushkashow} alt="post Image" />
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
                                <p>12 hrs</p>
                            </div>
                        </div>
                        <div className='post-content'>
                            <div className='post-caption'>
                                <p>Stepping onto the stage to share my soul through music. Get ready to be swept away by the rhythm and emotions. 🎶✨ #LivePerformance #MusicalJourney
                                </p>
                            </div>

                            <div className='post-image'>
                                <img src={anushkashow2} alt="post Image" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>


    );

}

export default ViewArtist;