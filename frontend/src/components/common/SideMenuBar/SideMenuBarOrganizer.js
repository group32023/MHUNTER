import React, { useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'
import dashboardimg from '../../../assets/icons/dashboard.png'
import eventsimg from '../../../assets/icons/events.png'
import eventhistoryimg from '../../../assets/icons/eventHistory.png'
import complaintsimg from '../../../assets/icons/complaint.png'
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



const SideMenuBarOrganizer = () => {
	const [isExpanded, setExpandState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: dashboardimg,
		},
		{
			text: "Events",
			icon: eventsimg,
		},
		{
			text: "Event History",
			icon: eventhistoryimg,
		},
		{
			text: "Complaints",
			icon: complaintsimg,
		},
	];


	return (
		<div
			className={
				isExpanded
					? "side-menu-container"
					: "side-menu-container side-menu-container-NX"
			}

			style={{ fontFamily: 'MyCustomFont' }}
		>
			<div className="menu-upper">
				<div className="menu-heading">
					{isExpanded && (
						<div className="menu-brand">

							<img src={logoImage} alt="" srcSet="" />


						</div>
					)}

					<div className={isExpanded ? "sideIconDiv" : "sideIconDiv-NX"}>
						<button
							className={
								isExpanded ? "sideIcon sideIcon-in" : "sideIcon sideIcon-out"
							}
							onClick={() => setExpandState(!isExpanded)}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>

					<div className="row">
						<NavLink to="/organizer/profile">
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

		</div>
	);
};

export default SideMenuBarOrganizer;
