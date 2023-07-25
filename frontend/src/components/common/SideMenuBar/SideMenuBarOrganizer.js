import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/icons/logosidebar.svg'
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'


const SideMenuBarOrganizer = () => {
	const [isExpanded, setExpandState] = useState(false);
	// const menuItems = [
	// 	{
	// 		text: "Dashboard",
	// 		icon: dashboardimg,
	// 	},
	// 	{
	// 		text: "Events",
	// 		icon: eventsimg,
	// 	},
	// 	{
	// 		text: "Event History",
	// 		icon: eventhistoryimg,
	// 	},
	// 	{
	// 		text: "Complaints",
	// 		icon: complaintsimg,
	// 	},
	// ];


	return (
		<div className={
			isExpanded
				? "side-menu-container d-flex flex-column justify-content-between text-white  vh-100"
				: "side-menu-container side-menu-container-NX"
		}

			style={{ fontFamily: 'MyCustomFont' }}>
			<div>


				<div className="menu-upper d-flex align-items-center">
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

					</div>

					<hr className="text-secondary mt-2" />

					<div className="menu-profilePhoto">
						<Link to="/" className="d-flex align-items-center">
							<img className={isExpanded ? "menu-item-profilePhoto" : "menu-item-profilePhoto-NX"} src={profilePhoto} alt="Profile" srcSet="" width="130px" height="130px" />
						</Link>

						{isExpanded && (<div className="menu-profilePName">
							<p >Tehani Imara</p>

						</div>)}

					</div>

					<ul className="nav nav-pills flex-column px-0">
						<li className="nav-item p-1">
							<Link to="/" className="nav-link text-white">
								<i className="bi bi-speedometer me-2 fs-5"></i>
								{isExpanded && (
									<span className="fs-5">Dashboard</span>
								)}

							</Link>
						</li>
						<li className="nav-item p-1">
							<Link to="/organizerDashboard" className="nav-link text-white fs-5" aria-current="page">
								<i className="bi bi-table me-2 fs-5"></i>
								{isExpanded && (
									<span className="fs-5">Dashboard</span>
								)}
							</Link>
						</li>
						<li className="nav-item p-1">
							<Link to="/home" className="nav-link text-white fs-5" aria-current="page">
								<i className="bi bi-house me-2 fs-5"></i>
								{isExpanded && (
									<span className="fs-5">Dashboard</span>
								)}
							</Link>
						</li>
						<li className="nav-item p-1">
							<Link to="/home" className="nav-link text-white fs-5" aria-current="page">
								<i className="bi bi-people me-2 fs-5"></i>
								{isExpanded && (
									<span className="fs-5">Dashboard</span>
								)}
							</Link>
						</li>
					</ul>
				</div>

			</div>









		</div>

	);
};

export default SideMenuBarOrganizer;