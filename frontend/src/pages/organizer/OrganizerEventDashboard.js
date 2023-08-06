import React from 'react'
import "../../assets/css/OrganizerEventDashboard.css"
import Topbar from '../../components/common/Topbar';
import profilePhoto from '../../assets/images/profilePhoto.jpeg'
import { BiSolidEdit } from "react-icons/bi";
import { BiSolidBox } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidTimeFive } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { BiSolidPlusCircle } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap';

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
                    <div className="row p-2 ">
                        <div className="eventImgDiv col-md-2 mt-4">
                            <img alt='' src={profilePhoto} width='120px' height='120px' />
                        </div>
                        <div className="eventDescDiv col-md-10 mt-2">
                            <span className="eventDescDivSpan">BEAT BLITZ</span>
                            <div className="row">
                                <div className="eventDescInnerDiv col-md-10 py-2 " >
                                    <p>
                                        for 8-cols div
                                        Content for 8-cols divContent for 8-cols divContent for 8-cols divContent for 8-cols div
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

                                    </p>
                                </div>
                                <div className='col-md-1'>
                                    <BiSolidEdit className='descriptionIcon fs-4  ' />
                                </div>
                                <div className='col-md-1 '>
                                    <BiSolidBox className='descriptionIcon fs-4   ' />
                                </div>
                            </div>

                            <div className="row mt-2" style={{ fontFamily: 'MyCustomFont1' }}>
                                <div className="dateTimeDiv">
                                    <div className="row">
                                        <BiSolidCalendar className='dateIcon fs-1 col-md-3 ' />
                                        <div className='col-md-8 mt-2'>
                                            <p>Event Date<br></br>
                                                <span className='fs-4'>Jun 14 2023</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dateTimeDiv">
                                    <div className="row" >
                                        <BiSolidTimeFive className='timeIcon fs-1 col-md-3 ' />
                                        <div className='col-md-8 mt-2'>
                                            <p>Event Time<br></br>
                                                <span className='fs-4'>17:00:00</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

                <div className="locationDescriptionDiv mt-4 col-md-4">
                    <div className="locationTypeDescriptionDiv">
                        <div className="p-4">
                            Content for 4-cols div
                        </div>
                    </div>
                    <div className="eventTypeDescriptionDiv " style={{ fontFamily: 'MyCustomFont1' }}>
                        <div className="p-3">
                            <div className="row " style={{ marginLeft: '30px' }} >
                                <BiSolidCalendarStar className='dateIcon fs-1 col-md-3 ' />
                                <div className='col-md-8' >
                                    <p className='fs-6' style={{ fontFamily: 'MyCustomFont' }}>Event Type<br></br>
                                        <span className='fs-4' style={{ fontFamily: 'MyCustomFont1' }}>Wedding</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="requestTypeDescriptionDiv  mt-2 col-md-7" id='scrollbarStyle-1' style={{ fontFamily: 'MyCustomFont' }}>
                    <div className="p-3">
                        <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>Requests</p>
                        <hr></hr>
                        <div className="requestTableDiv d-flex justify-content-center align-items-center">
                            <table className="table table-bordered text-center ">
                                <thead>
                                    <tr>
                                        <th className="col-md-5 fs-6" style={{ fontFamily: 'MyCustomFont1' }}>Artist/Band</th>
                                        <th className="col-md-5 fs-6" style={{ fontFamily: 'MyCustomFont1' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Artist 1</td>
                                        <td>Confirmed</td>
                                    </tr>
                                    <tr>
                                        <td>Artist 2</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>Artist 3</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>Artist 3</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>Artist 3</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>Artist 3</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>Artist 3</td>
                                        <td>Pending</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

                <div className="locationDescriptionDiv mt-2 col-md-4">
                    <div className="crowdTypeDescriptionDiv " >
                        <div className="p-3">
                            <div className="row" style={{ marginLeft: '30px' }}>
                                <BiSolidUser className='timeIcon fs-1 col-md-3 ' />
                                <div className='col-md-8'>
                                    <p className='fs-6' style={{ fontFamily: 'MyCustomFont' }}>Expected Crowd<br></br>
                                        <span className='fs-3' style={{ fontFamily: 'MyCustomFont1' }}>8000</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="addTypeDescriptionDiv p-2" style={{ fontFamily: 'MyCustomFont1' }}>
                        <div className="row col-md-12 ">
                            <div className="addRow p-2 mt-2 text-center">Add Band
                                <BiSolidPlusCircle className='plusIcon mx-2 fs-3' />
                            </div>

                            <div className="addRow mt-2 p-2 text-center">Add Artist
                                <BiSolidPlusCircle className='plusIcon mx-2 fs-3' />
                            </div>

                        </div>
                    </div>

                    <div className="row btnTypeDescriptionDiv " style={{ fontFamily: 'MyCustomFont1' }}>
                        <button className="cancelBtn col-md-5" >
                            Cancel Event
                        </button>
                        <button className="resheduleBtn col-md-5" >
                            Reshedule Event
                        </button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default OrganizerEventDashboard