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

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        
        fetch(`http://localhost:8080/musicUser/${userId}`)
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
        })
        .then((data)=>{
            localStorage.setItem("mmid",data['mmid']);
        })
        .catch((error)=>{
            console.log("Error fetching data:", error)
        })

        if (userId) {
            axios.get(`http://localhost:8080/user/user/${userId}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error(error);
                    alert(error);
                });
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