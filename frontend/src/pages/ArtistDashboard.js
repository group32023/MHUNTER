import React from "react";
import { Routes, Route } from 'react-router-dom';

import ArtistPendingRequests from "./ArtistPendingRequests";
import ArtistPendingRequestView from "./ArtistPendingRequestView"
import ArtistGenerateReports from "./ArtistGenerateReports"
import ArtistPriorBooking from "./ArtistPriorBooking"

import ArtistEvent from './ArtistEvent';
import BandInvoice from './BandInvoice';
import ArtistEventOn from './ArtistEventOn';
import ArtistSpecificEvent from './ArtistSpecificEvent';
import ArtistGenerateReportsToday from './ArtistGenerateReportsToday'
import ArtistDashboardContent from "./ArtistDashboardContent";
import MyFeed from './MyFeed';
import SideMenuBarArtist from "../components/common/SideMenuBar/SideMenuBarArtist";
import SideMenuBarOrganizer from "../components/common/SideMenuBar/SideMenuBarOrganizer";

export default function ArtistDashboard() {
  return (
    <>
      <SideMenuBarArtist>
        <Routes>
          <Route path='/artist/PendingRequests' element={<ArtistPendingRequests/>}></Route>
            <Route path='/artist/Reports' element={<ArtistGenerateReports/>}></Route>
            <Route path='/artist/Dashboard' element={<ArtistDashboardContent/>}></Route>
            <Route path='/artist/report/today/:id' element={<ArtistGenerateReportsToday/>}></Route>
            <Route path='/artist/Event' element={<ArtistEvent/>}></Route>
            <Route path='/artist/EventSpecific/:id' element={<ArtistSpecificEvent/>}></Route>
            <Route path='/artist/PendingRequestView/:id' element={<ArtistPendingRequestView/>}></Route>
            <Route path='/artist/priorbooking/:id1/:id2' element={<ArtistPriorBooking/>}></Route>
            <Route path='/artist/eventsOn/:mmid/:date/:id' element={<ArtistEventOn/>}></Route>
            <Route path='/band/invoice/:id' element={<BandInvoice/>}></Route> 
            <Route path='/artist/MyFeed' element={<MyFeed/>}></Route>
        </Routes>
      </SideMenuBarArtist>
    </>


  );
}
