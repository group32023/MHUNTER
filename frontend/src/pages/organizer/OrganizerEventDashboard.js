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

            <div class="row">


                <div className="col-8 mt-4 mx-4">
                    <div className="eventDescriptionDiv p-4">
                        Content for 8-cols div
                    </div>
                </div>


                {/* <div class="col-xs-4">
                <div class="col-xs-4">
                            <div className="locationDescriptionDiv">
                                Content for 4-cols div
                            </div>
                        </div>


                        <div class="col-xs-4">
                            <div className="locationDescriptionDiv">
                                Content for half-width 4-cols div
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>


    )
}

export default OrganizerEventDashboard