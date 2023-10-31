import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  animation: popUp ease-in-out 350ms;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.17);
  margin-top: 60px;
  padding: 28px 30px 30px 35px;
  position: relative;
  width: 645px;
`;

const ProfilePicture = styled.div`
  background: #ffffff;
  border-radius: 100px;
  border: 10px solid #ffffff;
  height: 125px;
  position: absolute;
  top: -40px;
  width: 125px;

  &:before {
    border-radius: 100px;
    box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.17);
    content: "";
    height: calc(100% + 20px);
    left: -10px;
    position: absolute;
    top: -10px;
    width: calc(100% + 20px);
    z-index: -1;
  }

  img {
    border-radius: 100px;
    height: 100%;
    width: 100%;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: black;
`;

const ProfileAccount = styled.div`
  align-self: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-left: 135px;
  color: black;
`;

const ProfileButton = styled.a`
  border-radius: 50px;
  border: 1px solid #000000;
  color: #000000;
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  transition: background 250ms ease-in-out, color 250ms ease-in-out;
  color: black;

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;

const ProfileEdit = styled.div`
  flex: none;
  margin-left: 30px;
  width: 140px;
`;



const ProfileIcon = styled.div`
  flex: none;
  font-size: 1.5em;
  margin-right: 10px;
  padding-top: 3px;

  &--gold {
    color: #eab100;
  }

  &--blue {
    color: #8faae8;
  }

  &--pink {
    color: #ff86af;
  }
`;

const ProfileKey = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
`;

const ProfileUsername = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin: 0;
  text-align: right;
  color: black;
`;

const ProfileValue = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: black;
`;

const AgreementDetailProfile = () => {
    return (
        <ProfileContainer>
            <ProfilePicture>
                <img src="http://i.pravatar.cc/250?img=58" alt="ananddavis" />
            </ProfilePicture>
            <ProfileHeader>
                <ProfileAccount>
                    <ProfileUsername>Dinesh Gamage</ProfileUsername>
                </ProfileAccount>
                <ProfileEdit>
                    <ProfileButton href="#">View Profile</ProfileButton>
                </ProfileEdit>
            </ProfileHeader>

        </ProfileContainer>
    );
};

export default AgreementDetailProfile;
