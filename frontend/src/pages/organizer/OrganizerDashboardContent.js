import React from 'react';
import Topbar from '../../components/common/Topbar';
import DashboardCarousel from '../../components/organizer/DashboardCarousel';

function OrganizerDashboardContent() {
    // Your component logic here
    return (

        <div className='text-white'>
            <Topbar />
            <DashboardCarousel />
        </div>
    );
};

export default OrganizerDashboardContent;

