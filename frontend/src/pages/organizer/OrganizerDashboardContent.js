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
                <div className='UpcominEventsDiv col-md-7'></div>
                <div className='PaymentsDiv'></div>

            </div>

        </div>
    );
};

export default OrganizerDashboardContent;

