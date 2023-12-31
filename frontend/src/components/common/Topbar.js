
import React, { useState } from "react";
import { AiOutlineLogout, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import styled, { css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


const TopbarContainer = styled.div`
display :flex;
justify-content : flex-end;
align-items : center;
height: 85px;
min-width: 1275px;
background-color : #1c2126;
padding-top : 1rem;
padding-right : 2rem;
position: relative;
`;

const PropText = styled.p`
  position: absolute;
  left: 32px;
  top: 31px;
  font-size: 23px;
`;

const IconContainer = styled.div`
padding: 5px;
margin-bottom: 10px;
margin-right: 15px;
cursor: pointer;
border-radius: 35%;
background-color: #3B444D;
color : #7643D2;

${(props) =>
    props.active &&
    css`
    background-color: #7643D2;
    color: #fff;
    border-radius: 40%;
    padding: 5px;
    
    `}

    &:hover {
        background-color: #7643D2;
        color: #fff;
      }
`;

const Topbar = (props) => {

  const [notificationsActive, setnotificationsActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  const handleNotifications = () => {
    setnotificationsActive((prevState) => !prevState);
    console.log('show notifications');
  }

  const handleProfile = () => {
    // setProfileActive((prevState) => !prevState);
    console.log('Opening profile');
  }

  return (



    <TopbarContainer>
      <PropText style={{ fontFamily: 'MyCustomFont1' }}> {props.customProp}</PropText>
      <IconContainer onClick={handleNotifications} active={notificationsActive} >
        <AiOutlineBell size={30}></AiOutlineBell>
      </IconContainer>
      <IconContainer onClick={handleProfile} active={profileActive}>
        <AiOutlineUser size={30}></AiOutlineUser>
      </IconContainer>

      <IconContainer onClick={handleLogout} active={false} >
        <AiOutlineLogout size={30}></AiOutlineLogout>
      </IconContainer>

    </TopbarContainer>


  );

};

export default Topbar;