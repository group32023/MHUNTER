import * as React from "react";
import video from '../assets/images/audio1.mp3';
import video2 from '../assets/images/audio2.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";
import '../assets/css/audio.css'; // Import the CSS file
//for one video
// export default function PerformanceView() {
//     const videoRefs = useRef();
//     const [isPlaying, setIsPlaying] = useState(false);
  
//     function playVideo() {
//       if (videoRefs.current.paused) {
//         videoRefs.current.play();
//         setIsPlaying(true);
//       } else {
//         videoRefs.current.pause();
//         setIsPlaying(false);
//       }
//     }

export default function PerformanceView() {
    const videoRefs1 = useRef();
    const videoRefs2 = useRef();
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
  
    function playVideo1() {
      if (videoRefs1.current.paused) {
        videoRefs1.current.play();
        setIsPlaying1(true);
      } else {
        videoRefs1.current.pause();
        setIsPlaying1(false);
      }
    }
    
    function playVideo2() {
      if (videoRefs2.current.paused) {
        videoRefs2.current.play();
        setIsPlaying2(true);
      } else {
        videoRefs2.current.pause();
        setIsPlaying2(false);
      }
    }


  return (
    
    <div>
    <div className="performancebg"></div>
    <div className="videoStream">
      <div className='artistSlide1'>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src={video}
            ref={videoRefs1}
            allowFullScreen
            title="performance1"
            width={236}
            height={236}
          ></video>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            id="play1"
            onClick={playVideo1}
          >
            <FontAwesomeIcon icon={isPlaying1 ? faPause : faPlay} />
          </button>
        </div>
        <div className="videoText">
          <p>Me As Diha Balan</p>
        </div>
        <div className="videoText2">
          <p>Dec 12 2014</p>
        </div>
      </div>

      <div className='artistSlide1'>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src={video2}
            ref={videoRefs2}
            allowFullScreen
            title="performance2"
            width={236}
            height={236}
          ></video>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            id="play2"
            onClick={playVideo2}
          >
            <FontAwesomeIcon icon={isPlaying2 ? faPause : faPlay} />
          </button>
        </div>
        <div className="videoText">
          <p>Kari Na Sanda</p>
        </div>
        <div className="videoText2">
          <p>Dec 31 2014</p>
        </div>
      </div>
      <div className='artistSlide1'>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src={video}
            ref={videoRefs1}
            allowFullScreen
            title="performance1"
            width={236}
            height={236}
          ></video>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            id="play1"
            onClick={playVideo1}
          >
            <FontAwesomeIcon icon={isPlaying1 ? faPause : faPlay} />
          </button>
        </div>
        <div className="videoText">
          <p>Me As Diha Balan</p>
        </div>
        <div className="videoText2">
          <p>Dec 12 2014</p>
        </div>
      </div>

      <div className='artistSlide1'>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src={video2}
            ref={videoRefs2}
            allowFullScreen
            title="performance2"
            width={236}
            height={236}
          ></video>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            id="play2"
            onClick={playVideo2}
          >
            <FontAwesomeIcon icon={isPlaying2 ? faPause : faPlay} />
          </button>
        </div>
        <div className="videoText">
          <p>Kari Na Sanda</p>
        </div>
        <div className="videoText2">
          <p>Dec 31 2014</p>
        </div>
      </div>      <div className='artistSlide1'>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src={video}
            ref={videoRefs1}
            allowFullScreen
            title="performance1"
            width={236}
            height={236}
          ></video>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            id="play1"
            onClick={playVideo1}
          >
            <FontAwesomeIcon icon={isPlaying1 ? faPause : faPlay} />
          </button>
        </div>
        <div className="videoText">
          <p>Me As Diha Balan</p>
        </div>
        <div className="videoText2">
          <p>Dec 12 2014</p>
        </div>
      </div>

      <div className='artistSlide1'>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src={video2}
            ref={videoRefs2}
            allowFullScreen
            title="performance2"
            width={236}
            height={236}
          ></video>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            id="play2"
            onClick={playVideo2}
          >
            <FontAwesomeIcon icon={isPlaying2 ? faPause : faPlay} />
          </button>
        </div>
        <div className="videoText">
          <p>Kari Na Sanda</p>
        </div>
        <div className="videoText2">
          <p>Dec 31 2014</p>
        </div>
      </div>
    </div>
  </div>
);
}


{/* <div>
<div className="performancebg"></div>
<div className="videoStream">
  <div className='artistSlide1'>
    <div className="embed-responsive embed-responsive-16by9">
      <video
        className="embed-responsive-item"
        src={video}
        ref={videoRefs}
        allowFullScreen
        title="performance"
        width={236}
        height={236}
      ></video>
    </div>
    <div>
    <button
      type="button"
      className="btn btn-danger"
      id="play1"
      onClick={playVideo}
    >
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
    </button>
    </div>
    <div className="videoText">
          <p>Me As Diha Balan</p>
   </div>
   <div className="videoText2">
          <p>Dec 12 2014</p>
   </div>
  </div>
  <div className='artistSlide1'>
    <div className="embed-responsive embed-responsive-16by9">
      <video
        className="embed-responsive-item"
        src={video}
        ref={videoRefs}
        allowFullScreen
        title="performance"
        width={236}
        height={236}
      ></video>
    </div>
    <div>
    <button
      type="button"
      className="btn btn-danger"
      id="play1"
      onClick={playVideo}
    >
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
    </button>
    </div>
    <div className="videoText">
          <p>Me As Diha Balan</p>
   </div>
   <div className="videoText2">
          <p>Dec 12 2014</p>
   </div>
  </div> */}