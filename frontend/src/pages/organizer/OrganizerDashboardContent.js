import React from 'react';
import Topbar from '../../components/common/Topbar';
import DashboardCarousel from '../../components/organizer/DashboardCarousel';
import DashboardCalender from '../../components/organizer/DashboardCalender';
// import CalenderImg from '../../assets/images/calenderImg.png'
import '../../assets/css/OrganizerDashboard.css'
import { BsMusicNoteList } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { BiSolidCalendarStar } from "react-icons/bi";


import EventBanner1 from '../../assets/images/eventbanner1.jpeg'
import EventBanner2 from '../../assets/images/eventbanner2.jpg'
import EventBanner3 from '../../assets/images/eventbanner3.jpg'
import EventBanner4 from '../../assets/images/eventbanner4.jpg'
import EventBanner5 from '../../assets/images/eventbanner5.jpg'
import EventBanner6 from '../../assets/images/eventbanner6.jpg'


import PaymentArtist1 from '../../assets/images/paymentArtist1.jpeg'
import PaymentArtist2 from '../../assets/images/paymentArtist2.jpeg'
import PaymentArtist3 from '../../assets/images/paymentArtist3.jpg'
import PaymentArtist4 from '../../assets/images/paymentArtist4.jpg'
import PaymentArtist5 from '../../assets/images/paymentArtist5.jpeg'
import PaymentArtist6 from '../../assets/images/paymentArtist6.jpg'
import PaymentArtist7 from '../../assets/images/paymentArtist7.jpg'
import PaymentArtist8 from '../../assets/images/paymentArtist8.png'
import PaymentArtist9 from '../../assets/images/paymentArtist9.jpeg'
import PaymentArtist10 from '../../assets/images/paymentArtist10.jpg'



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

            <div className='row mt-3 Dashboard-custom-flex-row' style={{ marginLeft: '50px' }}>
                <div className='PaymentsTBDiv col-md-6'>
                    <div className="p-3">
                        <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>Payments To Be Done</p>
                        <hr></hr>

                        <div className="PaymentTBTableDiv mt-4">

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist4} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>DIM3</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />OBA NISA PERA BEATZ</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist1} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>WASTHI</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />APE KALAWA</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist7} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>B N S</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />B N S LIVE IN CONCERT</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist8} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>DINESH GAMAGE</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />APE KALAWA</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist9} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>MARIANS</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />LEGENDS PLUS LIVE</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist10} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>DADDY</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />APE KALAWA</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist2} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>KANCHANA ANURADHI</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />APE KALAWA</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist1} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>WASTHI</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />ROSA KALPANA</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>



                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist5} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>WASTHI</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />OBA NISA PERA BEATZ</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>

                            <div className="row tablePaymentTBContent">
                                <div className='PaymentTBImage '>
                                    <img className='' alt='' src={PaymentArtist6} width='50px' height='50px'></img>
                                </div>
                                <div className="innertablePaymentTBContent">
                                    <div className='PaymentTBTitle d-flex align-items-center justify-content-center'>WASTHI</div>
                                    <div className='PaymentTBEventName d-flex align-items-center justify-content-center'><BsMusicNoteList className='' style={{ fontSize: '18px', marginRight: '7px', color: '#7643D2' }} />ROSA KALPANA</div>
                                    <div className='PaymentTBAmount d-flex align-items-center justify-content-center'>LKR 60 000.00</div>
                                    <div className=' PaymentTBBtn d-flex align-items-center justify-content-center'>
                                        <Button className='paymentBtn shadow' variant="secondary" >
                                            Pay Now
                                        </Button>
                                    </div>

                                </div>
                            </div>


                        </div>




                    </div>
                </div>

                {/* Upcoming Events Div */}

                <div className='UpcominEventsDiv '>
                    <div className="p-3">
                        <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' }}>Upcoming Events</p>
                        <hr></hr>
                        <div className="UpcomingTableDiv mt-4">

                            <div className="row tableUpcomingContent">
                                <div className='upcomingDivEventImage '>
                                    <img className='' alt='' src={EventBanner4} width='200px' height='110px'></img>
                                </div>


                                <div className='upcomingDivEventData'>
                                    <span className='row eventTitle'>APE KALAWA</span>
                                    <div className='row eventDataRow1'>
                                        <span className='row eventLocation'>Viharamahadevi Open Air Theater</span>
                                        <div className='row eventDate'>
                                            <BiSolidCalendarStar className='fs-5' style={{ color: '#7643D2' }} />
                                            <span >2023-12-31</span>
                                        </div>

                                    </div>

                                    <span className='eventDescription row mt-1 '>The Ape Kalawa Concert is an energetic and diverse music event featuring renowned artists, dynamic performances, and cultural celebration. It blends modern genres, encouraging audience participation and showcasing emerging talent.</span>

                                </div>
                                <hr className='mt-3 '></hr>

                            </div>


                            <div className="row tableUpcomingContent">
                                <div>
                                </div>
                                <div className='upcomingDivEventImage '>
                                    <img className='' alt='' src={EventBanner2} width='200px' height='110px'></img>
                                </div>


                                <div className='upcomingDivEventData'>
                                    <span className='row eventTitle'>OBA NISA PERA BEATZ</span>
                                    <div className='row eventDataRow1'>
                                        <span className='row eventLocation'>University of Peradeniya, Gymnasium</span>
                                        <div className='row eventDate'>
                                            <BiSolidCalendarStar className='fs-5' style={{ color: '#7643D2' }} />
                                            <span >2023-10-05</span>
                                        </div>

                                    </div>

                                    <span className='eventDescription row mt-1 '>Oba Nisa live in concert: A vibrant musical journey for university students, featuring a fusion of genres and unforgettable performances that celebrate youth.</span>

                                </div>
                                <hr className='mt-3 '></hr>

                            </div>

                            <div className="row tableUpcomingContent">
                                <div className='upcomingDivEventImage '>
                                    <img className='' alt='' src={EventBanner1} width='200px' height='110px'></img>
                                </div>


                                <div className='upcomingDivEventData'>
                                    <span className='row eventTitle'>DADDY LIVE IN CONCERT</span>
                                    <div className='row eventDataRow1'>
                                        <span className='row eventLocation'>Central Auditorium, Weligama,Matara</span>
                                        <div className='row eventDate'>
                                            <BiSolidCalendarStar className='fs-5' style={{ color: '#7643D2' }} />
                                            <span >2023-11-23</span>
                                        </div>

                                    </div>

                                    <span className='eventDescription row mt-1 '>Daddy Band delivers an electrifying live concert experience, blending dynamic rock melodies with captivating stage presence.</span>

                                </div>
                                <hr className='mt-3 '></hr>

                            </div>

                            <div className="row tableUpcomingContent">
                                <div className='upcomingDivEventImage '>
                                    <img className='' alt='' src={EventBanner3} width='200px' height='110px'></img>
                                </div>


                                <div className='upcomingDivEventData'>
                                    <span className='row eventTitle'>B N S LIVE IN CONCERT</span>
                                    <div className='row eventDataRow1'>
                                        <span className='row eventLocation'> Air Force Grounds, Weerawila</span>
                                        <div className='row eventDate'>
                                            <BiSolidCalendarStar className='fs-5' style={{ color: '#7643D2' }} />
                                            <span >2023-11-25</span>
                                        </div>

                                    </div>

                                    <span className='eventDescription row mt-1 '>BNS takes the stage in an unforgettable live concert, creating an immersive musical experience that resonates with fans of all ages.</span>

                                </div>
                                <hr className='mt-3 '></hr>

                            </div>


                            <div className="row tableUpcomingContent">
                                <div className='upcomingDivEventImage '>
                                    <img className='' alt='' src={EventBanner5} width='200px' height='110px'></img>
                                </div>


                                <div className='upcomingDivEventData'>
                                    <span className='row eventTitle'>LEGENDS PLUS CURRENT LIVE</span>
                                    <div className='row eventDataRow1'>
                                        <span className='row eventLocation'> Youth Center, Maharagama</span>
                                        <div className='row eventDate'>
                                            <BiSolidCalendarStar className='fs-5' style={{ color: '#7643D2' }} />
                                            <span >2023-10-05</span>
                                        </div>

                                    </div>

                                    <span className='eventDescription row mt-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</span>

                                </div>
                                <hr className='mt-3 '></hr>

                            </div>



                            <div className="row tableUpcomingContent">
                                <div className='upcomingDivEventImage '>
                                    <img className='' alt='' src={EventBanner6} width='200px' height='110px'></img>
                                </div>


                                <div className='upcomingDivEventData'>
                                    <span className='row eventTitle'>ROSA KALPANA</span>
                                    <div className='row eventDataRow1'>
                                        <span className='row eventLocation'> Bishop's College Auditorium</span>
                                        <div className='row eventDate'>
                                            <BiSolidCalendarStar className='fs-5' style={{ color: '#7643D2' }} />
                                            <span >2023-10-05</span>
                                        </div>

                                    </div>

                                    <span className='eventDescription row mt-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</span>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <br></br>
            <br></br>
        </div>
    );
};

export default OrganizerDashboardContent;

