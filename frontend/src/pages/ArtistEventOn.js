import React,{useState, useEffect,useRef} from 'react';
import {Button, Table} from 'react-bootstrap';
import { useNavigate,useParams} from 'react-router-dom';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/priorbooking.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useReactToPrint } from 'react-to-print'
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'
import empty from '../assets/images/empty(1).png'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Topbar from '../components/common/Topbar';



export default function ArtistEventOn() {

  const [expand,setExpandedSideBar] = useState(true)
  const { mmid, date, eventId } = useParams();
  const componentPDF = useRef();
  const [eventList, setEventList] = useState([]);
  const [page,setPage] = useState(1);
  const noOfLinePerPage = 4;

  useEffect(() => {
    const mmId = localStorage.getItem('mmid');
    // Fetch the data from the Java backend
    if(mmId){
    fetch(`http://localhost:8080/requestMusicMember/eventsOn/${mmId}/${date}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
     
      .then((data) => {
        console.log(data);
        setEventList(data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
      console.log(eventList);
    }

  }, []);


  let navigate = useNavigate();


   
  
  const divCount = eventList.length;
  const divElements = [];
 

  // Using a for loop to generate the <div> tags
  for (let i = 0; i < divCount; i++) {

    //var eventID=eventList[i]['eventid'];
    
    divElements.push(
      <tr>
      <td>{eventList[i]['eventName']}</td>
      <td>{eventList[i]['organizerName']}</td>
      <td>{eventList[i]['eventType']}</td>
      <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon1"/>{extractloc(eventList[i]['place'])}</td>
      <td>{eventList[i]['crowd']}</td>
 
      
</tr>
  );
   
  }


  const handleChange= (event,value)=>{
    setPage(value)
  }

// setup the pagination
  function setPagination(){
    let noOfLine =1
    let displayedData = []
    if(divElements.length>0){
      if(divElements.length < noOfLinePerPage*page){
        noOfLine = divElements.length
      }
      else{
        noOfLine =  noOfLinePerPage*page
      }
      for (let i = noOfLinePerPage*(page-1); i < noOfLine; i++) {
        displayedData.push(divElements[i]);
        
      }
      return displayedData
    }
    else{
      
      return displayedData 
    }
    
  }


  const load=(id)=>{
    navigate(`/artist/PendingRequestView/${id}`);

  }

  const extractloc = (location) => {

    const parts = location.split(',');
    const placeName = parts[0];
    const town = parts[parts.length - 2];
    const stringPart = town.replace(/\d+/g, '');
    return `${stringPart}`;
}


    return (
  
      <div >
      
         <SideMenuBarArtist>
        <div>
            <p className='headerDashboard'>Pending Requests</p>
            <Topbar></Topbar>
          </div>

          <div className='addressDiv'>
          <h3 className='eventsOnDate'>Events On : {date} </h3>
          
          </div>
        
          <div className='emptyMessageForEventsOn'>
          {(divElements.length ===0)?<><img src={empty} className='empty-img'></img><span className='emptyContent-report'>it's empty in here.</span></>:undefined}

          </div>

            <div className='reportContainer' >
            <div >

              <p>Income</p>
          
             <Table id="PriorBookingTable1" className='table table-hover table-dark table-condensed table-resposive'  >
                        <thead>
                        <tr>
                          <th>Event Name</th>
                          <th>Organizer Name</th>
                          <th>Event Type</th>
                          <th>Town</th>
                          <th>Crowd</th>
                         
                        
                          </tr>
                        </thead>

                        <tbody>
                         
                       
                        {setPagination().map((item) => item)}
                          
                         
                          
                        </tbody>
                      </Table>
                      <div className='artistEventPagination'>
                      <Stack spacing={2}>
                        <Pagination count={(Math.round(divElements.length/noOfLinePerPage))} color="secondary" page={page} onChange={handleChange} />
                      </Stack>
                    </div>
          </div>     
          <Button className="back" onClick={()=>load(eventId)}>Back</Button>
           </div>
          
       
           </SideMenuBarArtist>
      </div>
    )
}

