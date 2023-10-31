import React, { useState, useEffect } from 'react'
import SideMenuBarAdmin from '../../components/common/SideMenuBar/SideMenuBarAdmin';
import '../../assets/css/admin/adminDashboard.css'
import Calendar from 'react-calendar';
import InfiniteScroll from 'react-infinite-scroll-component';
//import { useLocation } from 'react-router-dom';

import AdminRegistration from './AdminRegistration';
import ProofCheck from './ProofCheck';
import AllUserDetails from './AllUserDetails';
import ViewUserDetails from './ViewUserDetails';
import AdminReport from './AdminReport';
import AdminSettings from './AdminSettings';

import { Link, Routes, Route } from 'react-router-dom';
import Topbar from '../../components/common/Topbar';

import { BiSolidUserDetail } from "react-icons/bi";

import { BiSolidCalendarStar } from "react-icons/bi";

import EventBanner1 from '../../assets/images/eventbanner1.jpeg'
import EventBanner2 from '../../assets/images/eventbanner2.jpg'
import EventBanner3 from '../../assets/images/eventbanner3.jpg'

import { BsMusicNoteList } from "react-icons/bs";
import {BiSolidUserPlus} from "react-icons/bi";

import ReactApexChart from 'react-apexcharts';



export default function AdminDashboard() {

  const [banddataSource, setBandDataSource] = useState(Array.from({length:10}));
  const [artistdataSource, setArtistDataSource] = useState(Array.from({length:10}));
  const[date, setDate] = useState(new Date());

  useEffect(() => {
    fetchData().then((banddata) => {
      setBandDataSource(banddata);
    });
    fetchDataA().then((artistdata) => {
      setArtistDataSource(artistdata);
    });
  }, []);

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const banddata = ['FlashBack', 'Wayo', 'Jaya Sri', 'Marians', 'Sunflower', 'Gypsies', 'Dharmarathna Brother', 'Three Sisters Sri Lanka', 'La Bambas Sri Lanka', 'The Moonstones Sri Lanka'];
        resolve(banddata);

      }, 1000);
    })}
    const fetchDataA = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const artistdata = ['Dhanith Sri', 'Dinesh Gamage', 'Supun Perera', 'Methun SK', 'Ridma Werawardhne', 'BnS', 'Lahiru Perera', 'Umara', 'Shashika Nisansala', 'Theekshana Anuradha'];
          resolve(artistdata);
        }, 1000);
      })}

  const onChange = date => {
    setDate(date);
  }

  const seriesData = [{
    name: "Monthly Income",
    data: [100000, 41000, 35000, 51000, 49000, 62000, 69000, 91000, 148000, 70000, 90000,67000]
  }];

  const optionsData = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Annual Income',
      align: 'center'
      
    },
    grid: {
      row: {
        colors: ['#99ccff', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
    }
  };

  return (
    <>
    <SideMenuBarAdmin>
    <Topbar/>
    <div className='header-admin'>
      <div className='header-title'>
        <h1>Dashboard</h1>
        {/*<p className='text-center text-white'>User ID: {userId}</p>*/}
      </div>
    </div>
 
    <div className="container ">
      <div className="row">
        <div className="col-sm-4 ">
          <div className='top-band-list bgimage-admin'>
            <h3 className='text-center' style={{color:'#ff8000'}}>Top 10 Bands</h3>
            <InfiniteScroll dataLength={banddataSource.length} className='text-center admin-list'>
              {banddataSource.map((item, index)=>{
                return<div key={index}> {item} </div>
              })}
            </InfiniteScroll>
          </div>
        </div>
        <div className="col-sm-4">
          <div className='top-band-list bgimage-admin'>
            <h3 className='text-center' style={{color:'#00ff00'}}>Top 10 Artists</h3>
            <InfiniteScroll dataLength={artistdataSource.length} className='text-center admin-list'>
              {artistdataSource.map((item, index)=>{
                return<div key={index}> {item} </div>
              })}
            </InfiniteScroll>
          </div>
        </div>
        <div className="col-sm-4">
          <div className='admin-calendar text-center'>
            <Calendar onChange={onChange} value={date} />
          </div>
        </div>
      </div>
    </div>

    <div className="row row-userdetails" >
        <div className="col-sm-3">
            <div className="card card-userdetails">
            <div className="card-body text-center">
              <span className='icon-name-container' style={{color:'#00ff00'}}><BiSolidUserDetail className='icon-dashboard'/><h4 className="card-title text-light" >Artists 10</h4></span>
            </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card card-userdetails">
            <div className="card-body text-center">
            <span className='icon-name-container' style={{color:'#bf00ff'}}  ><BiSolidUserDetail className='icon-dashboard'/><h4 className="card-title text-light">Bands 15</h4></span>
            </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card card-userdetails">
            <div className="card-body text-center">
            <span className='icon-name-container'style={{color:'#ff8000'}}><BiSolidUserDetail className='icon-dashboard'/><h4 className="card-title text-light">Organizer 6</h4></span>
            </div>
            </div>
        </div>
        <div className='col-sm-3'>
        <div className="card card-userdetails">
        
          <div className="card-body text-center">
            <span className='icon-name-container' style={{color:'#0099ff'}}><BiSolidUserPlus className='icon-dashboard'/><h4 className="card-title text-light">Pendding Request 5</h4></span>
          </div>
        </div>
      </div>
    </div>

    <div className='row' style={{display:'flex', justifyContent:'center'}}>
      <div className='col-sm-8'>
        <div className='UpcominEventsDiv '>
          <div className="p-3">
            <p className='fs-5' style={{ fontFamily: 'MyCustomFont1' , color:'white'}}>Upcoming Events</p>
            <hr></hr>
            <div className="UpcomingTableDiv mt-4">
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
                    <span className='row eventLocation' style={{color:'white'}}>Oba Nisa live in concert: A vibrant musical journey for university students, featuring a fusion of genres and unforgettable performances that celebrate youth.</span>
                    <div className='row eventDate'>
                      <BiSolidCalendarStar className='fs-5' style={{ color: 'white' }} />
                      <span  style={{ color: 'white' }}  >2023-10-05</span>
                    </div>

                  </div>
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
                    <span className='row eventLocation' style={{color:'white'}}>Daddy Band delivers an electrifying live concert experience, blending dynamic rock melodies with captivating stage presence.</span>
                    <div className='row eventDate'>
                      <BiSolidCalendarStar className='fs-5' style={{ color: 'white' }} />
                      <span  style={{ color: 'white' }} >2023-11-23</span>
                    </div>

                  </div>

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
                    <span className='row eventLocation' style={{ color: 'white' }} >BNS takes the stage in an unforgettable live concert, creating an immersive musical experience that resonates with fans of all ages.</span>
                    <div className='row eventDate'>
                      <BiSolidCalendarStar className='fs-5' style={{ color: 'white' }} />
                      <span style={{ color: 'white' }} >2023-11-25</span>
                    </div>

                  </div>

                </div>
                <hr className='mt-3 '></hr>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container' style={{ marginTop: '3%',
     backgroundColor: '#99b3e6', 
     padding:'40px', 
     display:'flex', justifyContent:'center',
      borderRadius:'10px',
      width:'60%'}}>
        <ReactApexChart options={optionsData} series={seriesData} type="line" height={350} width={700} />
      </div>





    <Routes>
          
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
