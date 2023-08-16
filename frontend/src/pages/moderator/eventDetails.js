
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SideMenuBarModerator from '../../components/common/SideMenuBar/SideMenuBarModerator';
import Topbar from '../../components/common/Topbar';
import "../../assets/css/moderator/moderatorEventDashboard.css"
import profilePhoto from '../../assets/images/profilePhoto.jpeg'
import band from '../../assets/images/band.jpg'
import { BiSolidEdit } from "react-icons/bi";
import { BiSolidBox } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidTimeFive } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { BiSolidPlusCircle } from "react-icons/bi";
import { BiSolidCircle } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css'
import ModeratorRegistration from './registration';
import ModeratorComplaints from './complaints';
import ModeratorUserDetails from './userDetails';
import ModeratorDashoboardContent from './moderatorDashoboardContent';
import EventDetails from './eventDetails';
import ModeratorEvent from './event';
import ViewComplaints from './viewComplaints';
import ProofCheck from './ProofCheck';
import Suspenduser from './suspenduser';  

function ModeratorEventDashboard() {
    const [formData, setFormData] = useState({
        name: 'Theekshana Anuradha',
        usercode: '2020',
        payment: '350000',
        paymentdate: '06/07/2023',
        paymentstatus: 'Confirmed',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform any action with the form data here, like submitting it to a backend server
        console.log(formData);}
        
    return (
        <>
        <SideMenuBarModerator>
        <Topbar/>
        <div className='moderator-body-container'>

            {/*header icon*/}

                <div className='header-title'>
                    <h1>Event Details</h1>
                </div> 
                <div className="row">
                
            </div> 
            {/* name.type.crowd */}
                <div className="detailsDiv">        
                <div className="eventModeratorDescriptionDiv " style={{ fontFamily: 'MyCustomFont1' }}>
                        <div className="p-3">
                            <div className="row " style={{ marginLeft: '30px' }} >
                                <BiSolidCalendarStar className='dateIcon fs-1 col-md-3 ' />
                                <div className='col-md-8' >
                                    <p className='fs-6' style={{ fontFamily: 'MyCustomFont',color:"#fff" }}>Organiser Name<br></br>
                                        <span className='fs-4' style={{ fontFamily: 'MyCustomFont1' }}>D.K.D.Perera</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        
                </div> 
                <div className="eventTypeModderatorDescriptionDiv " style={{ fontFamily: 'MyCustomFont1' }}>
                        <div className="p-3">
                            <div className="row " style={{ marginLeft: '30px' }} >
                                <BiSolidCalendarStar className='dateIcon fs-1 col-md-3 ' />
                                <div className='col-md-8' >
                                    <p className='fs-6' style={{ fontFamily: 'MyCustomFont', color:"#fff" }}>Event Type<br></br>
                                        <span className='fs-4' style={{ fontFamily: 'MyCustomFont1' }}>Wedding</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                        
                </div> 
                    <div className="eventTypeModderatorDescriptionDiv " >
                        <div className="p-3">
                            <div className="row" style={{ marginLeft: '30px' }}>
                                <BiSolidUser className='timeIcon fs-1 col-md-3 ' />
                                <div className='col-md-8'>
                                    <p className='fs-6' style={{ fontFamily: 'MyCustomFont',color:"#fff" }}>Expected Crowd<br></br>
                                        <span className='fs-3' style={{ fontFamily: 'MyCustomFont1' }}>8000</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div> 
                </div>  
         {/* end of the div name.type.crowd */}
         {/* details about the event */}
                <div className="detailsDiv">
                <div className="eventmoderaDescriptionDiv  mt-4 col-md-7">
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

                            <div className="row mt-2" style={{ fontFamily: 'MyCustomFont1', color:"#fff" }}>
                                <div className="datemodTimeDiv">
                                    <div className="row">
                                        <BiSolidCalendar className='dateIcon fs-1 col-md-3 ' />
                                        <div className='col-md-8 mt-2'>
                                            <p>Event Date<br></br>
                                                <span className='fs-4'>Jun 14 2023</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="datemodTimeDiv">
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
                <div className="LocationmodDiv  mt-4 col-md-7">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9283954771886!2d79.85487667464785!3d6.899167393100105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25961e5f288c9%3A0x8fa7cee7dbdd8697!2s33%2C%2023%20Queen&#39;s%20Rd%2C%20Colombo%2000300!5e0!3m2!1sen!2slk!4v1690021295416!5m2!1sen!2slk" >
                 </iframe>
                 </div>
              </div> 
                {/* end of the div details about the event */}
                <div className="Artistandband">
                <div className="ArtistDetDiv  mt-4 col-md-7">

                <form>
           
            <div className="my-form">
                <h2 className='formHeading'>Artist Details</h2>
                <div className="eventImgDiv ">
                            <img alt='' src={profilePhoto} width='120px' height='120px' />
                        </div><br></br>
              <table>
              <tr className="white-text-row">
                  <td className='label'>Name  :</td>
                  <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
                </tr>
                <tr className="white-text-row">
                  <td className='label'>User Code  :</td>
                  <td><input type="text" name="name" value={formData.usercode} onChange={handleChange} /></td>
                </tr>

                <tr className="white-text-row">
                  <td className='label'>Payment :</td>
                  <td><input type="text" name="usecode" value={formData.payment} onChange={handleChange} /></td>
                </tr>

                <tr className="white-text-row">
                  <td className='label'>Payment Date :</td>
                  <td><input type="text" name="userType" value={formData.paymentdate} onChange={handleChange} /></td>
                </tr>
                <tr className="white-text-row">
                  <td className='label'>Payment Status  :</td>
                  <td><input type="text" name="address" value={formData.paymentstatus} onChange={handleChange} /></td>

                </tr>

                  
              </table>
            </div>
          
          
        </form>
        </div>
        <div className="ArtistDetDiv  mt-4 col-md-7">

                <form>
           
            <div className="my-form">
                <h2 className='formHeading'>Band Details</h2>
                <div className="eventImgDiv ">
                            <img alt='' src={band} width='120px' height='120px' />
                        </div><br></br>
              <table>
              <tr className="white-text-row">
                  <td className='label'>Name  :</td>
                  <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
                </tr>
                <tr className="white-text-row">
                  <td className='label'>User Code  :</td>
                  <td><input type="text" name="name" value={formData.usercode} onChange={handleChange} /></td>
                </tr>

                <tr className="white-text-row">
                  <td className='label'>Payment :</td>
                  <td><input type="text" name="usecode" value={formData.payment} onChange={handleChange} /></td>
                </tr>

                <tr className="white-text-row">
                  <td className='label'>Payment Date :</td>
                  <td><input type="text" name="userType" value={formData.paymentdate} onChange={handleChange} /></td>
                </tr>
                <tr className="white-text-row">
                  <td className='label'>Payment Status  :</td>
                  <td><input type="text" name="address" value={formData.paymentstatus} onChange={handleChange} /></td>

                </tr>

                  
              </table>
            </div>
          
          
        </form>
        </div>
            </div>


</div>
<Routes>
          {/* Nested routes for the Organizer Dashboard */}
          <Route path='/moderator/moderatorDashoboardContent' element={<ModeratorDashoboardContent />}></Route>
          <Route path='/moderator/registration' element={<ModeratorRegistration />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/complaints/viewComplaints' element={<ViewComplaints />}></Route>

          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>
          <Route path='/moderator/event/eventDetails' element={<EventDetails />}></Route>
          <Route path='/moderator/registration/ProofCheck' element={<ProofCheck />}></Route>
          <Route path='/moderator/registration/Proofcheck/suspenduser' element={<Suspenduser />}></Route>

        </Routes>
      </SideMenuBarModerator>
          </>
    )
}

export default ModeratorEventDashboard