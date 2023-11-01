
// import Organizer Components
import OrganizerDashboard from './pages/organizer/OrganizerDashboard'
import OrganizerComplaint from './pages/organizer/OrganizerComplaint';
// import OrganizerDashboardContent from './pages/organizer/OrganizerDashboardContent'
import OrganizerEventHistory from './pages/organizer/OrganizerEventHistory'
import OrganizerEventDashboard from './pages/organizer/OrganizerEventDashboard'
import ViewEvents from './pages/organizer/ViewEvents'
import CreateEvent from './pages/organizer/CreateEvent'
import OrganizerProfile from './pages/organizer/OrganizerProfile';
import SearchArtist from './pages/organizer/SearchArtist';
import ViewEventHistory from './pages/organizer/ViewEventHistory';
import ViewArtist from './pages/organizer/ViewArtist';
import MakeArtistRequest from './pages/organizer/MakeArtistRequest';
import SearchBand from './pages/organizer/SearchBand';
import ViewBand from './pages/organizer/ViewBand'

import "./index.css"


import './App.css';
import SlideMenuBarArtist from './components/common/SideMenuBar/SideMenuBarArtist'
import Event from './pages/Event';
import Band from './pages/Band';
import Artist from './pages/Artist';
import AboutUs from './pages/AboutUs';
import Contact from './pages/contact';

import ArtistDashboard from './pages/ArtistDashboard';
import ArtistPendingRequests from "./pages/ArtistPendingRequests";
import ArtistPendingRequestView from "./pages/ArtistPendingRequestView";
import ArtistGenerateReports from "./pages/ArtistGenerateReports";
import ConfirmRequest from "./pages/ConfirmRequest"
import ArtistPriorBooking from "./pages/ArtistPriorBooking"

import ArtistEvent from './pages/ArtistEvent';
import BandPendingRequests from './pages/BandPendingRequests';
import BandPendingRequestView from './pages/BandPendingRequestView';
import BandAgreement from './pages/BandAgreement';
import BandAgreementPreview from './pages/BandAgreementPreview';
import BandInvoicePreview from './pages/BandInvoicePreview';
import BandEventsOn from './pages/BandEventsOn';
import BandPriorBooking from "./pages/BandPriorBooking"


import BandInvoice from './pages/BandInvoice';
import ArtistEventOn from './pages/ArtistEventOn';
import ArtistSpecificEvent from './pages/ArtistSpecificEvent';
import ArtistGenerateReportsToday from './pages/ArtistGenerateReportsToday'
import ArtistInvoice from './pages/ArtistInvoice';
import RequestsLog from './pages/RequestLog';
import PaymentForm from './pages/organizer/paymentForm';
import StripePaymentForm from './pages/organizer/StripePaymentForm';

import ArtistProfile from './pages/ArtistProfile';







import MyFeed from './pages/MyFeed';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistBandSignup from './pages/ArtistBandSignup';
import ArtistSignup from './pages/ArtistSignup';
import NavBar from './components/common/NavBar';
import MainSlider from './components/common/MainSlider';
import BandSignup from './pages/BandSignup';
import AdminDashboard from './pages/admin/AdminDashboard';
import BandDashboard from './pages/band/BandDashboard';
// import ModeratorDashboard from './pages/moderator/ModeratorDashboard';
import AdminRegistration from './pages/admin/AdminRegistration';
import ProofCheck from './pages/admin/ProofCheck';
import AllUserDetails from './pages/admin/AllUserDetails';
import ViewUserDetails from './pages/admin/ViewUserDetails';
import AdminReport from './pages/admin/AdminReport';
import AdminSettings from './pages/admin/AdminSettings';
import OrganizerSignup from './pages/OrganizerSignup';
import UserDetails from './pages/admin/UserDetails';
import AdminEvents from './pages/admin/AdminEvents';
import AdminEventDashboard from './pages/admin/AdminEventDashboard';
import AdminProfile from './pages/admin/AdminProfile';

import ModeratorDashoboardContent from './pages/moderator/moderatorDashoboardContent';
import ModeratorRegistration from './pages/moderator/registration';
import ModeratorComplaints from './pages/moderator/complaints';
import ModeratorUserDetails from './pages/moderator/userDetails';
import ModeratorProofCheck from './pages/moderator/ProofCheck';
import EventDetails from './pages/moderator/eventDetails';
import ViewComplaints from './pages/moderator/viewComplaints';
import ModeratorEvent from "./pages/moderator/event";
import Suspenduser from './pages/moderator/suspenduser';
import StripeClient from './pages/organizer/StripeClient';
import TestButton from './pages/organizer/TestButton';
function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/band' element={<Band/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>



          {/* Artist Routes */}
          <Route path='/artist/PendingRequests' element={<ArtistPendingRequests/>}></Route>
          <Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
          <Route path='/artist/Dashboard' element={<ArtistDashboard/>}></Route>
          <Route path='/artist/Reports/:id' element={<ArtistGenerateReportsToday/>}></Route>
          <Route path='/artist/Event' element={<ArtistEvent/>}></Route>
          <Route path='/artist/MyFeed' element={<MyFeed/>}></Route>
          <Route path='/artist/EventSpecific/:id' element={<ArtistSpecificEvent/>}></Route>
          <Route path='/artist/PendingRequestView/:id' element={<ArtistPendingRequestView/>}></Route>
          <Route path='/artist/priorbooking/:id1/:id2/:id3' element={<ArtistPriorBooking/>}></Route>
          <Route path='/artist/eventsOn/:mmid/:date/:eventId' element={<ArtistEventOn/>}></Route>
          <Route path='/artist/invoice/:id/:mmid' element={<ArtistInvoice/>}></Route> 
          <Route path='/requestsLog' element={<RequestsLog/>}></Route> 
          <Route path='/artist/profile/:id' element={<ArtistProfile/>} />


          {/* Band Routes */}
          <Route path='/band/PendingRequests' element={<BandPendingRequests />}></Route>
          {/* <Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
          <Route path='/artist/Dashboard' element={<ArtistDashboard/>}></Route>
          <Route path='/artist/Reports/:id' element={<ArtistGenerateReportsToday/>}></Route>
          <Route path='/artist/Event' element={<ArtistEvent/>}></Route>
          <Route path='/artist/EventSpecific/:id' element={<ArtistSpecificEvent/>}></Route> */}
          <Route path='/band/PendingRequestView/:id' element={<BandPendingRequestView />}></Route>
          <Route path='/band/priorbooking/:id1/:id2/:id3' element={<BandPriorBooking />}></Route>
          <Route path='/band/eventsOn/:mmid/:date/:eventId' element={<BandEventsOn />}></Route>
          <Route path='/band/agreement/:id/:mid/:id1' element={<BandAgreement />}></Route>
          <Route path='/band/invoice/:id/:mid/:oid' element={<BandInvoice />}></Route>
          <Route path='/band/agreementPreview/:id/:mmid' element={<BandAgreementPreview />}></Route>
          <Route path='/band/invoicePreview/:id/:mmid' element={<BandInvoicePreview />}></Route>

          {/* <Route path='/artist/MyFeed' element={<MyFeed/>}></Route> */}



          {/* Organizer Routes */}
          <Route path='/' element={<Home />}></Route>

          <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
          <Route path='/organizer/event' element={<ViewEvents />}></Route>
          <Route path='/organizer/event/eventdashboard/:eventid' element={<OrganizerEventDashboard />}></Route>
          <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
          <Route path='/organizer/eventhistory' element={<ViewEventHistory />}></Route>
          <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
          <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
          <Route path='/organizer/searchartist' element={<SearchArtist />} />
          <Route path='/organizer/searchartist/viewartist' element={<ViewArtist />} />  
          <Route path='/organizer/searchartist/viewartist/makeartistrequest' element={<MakeArtistRequest />} />  
          <Route path='/organizer/paymentForm/:artistId'element={<PaymentForm />} /> 
          <Route path='/organizer/paymentForm/stripePayment'element={<StripeClient />} /> 
          <Route path='/organizer/test-button'element={<TestButton />} /> 
          <Route path='/organizer/searchband' element={<SearchBand />} />
          <Route path='/organizer/searchartist/:eventid' element={<SearchArtist />} />
          <Route path='/organizer/searchartist/viewartist/:mmid/:eventid' element={<ViewArtist />} />  
          <Route path='/organizer/searchartist/viewartist/makeartistrequest/:mmid/:eventid' element={<MakeArtistRequest />} />  
          <Route path='/organizer/searchband/:eventid' element={<SearchBand />} />
          <Route path='/organizer/searchband/viewband/:mmid/:eventid' element={<ViewBand/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/artistbandsignup' element={<ArtistBandSignup />} />
          <Route path='/artistsignup' element={<ArtistSignup />} />
          <Route path='/bandsignup' element={<BandSignup />} />
          <Route path='/organizersignup' element={<OrganizerSignup />} />
          <Route path='/artistdashboard' element={<ArtistDashboard />} /> 
          <Route path='/banddashboard' element={<BandDashboard />} />
          {/* <Route path='/moderatordashboard' element={<ModeratorDashboard />} /> */}
          <Route path='/organizerdashboard' element={<OrganizerDashboard />} />


          {/*Admin*/}
          <Route path='/admin/admindashboard' element={<AdminDashboard />} />
          <Route path='/admin/registration' element={<AdminRegistration />} />
          <Route path="/admin/registration/proofcheck/:id/:type" element={<ProofCheck />} />
          <Route path='/admin/Alluserdetails' element={<UserDetails />} />
          <Route path='/admin/userdetails/:type' element={<AllUserDetails />} />
          <Route path='/admin/userdetails/viewdetails/:id/:type' element={<ViewUserDetails />} />
          <Route path='/admin/report' element={<AdminReport />} />
          <Route path='/admin/settings' element={<AdminSettings />} />
          <Route path='/admin/event' element={<AdminEvents />} />
          <Route path='/admin/event/eventDetails' element={<AdminEventDashboard/>} />
          <Route path='/admin/profile/:id' element={<AdminProfile/>} />

          {/*moderator*/}
           <Route path='/moderator/moderatorDashoboardContent' element={<ModeratorDashoboardContent />}></Route>
          <Route path='/moderator/registration' element={<ModeratorRegistration  />}></Route>
          <Route path='/moderator/registration/ProofCheck' element={<ProofCheck/>} />
          <Route path='/moderator/event' element={<ModeratorEvent />}></Route>
          <Route path='/moderator/complaints' element={<ModeratorComplaints />}></Route>
          <Route path='/moderator/complaints/viewComplaints' element={<ViewComplaints />} />
          <Route path='/moderator/userDetails' element={<ModeratorUserDetails />}></Route>
          <Route path='/moderator/event/eventDetails' element={<EventDetails/>}/>
          <Route path='/moderator/registration/ProofCheck' element={<proofCheck/>}/>
          <Route path='/moderator/registration/proofcheck/suspenduser' element={<Suspenduser/>}/>
          

        </Routes>
      </Router>

      {/*<div>
      <MainSlider>
      </MainSlider>
      <div>
        <NavBar>
        </NavBar>
      </div>
  </div>*/}


    </div>


  );

}

export default App;

