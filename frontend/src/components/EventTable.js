import React from 'react'
import eventimage from '../assets/images/slide_8.jpg';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faLocationDot,faList} from '@fortawesome/free-solid-svg-icons'

import '../assets/css/eventTable.css'

export default function 
() {
  return (
    <div>
       
        <div>
             
                <div className='eventTablecontainer'>

                    <lable className="eventList">EVENTS LIST</lable>
                      <Table className='table table-hover table-dark' id="tableEvent" >
                        <tbody>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                          <tr>
                                <td>14 JULY</td>
                                <td><img src={eventimage} id="eventImage"></img></td>
                                <td>BEZA</td>
                                <td><FontAwesomeIcon icon={faLocationDot} id="LocationIcon"/>MATARA</td>
                                <td>17.00</td>
                          </tr>
                        </tbody>
                      </Table>
                  

                </div>

            </div>
            

      </div>
    
  )
}
