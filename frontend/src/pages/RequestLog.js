/* eslint-disable react/jsx-no-undef */
import React,{useState, useEffect,useRef} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
//import '../assets/css/artistDashboard.css'
import '../assets/css/requestslog.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';
import eventType from '../assets/images/eventtype.png'
import Pagination from '../components/common/Pagination';
import notification from '../assets/images/notification.png'
import home from '../assets/images/home-button.png'
import logout from '../assets/images/logout.png'
import kpop from '../assets/images/kpop.png'
import Button from 'react-bootstrap/Button';
import empty from '../assets/images/empty(1).png'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Topbar from '../components/common/Topbar';



export default function ArtistPendingRequests() {

  const [expand,setExpandedSideBar] = useState(true)

  const [eventList, setEventList] = useState([]);
  const [currentPage, setCurrentPage] =useState(1);
  const [linePerPage, setLinePerPage] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [id1,setId1]=useState(0)
  const [cancelState,setCancelState]=useState(false)
  const [reason,setReason]=useState(" ")
  const BASE_URL = "http://localhost:8080";


  const handleShowModal = (id) => {
      setShowModal(true);
      setId1(id)
  };
  const handleCloseModalCancelRequest=()=>{
    setShowModal(false);
    setCancelState(true)

  }

  const handleCloseModal = (id) => {
        setShowModal(false);
  };
  const handleCloseModalCancelRequest1=()=>{
    setCancelState(false)
    console.log(reason);

  }

  const handleCloseModal1 = () => {
    setCancelState(false)

  };

  useEffect(() => {
    const mmId = localStorage.getItem('mmid');
    // Fetch the data from the Java backend
    if(mmId){
    const getPendingRequest = async () =>{
      const res = await fetch(`http://localhost:8080/requestsLog/viewLogs/${mmId}`)

      const data = await res.json();
        setEventList(data);
      };
     getPendingRequest();

    }

  }, []);
  

  // const lastLineIndex = currentPage * linePerPage;
  // const firstLineIndex = lastLineIndex - linePerPage;
  // const eventList1 = eventList.slice(firstLineIndex,lastLineIndex)

  let navigate = useNavigate();

  const Cancel=(id)=>{
    navigate(`/`);

  }

  

  const divCount = eventList.length;
  const divElements = [];
  console.log(eventList)


  for (let i = 0; i < divCount; i++) {
    
    divElements.push(<div key={i} className="requestContainerlog">
      <img src={`${BASE_URL}/postData/uploads/image/${eventList[i]["image"]}`} className="profilelog"></img>
      <div className="eventDetailslog">
        <h5>{eventList[i]['organizerName']}</h5>
       { console.log(eventList[i]['organizerName'])}
        <p class="eventType"><FontAwesomeIcon icon={faCalendarDays} id="EventIconPendingRequest"/>{eventList[i]['eventName']}</p>
      <p class="eventDate"><FontAwesomeIcon icon={faCalendarDays} id="CalenderIconPendingRequest"/>{eventList[i]['date']}</p>
        <p class="venue">{eventList[i]['requestState']}</p>
      </div>
    
      <button className="agreementBtn">Agreement</button>
   
      <button className="cancelBtnForRequestLog" onClick={()=>handleShowModal(eventList[i]['eventId'])}>Cancel</button>
    
       </div>

  );
   
  }

  const handlePageClick = (data)=>{
    console.log(data.selected);
  }

  


  return (

   
    
    <div >
    <SideMenuBarArtist >
  
    
            <p className='headerDashboard'>Request Log</p>
            <Topbar></Topbar>

     
      
        
        {divElements}

        <div className='emptyMessageForRequestLog'>
          {(divElements.length ===0)?<><img src={empty} className='empty-img'></img><span className='emptyContent-report'>it's empty in here.</span></>:undefined}

          </div>

        {showModal && (
                                    <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                        <div className="complaint-add-success-popup-content">
                                           
                                            <p className="complaint-add-success-para_for_request_acception">Do You Want to Cancel this Request?</p>
                                            <Button className='RequestacceptBtn' onClick={handleCloseModalCancelRequest}>
                                        Yes
                                    </Button>
                                            <Button className='RequestCloseBtn' onClick={handleCloseModal}>
                                        Exit
                                    </Button>
                                        </div>


                                    </div>
                                )}


       {cancelState && (
                                        <div className="complaint-add-success-popup blur-background" style={{ fontFamily: 'MyCustomFont1' }}>

                                            <div className="complaint-add-success-popup-content">
                                              
                                                <p className="complaint-add-success-para_for_request_cancel">Enter Reason  </p>
                                                <input type='text' className='reasonforCancalation' value={reason} onChange={(e)=>setReason((e.target.value))}/>
                                                <Link to={'/organizer/test-button'} className='reasonSubmit' onClick={handleCloseModalCancelRequest1}>
                                            Submit
                                        </Link>
                                                <Button className='reasonCancel' onClick={handleCloseModal1}>
                                            Cancel
                                        </Button>
                                            </div>


                                        </div>
                                    )}
                
      
      </SideMenuBarArtist>
    </div>
  )
}

