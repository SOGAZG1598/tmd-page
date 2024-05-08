// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/watermark1.png';
import './NavBar.scss'; // Import the CSS file

const Navbar = () => {
    return (
        
        <div className="navbarhole">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
           <div class="header">  
            <div class="header__logo">
                <a href="/"><img class="logo_image" src={logo} alt=''></img></a>
            </div>
            <nav class="navbar">
                <ul class="navbar__menu">
                <li class="navbar__item">
                    <Link to="/"></Link><a href="/" class="navbar__link"><i data-feather="home"></i><span>Home</span> </a><Link />
                </li>
                <li class="navbar__item">
                    <Link to="/news"></Link><a href="/news" class="navbar__link"><i data-feather="news"></i><span>Noticias</span> </a><Link />
                </li>
                <li class="navbar__item">
                    <Link to="/channels"></Link><a href="/channels" class="navbar__link"><i data-feather="news"></i><span>Canales</span> </a><Link />       
                </li>
                <li class="navbar__item">
                    <Link to="/videos"></Link><a href="/videos" class="navbar__link"><i data-feather="news"></i><span>Videos</span> </a><Link />       
                </li>
                <li class="navbar__item">
                    <Link to="/wiki"></Link><a href="/wiki" class="navbar__link"><i data-feather="news"></i><span>Personajes</span> </a><Link />        
                </li>
                <li class="navbar__item">
                    <Link to="/store"></Link><a href="/store" class="navbar__link"><i data-feather="news"></i><span>???</span> </a><Link />        
                </li>
                <li class="navbar__item">
                    <Link to="/socialmedia"></Link><a href="/socialmedia" class="navbar__link"><i data-feather="news"></i><span>Redes Sociales</span> </a><Link />        
                </li>
                </ul>
            </nav>
            </div>
            <div class="container">

    <input id="toggle" type="checkbox"/>

    
    <label class="toggle-container" for="toggle">
     
      <span class="button button-toggle"></span>
    </label>

    <nav class="nav">
      <a class="nav-item" href="/">Home</a>
      <a class="nav-item" href="/news">News</a>
      <a class="nav-item" href="/channels">Channels</a>
      <a class="nav-item" href="/videos">???</a>
      <a class="nav-item" href="wiki">???</a>
      <a class="nav-item" href="store">???</a>
      <a class="nav-item" href="socialmedia">Social Media</a>
    </nav>

    <section class="dummy-content">
      <div class="circle"></div>
      <div class="text">
        <span></span><span></span>
      </div>
      <div class="square-top"></div>
      <div class="square-behind"></div>
    </section>
  </div>
       </div>
        
    );
};

export default Navbar;