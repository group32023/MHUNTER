import React, { useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'
import dashboardimg from '../../../assets/icons/dashboard.png'
import eventsimg from '../../../assets/icons/events.png'
import eventhistoryimg from '../../../assets/icons/eventHistory.png'
import complaintsimg from '../../../assets/icons/complaint.png'
import logoImage from '../../../assets/icons/logosidebar.svg'
import { useSideMenubarOrganizerDashboard } from '../../../pages/organizer/OrganizerDashboard';

const SideMenuBarOrganizer = () => {
	const { isExpanded, setExpandState } = useSideMenubarOrganizerDashboard();

	const handleToggleSideMenubar = () => {
		setExpandState(!isExpanded);
	};

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
							onClick={handleToggleSideMenubar}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>

				</div>
				<div className="menu-profilePhoto">
					<img className={isExpanded ? "menu-item-profilePhoto" : "menu-item-profilePhoto-NX"} src={profilePhoto} alt="Profile" srcSet="" width="130px" height="130px" />

				</div>

				{isExpanded && (<div className="menu-profilePName">
					<p >Tehani Imara</p>

				</div>)}

				<div className="menu-menu">


					{menuItems.map(({ text, icon }, index) => (
						/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
						<a key={index} className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="#">
							<img className="menu-item-icon" src={icon} alt="" srcSet="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>

		</div>
	);
};

export default SideMenuBarOrganizer;