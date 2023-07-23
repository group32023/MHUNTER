import React from 'react';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import './ViewEvents.css';
import

function ViewEvents() {
    return (

        <div>

            <SideMenuBarOrganizer />
            <div className="container" style={{ width: '1210px', marginLeft: '20%', marginTop: '0.5rem', height: '110vh' }} >

                <div className='row'>
                    <div className='col-md-3'>
                       
                            <a>
                                <img src="event-img">
                                </img>

                                <div className='content'>

                                    <div className='row'>
                                        <div className='col-md-1'>
                                            <i className='icon fas fa-map-marker-alt'></i>
                                        </div> 
                                        <div className='col-md-11'>
                                            <p>Gunasewana,Digaradda,ahanagama</p>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-1'>
                                            <i className='icon fas fa-calendar'></i>
                                        </div>
                                        <div className='col-md-11'>
                                            <p>July 23,2023</p>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-1'>
                                            <i className='icon fas fa-clock'></i>
                                        </div>
                                        <div className='col-md-11'>
                                            <p>10:00 AM</p>
                                        </div>
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