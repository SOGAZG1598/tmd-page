// Temp.js

import React from 'react';
import './Temp.scss'; // Import the CSS file for styling
import gifback from './construccion.mp4'


const Temp = () => {
  return (
    <div className="temp-container">
      <video className="background-gif" autoPlay muted loop>
        <source src={gifback} type="video/mp4" />
      </video>
      <h1 className="construction-title">ESTA SECCIÓN ESTÁ EN CONSTRUCCIÓN</h1>
    </div>
  );
};

export default Temp;