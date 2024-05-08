import React from 'react';
import './Welcome.scss'; // You can create a separate CSS file for styling
import video from '../../assets/videos/Fire.mp4';

const Welcome = () => {
  return (
    <div className="home-page">
      {/* Blurred video background */}
      <video className="video-background" autoPlay muted loop>
        <source src={video} type="video/mp4" />
  </video>

      {/* Centered greeting text */}
      <div className="greeting-text">
        <h1>Bienvenidos a la Página Oficial de <br></br> TheMarioDimension</h1>
        <p>La dimensión más genial de YouTube y ahora de internet!</p>
      </div>
  </div>
  );
  
};

export default Welcome;