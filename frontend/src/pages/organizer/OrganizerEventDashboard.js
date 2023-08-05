import React from 'react'
import "../../assets/css/OrganizerEventDashboard.css"
import Topbar from '../../components/common/Topbar';
import profilePhoto from '../../assets/images/profilePhoto.jpeg'
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
                <div className="eventDescriptionDiv  mt-4 col-md-7">
                    <div className="row p-3">
                        <div className="eventImgDiv col-md-2 mt-2">
                            <img alt='' src={profilePhoto} width='130px' height='130px' />
                        </div>
                        <div className="eventDescDiv col-md-10">
                            <span>BEAT BLITZ</span>
                            {/* Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div
                            Content for 8-cols div */}
                        </div>
                    </div>
                </div>

                <div className="locationDescriptionDiv mt-4 col-md-4">
                    <div className="locationTypeDescriptionDiv">
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
                <div className="requestTypeDescriptionDiv  mt-2 col-md-7" id='scrollbarStyle-1'>
                    <div className="p-4">
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>
                        Content for 8-cols div<hr></hr>

                    </div>
                </div>

                <div className="locationDescriptionDiv mt-2 col-md-4">
                    <div className="crowdTypeDescriptionDiv ">
                        <div className="p-4">
                            Content for 4-cols div
                        </div>
                    </div>
                    <div className="addTypeDescriptionDiv ">
                        <div className="p-4">
                            Content for 4-cols div
                        </div>
                    </div>
                    <div className="btnTypeDescriptionDiv ">
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