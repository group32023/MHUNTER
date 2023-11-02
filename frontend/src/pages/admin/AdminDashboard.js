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
import axios from 'axios';



export default function AdminDashboard() {
  const [artistDataSource, setArtistDataSource] = useState([]);

  useEffect(() => {
    fetchDataA().then((artistData) => {
      setArtistDataSource(artistData);
    });
  }, []);

  const fetchDataA = () => {
    return axios
      .get('http://localhost:8080/artist/top10') 
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching data from the server:', error);
        return [];
      });
  };

  const [banddataSource, setBandDataSource] = useState(Array.from({length:10}));
  //const [artistdataSource, setArtistDataSource] = useState(Array.from({length:10}));
  const[date, setDate] = useState(new Date());

  useEffect(() => {
    fetchData().then((banddata) => {
      setBandDataSource(banddata);
    });
  }, []);

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const banddata = ['FlashBack', 'Wayo', 'Jaya Sri', 'Marians', 'Sunflower'];
        resolve(banddata);

      }, 1000);
    })}

  const onChange = date => {
    setDate(date);
  }
/*---------------------------------------------uptocome-------------------------------------------------------------*/
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetchDataUptocome();
  }, []);

  const fetchDataUptocome = async () => {
    try {
      const response = await axios.get('http://localhost:8080/event/upcomingEvents');
      const upcomingEventsData = response.data;
      setUpcomingEvents(upcomingEventsData);
    } catch (error) {
      console.error('Error fetching data from the server:', error);
    }
  };
/*------------------------------------------------------chart-----------------------------------------------*/
const [reportData, setReportData] = useState([]);

useEffect(() => {
  fetchReportData();
}, []);

const fetchReportData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/getAdminReportData');
    const reportData = response.data;
    setReportData(reportData);
  } catch (error) {
    console.error('Error fetching data from the server:', error);
  }
};

 /* const seriesData = [{
    name: "Monthly Income",
    data: [100000, 41000, 35000, 51000, 49000, 62000, 69000, 91000, 148000, 70000, 90000,67000]
  }];*/

  const chartData = {
    series: reportData.map((dataPoint) => dataPoint[1]),
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Income of the Events',
        align: 'center',
      },
      grid: {
        row: {
          colors: ['#99ccff', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: reportData.map((dataPoint) => dataPoint[0]),
      },
    },
  };
/*------------------------------------------------count Artist and Band-----------------------------------------------------*/
 /* const optionsData = {
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
  };*/

  const [artistCount, setArtistCount] = useState(0);
  const [bandCount, setBandCount] = useState(0);

  useEffect(() => {
    fetchDataABC();
  }, []);

  const fetchDataABC = async () => {
    try {
      const response = await axios.get('http://localhost:8080/countBandAndArtist'); 
      response.data.forEach(item => {
        if (item[0] === 'Artist') {
          setArtistCount(item[1]);
        } else if (item[0] === 'Band') {
          setBandCount(item[1]);
        }
      });
    } catch (error) {
      console.error('Error fetching data from the server:', error);
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
            <InfiniteScroll dataLength={artistDataSource.length} className='text-center admin-list'>
              {artistDataSource.map((item, index)=>{
                return<div key={index}> {item} </div>
              })}
            </InfiniteScroll>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="admin-calendar text-center">
        <Calendar
          onChange={onChange}
          value={date}
          tileContent={({ date, view }) =>
            view === 'month' &&
            upcomingEvents.some(
              (event) =>
                new Date(event.date).toDateString() === date.toDateString()
            ) ? (
              <div style={{ backgroundColor: 'red' }}>•</div>
            ) : null
          }
        />
      </div>
        </div>
      </div>
    </div>

    <div className="row row-userdetails" >
        <div className="col-sm-3">
            <div className="card card-userdetails">
            <div className="card-body text-center">
              <span className='icon-name-container' style={{color:'#00ff00'}}><BiSolidUserDetail className='icon-dashboard'/><h4 className="card-title text-light" >Artists  {artistCount}</h4></span>
            </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card card-userdetails">
            <div className="card-body text-center">
            <span className='icon-name-container' style={{color:'#bf00ff'}}  ><BiSolidUserDetail className='icon-dashboard'/><h4 className="card-title text-light">Bands {bandCount}</h4></span>
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
            {upcomingEvents.map((event, index) => (
              <div className="row tableUpcomingContent" key={index}>
                <div>
                </div>
                <div className='upcomingDivEventImage '>
                  <img className='' alt='' src={`http://localhost:8080/postData/uploads/image/${event.image}.jpg`} width='200px' height='110px'></img>
                </div>

                <div className='upcomingDivEventData'>
                  <span className='row eventTitle'>{event.event_name}</span>
                  <div className='row eventDataRow1'>
                    <span className='row eventLocation'>{event.location}</span>
                    <span className='row eventLocation' style={{color:'white'}}>{event.description}</span>
                    <div className='row eventDate'>
                      <BiSolidCalendarStar className='fs-5' style={{ color: 'white' }} />
                      <span  style={{ color: 'white' }}  >{event.date}</span>
                    </div>

                  </div>
                </div>
                <hr className='mt-3 '></hr>

              </div>
               ))}

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
         <ReactApexChart
      options={chartData.options}
      series={[{ data: chartData.series }]}
      type="line"
      height={350}
      width={700}
    />
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
