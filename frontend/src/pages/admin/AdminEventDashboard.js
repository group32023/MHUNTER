import React,{useState} from 'react'
import {useEffect } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin'
import '../../assets/css/admin/adminDashboard.css'
import { Link, Route, Routes } from 'react-router-dom';

import AdminDashboard from './AdminDashboard'
import AdminRegistration from './AdminRegistration';
import ProofCheck from './ProofCheck';
import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';
import Topbar from '../../components/common/Topbar'

import { BiSolidEdit } from "react-icons/bi";
import { BiSolidBox } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidTimeFive } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { BiSolidPlusCircle } from "react-icons/bi";
import { BiSolidCircle } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom';

import profilePhoto from '../../assets/images/profilePhoto.jpeg'
import locationDemo from '../../assets/images/locationDemo.jpeg'
import EventBanner4 from '../../assets/images/aaley.jpg'
import ArtistImage from '../../assets/images/artist.jpg'
import BandImage from '../../assets/images/band.jpg'
import axios from 'axios';

function AdminEventDashboard() {
    const { id} = useParams();
    const [formData, setFormData] = useState([]);

  // Event Data Fetching
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/event/byEventid/${id}`);
        setFormData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEventDetails();
  }, [id]);


  return (
    <>
    <SideMenuBarAdmin>
    <div className='eventDashboard_content_container'>
                    <Topbar />
                    <div className='header-admin'>
                        <div className='header-title'>
                            <h1>Event Details</h1>
                        </div>
                    </div>
                    {formData.map(event => (
                    <div className="row">
                    
                        <div className="eventDescriptionDiv  mt-3 col-md-7">
                            <div className="row p-2 ">
                                <div className="eventImgDiv col-md-5 mt-2">
                                    <img alt='' src={EventBanner4} width='385px' height='210px' />
                                </div>
                                <div className="eventDescDiv col-md-7 mt-2"  >
                                    <span className="eventDescDivSpan"> {event.event_name}</span>
                                    <div className="row" style={{ display: 'flex' }}>
                                        <div className="eventDescInnerDiv col-md-10 py-2 " >
                                            <p style={{ textAlign: 'justify' }}>
                                                {event.description}
                                            </p>
                                        </div>


                                    </div>

                                    <div className="row mt-2" style={{ fontFamily: 'MyCustomFont1', display: 'flex' }}>
                                        <div className="dateTimeDiv">
                                            <div className="row">
                                                <BiSolidCalendar className='dateIcon fs-1 col-md-3 ' />
                                                <div className='col-md-8 mt-2'>
                                                    <p>Event Date<br></br>
                                                        <span className='fs-4'>{event.date}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dateTimeDiv">
                                            <div className="row" >
                                                <BiSolidTimeFive className='timeIcon fs-1 col-md-3 ' />
                                                <div className='col-md-8 mt-2'>
                                                    <p>Event Time<br></br>
                                                        <span className='fs-4'>{event.start_time}</span>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                        
                        <div className="locationDescriptionDiv mt-3 col-md-4">
                            <div className="locationTypeDescriptionDiv">
                                <img className='img-fluid' src={locationDemo} alt='' ></img>
                            </div>
                            <div className="eventTypeDescriptionDiv " style={{ fontFamily: 'MyCustomFont1' }}>
                                <div className="p-3">
                                    <div className="row " style={{ marginLeft: '30px' }} >
                                        <BiSolidCalendarStar className='dateIcon fs-1 col-md-3 ' />
                                        <div className='col-md-8' >
                                            <p className='fs-6' style={{ fontFamily: 'MyCustomFont' }}>Event Type<br></br>
                                                <span className='fs-4' style={{ fontFamily: 'MyCustomFont1' }}>{event.event_type}</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        
                        <div  style={{ flex: 1, padding: '30px', backgroundColor:'#2f363e', borderRadius:'10px',marginLeft:'20px' }}>
                            <h2>Artist Details</h2>
                            <form className="admin-event-dashboard-artist-details">
                                
                                <img  src={ArtistImage}  alt="Artist" style={{ maxWidth: '30%' }} />
                                <br />
                                <div className='artist-details-in-dashboard'>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="fname">Artist</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Theekshana Anuradha"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">User Code</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="0018"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">Payment</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="30 000.00"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">Payment Date</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="2023-08-20"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">Status</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="Confirmed"/>
                                    </div>
                                </div>

                                </div>
                            </form>
                        </div>

                        <div  style={{ flex: 1, padding: '30px', backgroundColor:'#2f363e', borderRadius:'10px',marginLeft:'20px' }}>
                            <h2>Band Details</h2>
                            <form className="admin-event-dashboard-artist-details">
                                
                                <img  src={BandImage}  alt="Artist" style={{ maxWidth: '25%' }} />
                                <br />
                                <div className='artist-details-in-dashboard'>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="fname">Band</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Daddy"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">User Code</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="0010"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">Payment</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="20 000.00"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">Payment Date</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="2023-08-10"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-25">
                                    <label for="lname">Status</label>
                                    </div>
                                    <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="Confirmed"/>
                                    </div>
                                </div>

                                </div>
                            </form>
                        </div>


                    </div>




                </div>



    <Routes>        
          <Route path='/admin/admindashobard' element={<AdminDashboard/>} />
          <Route path='/admin/registration' element={<AdminRegistration/>} />
          <Route path='/admin/registration/proofcheck' element={<ProofCheck/>} />
          <Route path='/admin/userdetails' element={<AllUserDetails/>} />
          <Route path='/admin/userdetails/viewdetails' element={<ViewUserDetails/>} />
          <Route path='/admin/report' element={<AdminReport/>} />
          <Route path='/admin/settings' element={<AdminSettings/>} />
    </Routes>
    </SideMenuBarAdmin>
    </>
  )
}

export default AdminEventDashboard
