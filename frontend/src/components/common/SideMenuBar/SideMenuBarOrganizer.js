import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'
import logoImage from '../../../assets/icons/logosidebar.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { BiSolidCommentError } from "react-icons/bi";
import { BiSolidSearch } from "react-icons/bi";
import React, { useState } from "react";
import {useEffect } from 'react';
import axios from 'axios';

function SideMenuBarOrganizer({ children }) {
	const [isExpanded, setExpandState] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
        const userId = localStorage.getItem('userId');
        
        fetch(`http://localhost:8080/organizer/${userId}`)
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
        })
        .then((data)=>{
            localStorage.setItem("orgid",data['orgId']);
        })
        .catch((error)=>{
            console.log("Error fetching data:", error)
        })

        if (userId) {
            axios.get(`http://localhost:8080/user/user/${userId}`)
                .then(response => {
                    setUser(response.data);
                    // setImage(response.data['imagePath'])
                    // console.log(image)
                })
                .catch(error => {
                    console.error(error);
                    alert(error);
                });
        }
    }, []);
    // console.log("Current user:", user); 

	return (
		<div className="full-container">
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
							<BiMenu onClick={() => setExpandState(!isExpanded)} className={isExpanded ? "menubar-noncollapse-icon position-absolute " : "menubar-collapse-icon position-absolute "} />

						</div>

					</div>

					<div className="row">
						<NavLink to={`/admin/profile/${user?.userId}`}>
							<div className="menu-profilePhoto col d-flex justify-content-center">
								<img className={isExpanded ? "menu-item-profilePhoto img-fluid my-4" : "menu-item-profilePhoto-NX"} src={`http://localhost:8080/postData/uploads/image/${user?.imagePath}`} alt="Profile" srcSet="" width="130px" height="130px" />
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
								 <p >{user?.firstName} {user?.lastName}</p>
							</div>
						)}
					</div>

					<ul className={isExpanded ? "nav nav-pills flex-column px-0 mt-3" : "nav nav-pills flex-column px-0 mt-4"}>
						<li className={isExpanded ? "nav-item p-1" : "nav-item"}>
							<NavLink to="/organizer/dashboard" activeClassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
								<BiSolidDashboard className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
								{isExpanded && (
									<span className="menu_link_name fs-6 ">Dashboard</span>
								)}</NavLink>
							{!isExpanded && (
								<span className="tooltip">Dashboard</span>
							)}

						</li>

						<li className={isExpanded ? "nav-item p-1" : "nav-item"}>
							<NavLink to="/organizer/searchartist" activeClassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
								<BiSolidSearch className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
								{isExpanded && (
									<span className="menu_link_name fs-6 ">Search</span>
								)}</NavLink>
							{!isExpanded && (
								<span className="tooltip">Search</span>
							)}

						</li>

						<li className={isExpanded ? "nav-item p-1" : "nav-item"}>
							<NavLink to="/organizer/event" activeClassName="active" className={isExpanded ? "nav-link d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link d-flex align-items-center text-decoration-none"}>
								<BiSolidCalendar className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
								{isExpanded && (
									<span className="menu_link_name fs-6 ">Events</span>
								)}</NavLink>
							{!isExpanded && (
								<span className="tooltip">Events</span>
							)}

						</li>
						<li className={isExpanded ? "nav-item p-1" : "nav-item"}>
							<NavLink to="/organizer/eventhistory" activeClassName="active" className={isExpanded ? "nav-link   d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link   d-flex align-items-center text-decoration-none"}>
								<BiSolidCalendarCheck className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
								{isExpanded && (
									<span className="menu_link_name fs-6 ">Event History</span>
								)}</NavLink>
							{!isExpanded && (
								<span className="tooltip">Event History</span>
							)}

						</li>
						<li className={isExpanded ? "nav-item p-1" : "nav-item"}>
							<NavLink to="/organizer/complaint" activeClassName="active" className={isExpanded ? "nav-link d-flex align-items-center text-decoration-none" : "nav-link collapsed-nav-link d-flex align-items-center text-decoration-none"}>
								<BiSolidCommentError className={isExpanded ? "menu-icon mx-4" : "menu-icon"} />
								{isExpanded && (
									<span className="menu_link_name fs-6">Complaints</span>
								)}</NavLink>
							{!isExpanded && (
								<span className="tooltip">Complaints</span>
							)}

						</li>
					</ul>


				</div>
			</div>
			<main className={isExpanded ? "mainContainer" : "mainContainer-NX"}>{children}</main>

		</div>

	);
};

export default SideMenuBarOrganizer;

