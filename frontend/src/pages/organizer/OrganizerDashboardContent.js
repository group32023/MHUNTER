import React from 'react';
import Topbar from '../../components/common/Topbar';
import DashboardCarousel from '../../components/organizer/DashboardCarousel';
import DashboardCalender from '../../components/organizer/DashboardCalender';
// import CalenderImg from '../../assets/images/calenderImg.png'

function OrganizerDashboardContent() {
    // Your component logic here
    return (

        <div className='OrganizerDashboardMainContainer'>
            <Topbar />
            <div className='row' style={{ marginLeft: '35px' }}>
                <DashboardCarousel />
                <div className='DashboardCalenderDiv px-2'>
                    <DashboardCalender className='mt-3' />
                    {/* <img alt='' className='mt-2' src={CalenderImg} width='330px' height='310px'></img> */}
                </div>
            </div>

            <div className='row mt-3' style={{ marginLeft: '45px' }}>

                <div className='UpcominEventsDiv col-md-7'>
                    <div className="p-3">
                        <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>Upcoming Events</p>
                        <hr></hr>
                        <div className="requestTableDiv d-flex justify-content-center align-items-center">

                            <div className="row headerContent mb-3">
                                <div className="column">
                                    <div className="fs-6" style={{ fontFamily: 'MyCustomFont1' }}>
                                        Artist/Band
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="fs-6" style={{ fontFamily: 'MyCustomFont1' }}>
                                        Status
                                    </div>
                                </div>
                            </div>
                            <div className="row tableContent">
                                <div className="column">
                                    <div className="content">

                                        Coldplay
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="content confirmed mt-1" style={{ fontFamily: 'MyCustomFont2' }}>
                                        Confirmed
                                    </div>
                                </div>
                            </div>
                            <div className="row tableContent">
                                <div className="column">
                                    <div className="content">
                                        Ed Sheeran
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Active
                                    </div>
                                </div>

                            </div>

                            <div className="row tableContent">
                                <div className="column">
                                    <div className="content">
                                        Ed Sheeran
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Active
                                    </div>
                                </div>

                            </div>

                            <div className="row tableContent">
                                <div className="column">
                                    <div className="content">
                                        Ed Sheeran
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Active
                                    </div>
                                </div>

                            </div>

                            <div className="row tableContent">
                                <div className="column">
                                    <div className="content">
                                        Ed Sheeran
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Active
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>



                <div className='PaymentsDiv'></div>

            </div>
            <br></br>
            <br></br>
        </div>
    );
};

export default OrganizerDashboardContent;

