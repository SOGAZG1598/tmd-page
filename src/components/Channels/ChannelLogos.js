import React from 'react';
import './ChannelLogos.scss'; // You can create a separate CSS file for styling
import tmd2logo from '../../assets/images/logo/TMDHDND3.png'
import tmdlogo from '../../assets/images/logo/tmdlogo.webp'

const LogoComponent = () => {
    return (
      <div className="logo-container">
        <a href="https://www.youtube.com/@TheMarioDimension" className="logo-link" target="_blank" rel="noopener noreferrer">
          <img
            src={tmdlogo}
            alt="Logo 1"
            className="logo"
          />
        </a>
        <a href="https://www.youtube.com/@TheMarioDimension2" className="logo-link" target="_blank" rel="noopener noreferrer">
          <img
            src={tmd2logo}
            alt="Logo 2"
            className="logo"
          />
        </a>
      </div>
    );
  };
  
  export default LogoComponent;