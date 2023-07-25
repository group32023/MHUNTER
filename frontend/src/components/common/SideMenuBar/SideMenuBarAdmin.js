import React, { useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'
import logoImage from '../../../assets/icons/logosidebar.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidUserPlus } from "react-icons/bi";
import { BiSolidUserDetail } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidReport } from "react-icons/bi";
import { BiSolidCog } from "react-icons/bi";

function SideMenuBarAdmin() {
    const [isExpanded, setExpandState] = useState(false);


    return (
        <div
            className={
                isExpanded
                    ? "side-menu-container vh-100 "
                    : "side-menu-container side-menu-container-NX vh-100"
            }

            style={{ fontFamily: 'MyCustomFont' }}
        >
            <div className="menu-upper">
                <div className="menu-heading d-flex align-items-center">
                    {isExpanded && (
                        <div className="menu-brand">
                            <img src={logoImage} alt="" srcSet="" />
                        </div>
                    )}

                    <div className={isExpanded ? "sideIconDiv cursor-pointer" : "sideIconDiv-NX cursor-pointer"}>
                        <BiMenu onClick={() => setExpandState(!isExpanded)} className={isExpanded ? "menubar-noncollapse-icon position-absolute text-white " : "menubar-collapse-icon position-absolute text-white"} />

                    </div>

                </div>

                <div className="row">
                    <div className="menu-profilePhoto col d-flex justify-content-center">
                        <img className={isExpanded ? "menu-item-profilePhoto img-fluid my-4" : "menu-item-profilePhoto-NX"} src={profilePhoto} alt="Profile" srcSet="" width="130px" height="130px" />
                    </div>
                </div>


                <div className="row">
                    {isExpanded && (
                        <div className="menu-profilePName col d-flex justify-content-center text-white">
                            <p >Tehani Imara</p>
                        </div>
                    )}
                </div>

                <ul className={isExpanded ? "nav nav-pills flex-column px-0 mt-3" : "nav nav-pills flex-column px-0 mt-4"}>
                    <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                        <Link to="/" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                            <BiSolidDashboard className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                            {isExpanded && (
                                <span className="menu_link_name fs-6 ">Dashboard</span>
                            )}</Link>
                        {!isExpanded && (
                            <span className="tooltip">Dashboard</span>
                        )}

                    </li>
                    <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                        <Link to="/" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                            <BiSolidUserPlus className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                            {isExpanded && (
                                <span className="menu_link_name fs-6 ">Registration</span>
                            )}</Link>
                        {!isExpanded && (
                            <span className="tooltip">Registration</span>
                        )}

                    </li>
                    <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                        <Link to="/" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                            <BiSolidUserDetail className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                            {isExpanded && (
                                <span className="menu_link_name fs-6 ">User Details</span>
                            )}</Link>
                        {!isExpanded && (
                            <span className="tooltip">User Details</span>
                        )}

                    </li>
                    <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                        <Link to="/" className={isExpanded ? "nav-link d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link d-flex align-items-center text-decoration-none"}>
                            <BiSolidCalendar className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                            {isExpanded && (
                                <span className="menu_link_name fs-6 ">Events</span>
                            )}</Link>
                        {!isExpanded && (
                            <span className="tooltip">Events</span>
                        )}

                    </li>
                    <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                        <Link to="/" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
                            <BiSolidReport className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                            {isExpanded && (
                                <span className="menu_link_name fs-6 ">Reports</span>
                            )}</Link>
                        {!isExpanded && (
                            <span className="tooltip">Reports</span>
                        )}

                    </li>
                    <li className={isExpanded ? "nav-item p-1" : "nav-item"}>
                        <Link to="/" className={isExpanded ? "nav-link d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link d-flex align-items-center text-decoration-none"}>
                            <BiSolidCog className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
                            {isExpanded && (
                                <span className="menu_link_name fs-6">Settings</span>
                            )}</Link>
                        {!isExpanded && (
                            <span className="tooltip">Settings</span>
                        )}

                    </li>
                </ul>


            </div>
        </div>

    );
};

export default SideMenuBarAdmin;

