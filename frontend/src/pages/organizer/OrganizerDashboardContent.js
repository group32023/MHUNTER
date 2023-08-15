import React from 'react';
import Topbar from '../../components/common/Topbar';
import DashboardCarousel from '../../components/organizer/DashboardCarousel';
import DashboardCalender from '../../components/organizer/DashboardCalender';
// import CalenderImg from '../../assets/images/calenderImg.png'
import '../../assets/css/OrganizerDashboard.css'
import { BiSolidCalendarStar } from "react-icons/bi";
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

            <div className='row mt-3 Dashboard-custom-flex-row' style={{ marginLeft: '50px' }}>
                <div className='PaymentsDiv col-md-6'></div>


                <div className='UpcominEventsDiv '>
                    <div className="p-3">
                        <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>Upcoming Events</p>
                        <hr></hr>
                        <div className="UpcomingTableDiv mt-4">

                            <div className="row tableUpcomingContent">
                                <div className='upcomingDivEventImage '>
                                    <img className='' alt='' src={EventImg} width='220px' height='120px'></img>
                                </div>


                                <div className='upcomingDivEventData'>
                                    <span className='row eventTitle'>BEAT BLITZ</span>
                                    <div className='row eventDataRow1'>
                                        <span className='row eventLocation'> Weligama,Matara</span>
                                        <div className='row eventDate'>
                                            <BiSolidCalendarStar />
                                            <span >2023-10-05</span>
                                        </div>

                                    </div>

                                    <span className='row'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</span>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <br></br>
            <br></br>
        </div>
    );
};

export default OrganizerDashboardContent;

