import React, { useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";


const SideMenuBarOrganizer = () => {
	const [isExpanded, setExpandState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "../../assets/icons/dashboard.png",
		},
		{
			text: "Events",
			icon: "../../assets/icons/events.png",
		},
		{
			text: "Event History",
			icon: "../../assets/icons/eventHistory.png",
		},
		{
			text: "Complaints",
			icon: "../../assets/icons/complaint.png",
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
							<img src="../../assets/icons/logosidebar.svg" alt="" srcset="" />
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

				</div>
				<div className="menu-profilePhoto">
					<img className={isExpanded ? "menu-item-profilePhoto" : "menu-item-profilePhoto-NX"} src="../../assets/images/profilePhoto.jpeg" alt="Profile" srcset="" width="130px" height="130px" />

				</div>

				{isExpanded && (<div className="menu-profilePName">
					<p >Tehani Imara</p>

				</div>)}

				<div className="menu-menu">
					{menuItems.map(({ text, icon }) => (
						/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
						<a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="#">
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>

		</div>
	);
};

export default SideMenuBarOrganizer;
