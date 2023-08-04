import React,{useState, useEffect,useRef} from 'react';
import {Table} from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
import SideMenuBarArtist from '../components/common/SideMenuBar/SideMenuBarArtist'
import '../assets/css/artistReport.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import profileImage from '../assets/images/profilePhoto.jpeg';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faFacebook,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function ArtistGenerateReports() {

   

  

   

    return (
  
      
      <div className='artistContainer'>
          <div className='artistSideBar'>
              <SideMenuBarArtist></SideMenuBarArtist>
              <h3 className='headerDashboard'>Reports</h3>
              <div className='notificationBg'></div>
              <div className='homeBg'></div>
              <div className='logoutBg'></div>
          </div>
  
          <MDBBtn className="dateFrom"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Date From</MDBBtn> 
          <MDBBtn className="Today"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Today</MDBBtn> 
          <MDBBtn className="eventTypeSelection"><FontAwesomeIcon icon={faCalendarDays} id="CalenderReport"/>Event Type</MDBBtn>
          

          <div className='reportContainer'>

          <Table className='table table-hover table-dark table-condensed table-resposive' id="ReportTable" >
                        <thead>
                          <th>Event Name</th>
                          <th>Organizer Name</th>
                          <th>Event Type</th>
                          <th>Town</th>
                          <th>Date</th>
                          <th>Income</th>
                        </thead>

                        <tbody>
                          <tr>
                                <td>Benza</td>
                                <td>W.R.A.Kavinda Pathirana</td>
                                <td>Birthday Party</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>14 JULY 2023</td>
                                <td>17000.00</td>
                          </tr>
                       
                         
                          
                         
                          
                        </tbody>
                      </Table>
                  
                
          <MDBBtn className="download">Download</MDBBtn>
          </div>
          
          
          
      </div>
    )
}

