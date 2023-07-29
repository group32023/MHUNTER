import * as React from "react";
import video from '../assets/images/audio1.mp3';
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
          <button
            type="button"
            className="btn btn-danger"
            id="play1"
            onClick={playVideo}
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
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
          <button
            type="button"
            className="btn btn-danger"
            id="play2" // Make sure to change the id to "play2" or something unique for the second player
            onClick={playVideo}
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
        </div>
      </div>
    </div>
  );
}
