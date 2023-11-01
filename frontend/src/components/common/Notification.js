import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Notification() {
  const [getData,setData] = useState()
  const BASE_URL = "http://localhost:8080";

  // get the all data form backend
  const handle = ()=>{
    const userId = localStorage.getItem('userId');
    const mmId = localStorage.getItem('mmid');

    if(userId){
    fetch(`http://localhost:8080/notification/view/${userId}`).then((res)=>res.json()).then((result)=>{
      if(result.length>0){
        const newItem = result.map(item=>(
          <div class="notification-list_content">
            <div class="notification-list_img">
              <img
                src={`${BASE_URL}/postData/uploads/image/${item.img}`}
                alt="user"
                className="img-notification"
              ></img>
            </div>
            <div class="notification-list_detail">
              <p>
                <b>{item.userName}</b> {item.title}
              </p>
              <p class="text-muted-notification">
                {item.message}
              </p>
              <p class="text-muted-notification">
                <small>{item.time} mins ago</small>
              </p>
            </div>
          </div>
        ))
        
        setData(newItem) 
      }
    })}    
  }

  useEffect(()=>{
    handle();
  },[])


  return (
    <div>
      <div class="notification-ui_dd-content">
        <div className="notification-ui-arrow">
          <FontAwesomeIcon
            icon="fa-solid fa-play"
            rotation={270}
            className="notification-ui-icon-arrow"
          />
        </div>
        <ul className="notification-ui-heading-list">
          <li>
            <p className="notification-ui-heading">Notification</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGear}
              className="notification-ui-heading-setting"
            />
          </li>
        </ul>

        <div class="notification-list notification-list--unread">
          {getData}
        </div>
      </div>
    </div>
  );
}
