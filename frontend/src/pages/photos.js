import React from "react";
import '../assets/css/audio.css'; // Import the CSS file
import Photo1 from '../assets/images/shehan.jpeg';
import Photo2 from '../assets/images/shihan.jpg';
import Photo3 from '../assets/images/shehan1.jpg';
import Photo4 from '../assets/images/shehan2.jpg';
import Photo5 from '../assets/images/shehan3.jpeg';
import Photo6 from '../assets/images/shehan4.jpeg';
import Photo7 from '../assets/images/artist.jpg';
import Photo8 from '../assets/images/event.jpg';



const PhotoGallery = () => {
  return (
    <div>
      <div className="photo-container">
        <img src={Photo1} alt="Shehan" />
        <img src={Photo2} alt="Shihan" />
        <img src={Photo3} alt="Shihan" />
        <img src={Photo4} alt="Shihan" />
        <img src={Photo5} alt="Shihan" />
        <img src={Photo6} alt="Shihan" />
        <img src={Photo7} alt="Shihan" />
        <img src={Photo8} alt="Shihan" />

      </div>
    </div>
  );
};

export default PhotoGallery;




