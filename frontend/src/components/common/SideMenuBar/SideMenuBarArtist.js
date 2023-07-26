import React, { useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'
import dashboardimg from '../../../assets/icons/dashboard.png'
import pendingimg from '../../../assets/icons/pending.png'
import requestlogimg from '../../../assets/icons/requestlog.png'
import reportsimg from '../../../assets/icons/reports.png'
import feedimg from '../../../assets/icons/feed.png'
import eventsimg from '../../../assets/icons/events.png'
import logoImage from '../../../assets/icons/logosidebar.svg'


const SideMenuBarArtist = () => {
    const [isExpanded, setExpandState] = useState(false);
    const menuItems = [
        {
            path:"/artistDashboard",
            text: "Dashboard",
            icon: dashboardimg,
        },
        {
            path:"/artistDashboard",
            text: "Events",
            icon: eventsimg,
        },
        {
            path:"/artistDashboard",
            text: "Pending Requests",
            icon: pendingimg,
        },
        {
            path:"/artistDashboard",
            text: "My Feed",
            icon: feedimg,
        },
        {
            path:"/artistDashboard",
            text: "Request Log",
            icon: requestlogimg,
        },
        {
            path:"/artistDashboard",
            text: "Reports",
            icon: reportsimg,
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
                        <a key={index} className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="/artistDashboard">
                            <img className="menu-item-icon" src={icon} alt="" srcSet="" />
                            {isExpanded && <p>{text}</p>}
                        </a>
                        
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SideMenuBarArtist;