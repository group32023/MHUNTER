import React from 'react';
import Topbar from '../../components/common/Topbar';
import DashboardCarousel from '../../components/organizer/DashboardCarousel';
import CalenderImg from '../../assets/images/calenderImg.png'

function OrganizerDashboardContent() {
    // Your component logic here
    return (

        <div className='OrganizerDashboardMainContainer'>
            <Topbar />
            <div className='row' style={{ marginLeft: '35px', marginRight: '30px' }}>
                <DashboardCarousel />
            </div>

            <div className='row mt-3' style={{ marginLeft: '45px' }}>
                <div className='UpcominEventsDiv col-md-8'></div>
                <div className='DashboardCalenderDiv'>
                    <img alt='' className='mt-2' src={CalenderImg} width='330px' height='310px'></img>
                </div>
            </div>

        </div>
    );
};

export default OrganizerDashboardContent;

