import React, { useRef, useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'
import dashboardimg from '../../../assets/icons/dashboard.png'
import pendingimg from '../../../assets/icons/pending.png'
import requestlogimg from '../../../assets/icons/requestlog.png'
import reportsimg from '../../../assets/icons/reports.png'
import feedimg from '../../../assets/icons/feed.png'
import eventsimg from '../../../assets/icons/events.png'
import logoImage from '../../../assets/icons/logosidebar.svg'
import { NavLink } from "react-bootstrap";



const SideMenuBarArtist = ({setExpandedSideBar}) => {
    const [isExpanded, setExpandState] = useState(false);

    var url = window.location.href
    var key =url.split("/")[4]

    const artistDashboardRef = useRef()

    const menuItems = [
        {
            path:"http://localhost:3000/artist/Dashboard",
            text: "Dashboard",
            tag: "Dashboard",
            active: "false",
            icon: dashboardimg,
        },
        {
            path:"/artist/Event",
            text: "Events",
            tag: "Events",
            active: "false",
            icon: eventsimg,
        },
        {
            path:"/artistDashboard",
            text: "Pending Requests",
            tag: "PendingRequests",
            active: "false",
            icon: pendingimg,
        },
        {
            path:"/artistDashboard",
            text: "My Feed",
            tag: "MyFeed",
            active: "false",
            icon: feedimg,
        },
        {
            path:"/artistDashboard",
            text: "Request Log",
            tag: "RequestLog",
            active: "false",
            icon: requestlogimg,
        },
        {
            path:"/artistDashboard",
            text: "Reports",
            tag: "Reports",
            active: "false",
            icon: reportsimg,
        },
    ];

    menuItems.map((item,index)=>{
        if(item.tag === key){
            item.active = true
        }
    }, []);
    console.log("Current user:", user); 

    const handle=()=>{
        setExpandedSideBar(isExpanded)
    }


    return (
        <div
            className={
                isExpanded
                    ? "side-menu-container"
                    : "side-menu-container side-menu-container-NX"
            }

            style={{ fontFamily: 'MyCustomFont' ,width:isExpanded ? "300px":"85px" }} 
        ref={artistDashboardRef}>
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
                            onClick={() => {setExpandState(!isExpanded);handle()}}
                         id="navBtn">
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


                    {menuItems.map(({ text, icon,path,active }, index) => (
                        /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
                       
                        <NavLink to={path} key={index}>
                            <div className={isExpanded ? (active) ? "Link-active-expand" :" " : (active) ? "Link-active" :" "}>
                            <div  className={isExpanded ? "menu-item" :"menu-item menu-item-NX"}><img className="menu-item-icon" src={icon} alt="" srcSet="" /> {isExpanded && <p>{text}</p>}</div>
                            </div>
                        </NavLink>                        
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SideMenuBarArtist;