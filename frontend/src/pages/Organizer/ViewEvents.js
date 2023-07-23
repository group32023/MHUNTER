import React from 'react';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import './ViewEvents.css';
import slide_7 from '../../assets/images/slide_7.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

function ViewEvents() {
    return (

        <div>

            <SideMenuBarOrganizer />
            <div className="container" style={{ width: '1210px', marginLeft: '20%', marginTop: '0.5rem', height: '110vh' }} >

                <div className='row'>
                    <div className='col-md-3'>

                        <a>
                            <div className='image'>
                                <img src={slide_7}>
                                </img>
                            </div>

                            <div className='content'>

                                <h3>Nadagama</h3>
                                <div className='newrow'>
                                    <FontAwesomeIcon icon="map-marker-alt" />
                                    <span>Gunasewana,Digaradda,ahanagama</span>
                                </div>

                                <div className='newrow'>
                                    <FontAwesomeIcon icon="calendar" />
                                    <span>July 23,2023</span>
                                </div>

                                <div className='newrow'>
                                    <FontAwesomeIcon icon="clock" />
                                    <span>10:00 AM</span>
                                </div>

                            </div>

                        </a>

                    </div>
                </div>

            </div>
        </div>


    );

}

export default ViewEvents;