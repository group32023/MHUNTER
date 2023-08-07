import * as React from "react";
import video from '../assets/images/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";
import '../assets/css/audio.css'; // Import the CSS file

export default function PerformanceView() {
    const videoRefs = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
  
    function playVideo() {
      if (videoRefs.current.paused) {
        videoRefs.current.play();
        setIsPlaying(true);
      } else {
        videoRefs.current.pause();
        setIsPlaying(false);
      }
    }
  

  return (
    <div>
      <div className="performancebg"></div>
      <div className="videoStream">
        <div className='artistSlide2'>
          <div className="embed-responsive2 embed-responsive2">
            <video
              className="embed-responsive2-item2"
              src={video}
              ref={videoRefs}
              allowFullScreen
              title="performance"
              width={536}
              height={236}
            ></video>
          </div>
        <div>
          <button
            type="button"
            className="btn btn-danger2"
            id="play2" // Make sure to change the id to "play2" or something unique for the second player
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
        <div className='artistSlide2'>
          <div className="embed-responsive2 embed-responsive2">
            <video
              className="embed-responsive2-item2"
              src={video}
              ref={videoRefs}
              allowFullScreen
              title="performance"
              width={536}
              height={236}
            ></video>
          </div>
        <div>
          <button
            type="button"
            className="btn btn-danger2"
            id="play2" // Make sure to change the id to "play2" or something unique for the second player
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
        <div className='artistSlide2'>
          <div className="embed-responsive2 embed-responsive2">
            <video
              className="embed-responsive2-item2"
              src={video}
              ref={videoRefs}
              allowFullScreen
              title="performance"
              width={536}
              height={236}
            ></video>
          </div>
        <div>
          <button
            type="button"
            className="btn btn-danger2"
            id="play2" // Make sure to change the id to "play2" or something unique for the second player
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
        
      </div>
    </div>
  );
}
