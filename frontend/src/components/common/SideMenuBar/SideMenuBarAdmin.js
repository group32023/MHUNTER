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


const SideMenuBarAdmin = () => {
    const [isExpanded, setExpandState] = useState(false);


    return (
        <div
            className={
                isExpanded
                    ? "side-menu-container d-flex flex-column justify-content-between text-white py-6 px-14 vh-100"
                    : "side-menu-container side-menu-container-NX d-flex flex-column justify-content-between py-6 px-14 text-white p-4 vh-100"
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
                        <BiMenu onClick={() => setExpandState(!isExpanded)} />

                    </div>

                </div>

                <div className="row">
                    <div className="menu-profilePhoto col d-flex justify-content-center">
                        <img className={isExpanded ? "menu-item-profilePhoto img-fluid my-4" : "menu-item-profilePhoto-NX"} src={profilePhoto} alt="Profile" srcSet="" width="130px" height="130px" />
                    </div>
                </div>


                <div className="row">
                    {isExpanded && (
                        <div className="menu-profilePName col d-flex justify-content-center">
                            <p >Tehani Imara</p>
                        </div>
                    )}
                </div>

                <ul className="nav nav-pills flex-column px-0">
                    <li className="nav-item p-1">
                        <Link to="/" className="nav-link text-white">
                            <BiSolidDashboard />
                            {isExpanded && (
                                <span className="fs-5">Dashboard</span>
                            )}</Link>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li className="nav-item p-1">
                        <Link to="/" className="nav-link text-white">
                            <BiSolidUserPlus />
                            {isExpanded && (
                                <span className="fs-5">Dashboard</span>
                            )}</Link>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li className="nav-item p-1">
                        <Link to="/" className="nav-link text-white">
                            <BiSolidUserDetail />
                            {isExpanded && (
                                <span className="fs-5">Dashboard</span>
                            )}</Link>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li className="nav-item p-1">
                        <Link to="/" className="nav-link text-white">
                            <BiSolidCalendar />
                            {isExpanded && (
                                <span className="fs-5">Dashboard</span>
                            )}</Link>
                        <span className="tooltip">Dashboard</span>
                    </li>
                </ul>


            </div>
        </div>

    );
};

export default SideMenuBarAdmin;