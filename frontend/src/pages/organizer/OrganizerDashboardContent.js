import React from 'react';
import Topbar from '../../components/common/Topbar';
import DashboardCarousel from '../../components/organizer/DashboardCarousel';
import DashboardCalender from '../../components/organizer/DashboardCalender';
// import CalenderImg from '../../assets/images/calenderImg.png'
import '../../assets/css/OrganizerDashboard.css'
import EventImg from '../../assets/images/slide_7.jpg'

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
                        <div className="UpcomingTableDiv mt-4">

                            <div className="row tableUpcomingContent">
                                <img className='col-md-4' alt='' src={EventImg} width='50px' height='100px'></img>
                                <div>
                                    <div className='upcomingDivEventData col-md-7'>
                                        <span className=''>BEAT BLITZ</span>
                                        <div className=''>
                                            <span className=' col-md-6'> Weligama,Matara</span>
                                            <span className='col-md-6'>2023-10-05</span>
                                        </div>
                                    </div>
                                    <hr className='row'></hr>
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

