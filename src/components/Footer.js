import React from 'react';
import './Footer.scss'; // You can create a separate CSS file for styling
import logo from '../assets/images/logo/watermark.png'
import fblogo from '../assets/images/sm/fb.png'
import xlogo from '../assets/images/sm/x.webp'
import ttlogo from '../assets/images/sm/disc.webp'
import ptrnlogo from '../assets/images/sm/yt.png'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-column">
          {/* Logo */}
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-column">
          {/* Contact Us */}
          <p>Email: <a href="mailto:tmd.revival@gmail.com">tmd.revival@gmail.com</a></p>
        </div>
        <div className="footer-column2">
          {/* YouTube Channels */}
          <p>Canales de YouTube:</p>
          <ul>
            <li><a style={{textDecoration: "none", color: 'white'}} href="https://www.youtube.com/@TheZeldaDimension">TheZeldaDimension</a></li>
            <li><a style={{textDecoration: "none", color: 'white'}} href="https://www.youtube.com/@TMD2.0">TMD2</a></li>
          </ul>
        </div>
        <div className="footer-column2">
          {/* Social Media */}
          <p>Redes Sociales:</p>
        <a class='FB' href="https://www.facebook.com/profile.php?id=61551168365082"><img src={fblogo} alt="Facebook" /></a>
        <a class='X' href="https://x.com/_TMD_2"><img src={xlogo} alt="X" /></a>
        <a class='TT' href="https://discord.gg/KWkEGwySbv"><img src={ttlogo} alt="Discord" /></a>
        <a class='PTRN' href="https://www.youtube.com/@TMD2.0"><img src={ptrnlogo} alt="YouTube" /></a>
      </div>
      </footer>
    );
  };
export default Footer;