import React, { useState } from "react";
import { AiOutlineLogout, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import styled, { css } from 'styled-components';

const TopbarContainer = styled.div`

display :flex;
justify-content : flex-end;
align-items : center;
height :70px;
width : 1215px;
margin-left:19rem;
background-color : #24292D;
padding-top : 1rem;
padding-right : 2rem;
`;

const IconContainer = styled.div`

display :flex;
align-items : center;
padding : 5px;
margin-left : 10px;
cursor: pointer;
border-radius: 40%;
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

const Topbar = () => {

    const [notificationsActive, setnotificationsActive] = useState(false);
    const [profileActive, setProfileActive] = useState(false);

    const handleLogout = () => {
        console.log('Logged out');
    }

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

            <IconContainer onClick={handleNotifications} active={notificationsActive} >
                <AiOutlineBell size={30}></AiOutlineBell>
            </IconContainer>
            <IconContainer onClick={handleProfile} active={profileActive}>
                <AiOutlineUser size={30}></AiOutlineUser>
            </IconContainer>
            <IconContainer onClick={handleLogout} active={false}>
                <AiOutlineLogout size={30}></AiOutlineLogout>
            </IconContainer>
        </TopbarContainer>
    );

};

export default Topbar;