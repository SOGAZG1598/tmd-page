import React from 'react';
import video from '../../assets/videos/Fire.mp4';
import './BackgroundVideo.scss'; // Import the CSS file

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;