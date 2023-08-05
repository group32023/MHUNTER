import React, { useState } from "react";
import "../../../assets/css/SideMenuBarOrganizer.css";
import profilePhoto from '../../../assets/images/profilePhoto.jpeg'

import dashboardimg from '../../../assets/icons/dashboard.png'
import registerusersimg from '../../../assets/icons/registerusers.png'
import reportsimg from '../../../assets/icons/reports.png'
import settingsimg from '../../../assets/icons/settings.png'
import userdetailsimg from '../../../assets/icons/userdetails.png'
import eventsimg from '../../../assets/icons/events.png'
import logoImage from '../../../assets/icons/logosidebar.svg'
import { NavLink} from "react-router-dom";
//import { NavLink } from "react-bootstrap";


const SideMenuBarAdmin = () => {
    const [isExpanded, setExpandState] = useState(false);
    //const location = useLocation();

    var url = window.location.href
    var key =url.split("/")[4]

    const menuItems = [
        {
            path:"/admin/admindashboard",
            text: "Dashboard",
            tag: "Dashboard",
            active: "ture",
            icon: dashboardimg,
        },
        {
            path:"/admin/registration",
            text: "Registration",
            tag: "Registration",
            active: "false",
            icon: registerusersimg,
        },
        {
            path:'/admin/userdetails',
            text: "User Details",
            tag: "User Details",
            active: "false",
            icon: userdetailsimg,
        },
        {
            
            text: "Events",
            tag: "Events",
            active: "false",
            icon: eventsimg,
        },
        {
            path:'/admin/report',
            text: "Reports",
            tag:'Reports',
            active: "false",
            icon: reportsimg,
        },
        {
            path:'/admin/settings',
            text: "Settings",
            tag: "Settings",
            active: "false",
            icon: settingsimg,
        },
    ];

    menuItems.map((item,index)=>{
        if(item.tag === key){
            item.active = true
        }
        else{
            item.active = false
        }
    });
    /*menuItems.forEach((item) => {
        item.active = item.path === location.pathname;
      });*/

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


                    {menuItems.map(({ text,icon,path,active }, index) => (
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
export default SideMenuBarAdmin;