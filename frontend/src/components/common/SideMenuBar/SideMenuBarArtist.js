import React, { useRef, useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'
import logoImage from '../../../assets/icons/logosidebar.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidTimeFive } from "react-icons/bi";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidFile } from "react-icons/bi";
import { BiSolidReport } from "react-icons/bi";




const SideMenuBarArtist = ({children}) => {
    const [isExpanded, setExpandState] = useState(false);

    // var url = window.location.href
    // var key =url.split("/")[4]

    

    // const menuItems = [
    //     {
    //         path:"http://localhost:3000/artist/Dashboard",
    //         text: "Dashboard",
    //         tag: "Dashboard",
    //         active: "false",
           
    //     },
    //     {
    //         path:"/artist/Event",
    //         text: "Events",
    //         tag: "Events",
    //         active: "false",
            
    //     },
    //     {
    //         path:"/artistDashboard",
    //         text: "Pending Requests",
    //         tag: "PendingRequests",
    //         active: "false",
            
    //     },
    //     {
    //         path:"/artistDashboard",
    //         text: "My Feed",
    //         tag: "MyFeed",
    //         active: "false",
           
    //     },
    //     {
    //         path:"/artistDashboard",
    //         text: "Request Log",
    //         tag: "RequestLog",
    //         active: "false",
            
    //     },
    //     {
    //         path:"/artistDashboard",
    //         text: "Reports",
    //         tag: "Reports",
    //         active: "false",
            
    //     },
    // ];

    // menuItems.map((item,index)=>{
    //     if(item.tag === key){
    //         item.active = true
    //     }
    //     else{
    //         item.active = false
    //     }
    // })




    return (
        <div className="full-container">
            <div
                className={
                    isExpanded
                        ? "side-menu-container vh-100 "
                        : "side-menu-container side-menu-container-NX vh-100"
                }

            style={{ fontFamily: 'MyCustomFont' ,width:isExpanded ? "300px":"85px" }} >
            <div className="menu-upper">
                <div className="menu-heading">
                    {isExpanded && (
                        <div className="menu-brand">
                            <img src={logoImage} alt="" srcSet="" />
                        </div>
                    )}

                        <div className={isExpanded ? "sideIconDiv cursor-pointer" : "sideIconDiv-NX cursor-pointer"}>
                            <BiMenu onClick={() => setExpandState(!isExpanded)} className={isExpanded ? "menubar-noncollapse-icon position-absolute  " : "menubar-collapse-icon position-absolute "} />

                        </div>
                        </div>

                    {/* <div className={isExpanded ? "sideIconDiv" : "sideIconDiv-NX"}>
                        <button
                            className={
                                isExpanded ? "sideIcon sideIcon-in" : "sideIcon sideIcon-out"
                            }
                            onClick={() => {setExpandState(!isExpanded)}}
                         id="navBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div> */}

                    <div className="row">
                        <NavLink to="/">
                            <div className="menu-profilePhoto col d-flex justify-content-center">
                                <img className={isExpanded ? "menu-item-profilePhoto img-fluid my-4" : "menu-item-profilePhoto-NX"} src={profilePhoto} alt="Profile" srcSet="" width="130px" height="130px" />
                                {isExpanded && (
                                    <div className="middle-pp-box">
                                        <div className="middle-pp-text">Go to Profile</div>
                                    </div>
                                )}

                            </div>
                        </NavLink>

                    </div>


                    <div className="row">
                        {isExpanded && (
                            <div className="menu-profilePName col d-flex justify-content-center">
                                <p >Tehani Imara</p>
                            </div>
                        )}
                    </div>

                    <ul className={isExpanded ? "nav nav-pills flex-column px-0 mt-3" : "nav nav-pills flex-column px-0 mt-4"}>
                        <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                            <NavLink to="/artist/Dashboard" activeclassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                                <BiSolidDashboard className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                                {isExpanded && (
                                    <span className="menu_link_name fs-6 ">Dashboard</span>
                                )}</NavLink>
                            {!isExpanded && (
                                <span className="tooltip">Dashboard</span>
                            )}

                        </li>

                        <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                            <NavLink to="/artist/Event" activeclassName="active" className={isExpanded ? "nav-link d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link d-flex align-items-center text-decoration-none"}>
                                <BiSolidCalendar className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                                {isExpanded && (
                                    <span className="menu_link_name fs-6 ">Events</span>
                                )}</NavLink>
                            {!isExpanded && (
                                <span className="tooltip">Events</span>
                            )}

                        </li>

                        <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                            <NavLink to="/artist/PendingRequests" activeclassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                                <BiSolidTimeFive className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                                {isExpanded && (
                                    <span className="menu_link_name fs-6 ">Pending Requests</span>
                                )}</NavLink>
                            {!isExpanded && (
                                <span className="tooltip">Pending Requests</span>
                            )}

                        </li>
                        <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                            <NavLink to="/artist/MyFeed" activeclassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                                <BiSolidPhotoAlbum className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                                {isExpanded && (
                                    <span className="menu_link_name fs-6 ">My Feed</span>
                                )}</NavLink>
                            {!isExpanded && (
                                <span className="tooltip">My Feed</span>
                            )}

                        </li>

                        <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                            <NavLink to="/artist/MyFeed" activeclassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                                <BiSolidFile className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                                {isExpanded && (
                                    <span className="menu_link_name fs-6 ">Requests Log</span>
                                )}</NavLink>
                            {!isExpanded && (
                                <span className="tooltip">Requests Log</span>
                            )}

                        </li>
                        <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                            <NavLink to="/artist/Reports" activeclassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                                <BiSolidReport className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                                {isExpanded && (
                                    <span className="menu_link_name fs-6 ">Reports</span>
                                )}</NavLink>
                            {!isExpanded && (
                                <span className="tooltip">Reports</span>
                            )}

                        </li>
                    </ul>


                
                    </div>
         </div>

            <main className={isExpanded ? "mainContainer" : "mainContainer-NX"}>{children}</main>
        
        
        </div>
        
        
    )};

export default SideMenuBarArtist;

