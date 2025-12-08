import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";
import video from "../../assets/videos/Fire.mp4";

const Welcome = () => {
  return (
    <div className="home-page">
      {/* Video Background */}
      <video className="video-background" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      {/* Menu Grid */}
      <div className="menu-grid">
      <Link to="/videos" className="menu-item videos img-videos">Videos</Link>

<div className="left-column">
  <Link to="/channels" className="menu-item small img-canales">Canales</Link>
  <Link to="/news" className="menu-item small img-noticias">Noticias</Link>
</div>

<div className="right-column">
  <Link to="/wiki" className="menu-item wiki img-wiki">Wiki</Link>
</div>

<Link to="/store" className="menu-item bottom left img-construccion">Proximamente</Link>
<Link to="/socialmedia" className="menu-item bottom right img-redes">Redes Sociales</Link>

      </div>
    </div>
  );
};

export default Welcome;
