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


export default function AdminDashboard() {
  //const location = useLocation();
  //const userId = location.state.userId;

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
        const banddata = ['Band 1', 'Band 2', 'Band 3', 'Band 4', 'Band 5', 'Band 6', 'Band 7', 'Band 8', 'Band 9', 'Band 10'];
        resolve(banddata);

      }, 1000);
    })}
    const fetchDataA = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const artistdata = ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4', 'Artist 5', 'Artist 6', 'Artist 7', 'Artist 8', 'Artist 9', 'Artist 10'];
          resolve(artistdata);
        }, 1000);
      })}

  const onChange = date => {
    setDate(date);
  }
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
            <h3 className='text-center'>Top 10 Bands</h3>
            <InfiniteScroll dataLength={banddataSource.length} className='text-center admin-list'>
              {banddataSource.map((item, index)=>{
                return<div key={index}> {item} </div>
              })}
            </InfiniteScroll>
          </div>
        </div>
        <div className="col-sm-4">
          <div className='top-band-list bgimage-admin'>
            <h3 className='text-center'>Top 10 Artists</h3>
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
