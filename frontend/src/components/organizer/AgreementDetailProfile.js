import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../assets/css/AgreementDetailProfile.css'

const AgreementDetailProfile = (props) => {
  const detail0 = props.detail0;
  const mmid = detail0;
  useEffect(() => {
    const apiUrl = `http://localhost:8080/requestMusicMember/musicMemberDetails/${mmid}`;
    axios.get(apiUrl)
      .then((response) => {
        setMusicMember(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [musicMember, setMusicMember] = useState({});
  return (
    <div className="container mb-4 p-3 d-flex justify-content-center">
      <div className="agreementDetail card p-4">
        <div className="image d-flex flex-column justify-content-center align-items-center">
          <button className="ppbtn btn-secondary">
            <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="Profile" />
          </button>
          <span className="name mt-3">{musicMember.userName}</span>
          <span className="idd">@{musicMember.userName}</span>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">{musicMember.email}</span>
            <span><i className="fa fa-copy"></i></span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">1069 <span className="follow">Followers</span></span>
          </div>
          <div className="d-flex mt-2">
            <button className="btn1 btn-dark">View Profile</button>
          </div>
          <div className="text mt-3">
            <span>{musicMember.userName} is a creative and talented individual or group that specializes in producing and performing musical compositions.
              <br /><br /> Artist/ Creative Director by Day #NFT minting@ with FND night. </span>
          </div>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            <span><i className="fa fa-twitter"></i></span>
            <span><i className="fa fa-facebook-f"></i></span>
            <span><i className="fa fa-instagram"></i></span>
            <span><i className="fa fa-linkedin"></i></span>
          </div>
          <div className="px-2 rounded mt-4 date">
            <span className="join">{musicMember.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementDetailProfile;
