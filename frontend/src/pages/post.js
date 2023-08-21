import React from "react";
import '../assets/css/audio.css'; // Import the CSS file
import Photo1 from '../assets/images/slide_6.jpg';
import Photo2 from '../assets/images/slide_7.jpg';
import Photo3 from '../assets/images/slide_8.jpg';
import Photo4 from '../assets/images/shehan2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSmile } from '@fortawesome/free-solid-svg-icons';

const Post = ({ isFirstPost, bigCaption, date, photo, smallCaption }) => {
  return (
    <div className="post-container">
      <div className="big-caption">
      
        {bigCaption}
        {isFirstPost && (
          <>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ marginRight: "5px", color: "red" }}
            />
            <FontAwesomeIcon
              icon={faSmile}
              style={{ marginRight: "5px", color: "yellow" }}
            />
          </>
        )}
      </div>
      <div className="date">{date}</div>
      <div className="photo">
        <img src={photo} alt="Post" />
      </div>
      <div className="small-caption">{smallCaption}</div>
    </div>
  );
};

const MyFeed = () => {
  return (
    <div>
      <Post
        isFirstPost={true}
        bigCaption="Brilliant Event ."
        date="August 7, 2023"
        photo={Photo1}
        smallCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini"
      />

      <Post
        isFirstPost={false}
        bigCaption="Another post with a big caption."
        date="August 8, 2023"
        photo={Photo2}
        smallCaption="Another small caption for the photo."
      />

      {/* Add more posts as needed */}
    </div>
  );
};

// const Post = ({ bigCaption, date, photo, smallCaption }) => {
//   return (
//     <div className="post-container">
//       <div className="big-caption">{bigCaption}</div>
//       <div className="date">{date}</div>
//       <div className="photo">
//         <img src={photo} alt="Post" />
//       </div>
//       <div className="small-caption">{smallCaption}</div>
//     </div>
//   );
// };

// const MyFeed = () => {
//   return (
//     <div>
//       <Post
//         bigCaption={`<FontAwesomeIcon icon={faHeart} /> Brilient Event.`}

//         date="August 7, 2023"
//         photo={Photo1}
//         smallCaption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini"
//       />

//       <Post
//         bigCaption="Another post with a big caption."
//         date="August 8, 2023"
//         photo={Photo2}
//         smallCaption="Another small caption for the photo."
//       />

//       {/* Add more posts as needed */}
//     </div>
//   );
// };

// export default MyFeed;

export default MyFeed;

