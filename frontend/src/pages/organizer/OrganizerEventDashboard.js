import React from 'react'
import "../../assets/css/OrganizerEventDashboard.css"
import Topbar from '../../components/common/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function OrganizerEventDashboard() {
    return (
        <div className='eventDashboard_content_container'>
            <Topbar />

            <div className="row">
                <div className="horizontalLine col-md-12 py-2 fs-7">
                    <span >Events / BEAT BLITZ</span>
                </div>
            </div>

            <div className="row mt-4">
                <div className="horizontalLine col-md-12 py-2 fs-7">
                    <span >Events / BEAT BLITZ</span>
                </div>
            </div>
        </div>


    )
}

export default OrganizerEventDashboard