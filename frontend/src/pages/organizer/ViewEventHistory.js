import React, { useState, useEffect } from 'react'
import Topbar from '../../components/common/Topbar';
import './ViewEventHistory.css';
import SideMenuBarOrganizer from '../../components/common/SideMenuBar/SideMenuBarOrganizer';
import { Routes, Route } from 'react-router';
import OrganizerDashboard from './OrganizerDashboard';
import ViewEvents from './ViewEvents';
import CreateEvent from './CreateEvent';
import OrganizerComplaint from './OrganizerComplaint';
import OrganizerProfile from './OrganizerProfile';
import SearchArtist from './SearchArtist';
import ViewArtist from './ViewArtist';
import MakeArtistRequest from './MakeArtistRequest';
import OrganizerEventDashboard from './OrganizerEventDashboard';
import SearchBand from './SearchBand'

function ViewEventHistory() {


    const [historyevents, setHistoryevents] = useState([]);

    const orgid = 1;

    const extractloc = (location) => {

        const parts = location.split(',');
        const placeName = parts[0];
        const town = parts[parts.length - 2];
        return `${town}`;
    }

    useEffect(() => {
        fetch(`http://localhost:8080/event/viewEventHistory/${orgid}`)
            .then(res => res.json())
            .then((result) => {
                setHistoryevents(result);
                console.log(result);
            }
            )
    }, [])


    return (

        <>
            <SideMenuBarOrganizer>
                <div className='view-event-history-container'>
                    <Topbar customProp="Event History" />

                    <div className='filter-box-container'>

                        <div class="event-filter-box">
                            <label class="event-filter-label" for="event-location">Event Location:</label>
                            <select class="form-select" id="event-location">
                                <option value="all">All Districts</option>
                                <option value="Galle">Galle</option>
                                <option value="Mathara">Mathara</option>
                                <option value="Colombo">Colombo</option>
                            </select>
                        </div>

                        <div class="event-filter-box">
                            <label class="event-filter-label" for="event-type">Event Type:</label>
                            <select class="form-select" id="event-type">
                                <option value="all">All Types</option>
                                <option value="Musical Show">Musical Show</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Party">Party</option>
                            </select>
                        </div>

                        <div class="event-filter-box">
                            <label class="event-filter-label" for="event-dates">From:</label>
                            <input type="date" class="form-date" id="event-date1" ></input>
                        </div>

                        <div class="event-filter-box">
                            <label class="event-filter-label" for="event-dates">To:</label>
                            <input type="date" class="form-date" id="event-date2" ></input>
                        </div>

                        <div class="event-filter-box ">
                            <button class="filter-button">Filter</button>
                        </div>
                    </div>
                    <div className='hist-table d-flex flex-column '>

                        <div className='title-row history-table-data-row d-flex mb-4'>
                            <div className='event-name'>Event Name</div>
                            <div className='event-type'>Event Type</div>
                            <div className='event-location'>Location</div>
                            <div className='event-date'>Date</div>
                        </div>

                        {historyevents.map(event => (

                            <div className='history-data-row history-table-data-row d-flex'  key={event.eventid}>
                                <div className='event-name'>{event.event_name}</div>
                                <div className='event-type'>{event.event_type}</div>
                                <div className='event-location'>{extractloc(event.location)}</div>
                                <div className='event-date'>{event.date}</div>
                            </div>
                        ))}

                        {/* <div className='history-data-row history-table-data-row d-flex'>
                            <div className='event-name'>Ameesha's Wedding</div>
                            <div className='event-type'>Wedding</div>
                            <div className='event-location'>Hambanthots</div>
                            <div className='event-date'>2023/08/14</div>
                        </div>

                        <div className='history-data-row history-table-data-row d-flex'>
                            <div className='event-name'>UCSC Freshers Night</div>
                            <div className='event-type'> Musical Show</div>
                            <div className='event-location'>Colombo</div>
                            <div className='event-date'>2023/07/10</div>
                        </div>

                        <div className='history-data-row history-table-data-row d-flex'>
                            <div className='event-name'>Nadagama</div>
                            <div className='event-type'>Musical Show</div>
                            <div className='event-location'>Galle</div>
                            <div className='event-date'>2023/01/09</div>
                        </div>
                        <div className='history-data-row history-table-data-row d-flex'>
                            <div className='event-name'>Aluth Kalawak</div>
                            <div className='event-type'>Musical Show</div>
                            <div className='event-location'>Mathara</div>
                            <div className='event-date'>2023/03/19</div>
                        </div>
                        <div className='history-data-row history-table-data-row d-flex'>
                            <div className='event-name'>Rap Sajje</div>
                            <div className='event-type'>Musical Show</div>
                            <div className='event-location'>Dabulla</div>
                            <div className='event-date'>2023/05/11</div>
                        </div> */}

                    </div>


                </div>

                <Routes>
                    <Route path='/organizer/dashboard' element={<OrganizerDashboard />}></Route>
                    <Route path='/organizer/event' element={<ViewEvents />}></Route>
                    <Route path='/organizer/event/eventdashboard' element={<OrganizerEventDashboard />}></Route>
                    <Route path='/organizer/event/CreateEvent' element={<CreateEvent />}></Route>
                    <Route path='/organizer/complaint' element={<OrganizerComplaint />}></Route>
                    <Route path='/organizer/profile' element={<OrganizerProfile />}></Route>
                    <Route path='/organizer/searchartist' element={<SearchArtist />} />
                    <Route path='/organizer/searchartist/viewartist' element={<ViewArtist />} />
                    <Route path='/organizer/searchartist/viewartist/makeartistrequest' element={<MakeArtistRequest />} />
                    <Route path='/organizer/searchband' element={<SearchBand />} />
                </Routes>
            </SideMenuBarOrganizer>
        </>
    )
}

export default ViewEventHistory;
