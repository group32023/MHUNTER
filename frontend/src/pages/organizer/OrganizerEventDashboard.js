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

            <div className="row">
                <div className="eventDescriptionDiv  mt-4 col-md-8">
                    <div className="p-4">
                        Content for 8-cols div
                    </div>
                </div>

                <div className="locationDescriptionDiv mt-4 col-md-3">
                    <div className="eventTypeDescriptionDiv ">
                        <div className="p-4">
                            Content for 4-cols div
                        </div>
                    </div>
                    <div className="eventTypeDescriptionDiv ">
                        <div className="p-4">
                            Content for 4-cols div
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="eventDescriptionDiv  mt-4 col-md-8">
                    <div className="p-4">
                        Content for 8-cols div
                    </div>
                </div>

                <div className="locationDescriptionDiv mt-4 col-md-3">
                    <div className="eventTypeDescriptionDiv ">
                        <div className="p-4">
                            Content for 4-cols div
                        </div>
                    </div>
                    <div className="eventTypeDescriptionDiv ">
                        <div className="p-4">
                            Content for 4-cols div
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default OrganizerEventDashboard