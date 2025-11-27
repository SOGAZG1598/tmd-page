// src/components/Navbar.js
import React from 'react';
import Navbar from '../components/NavBar';
import Personajes from '../components/Wiki/Personajes';
import Footer from '../components/Footer';
import image from '../assets/images/wiki/1.png'
import image2 from '../assets/images/wiki/2.png'
import image3 from '../assets/images/wiki/3.png'
import image4 from '../assets/images/wiki/4.png'
import BackgroundVideo from '../components/Wiki/BackgroundVideo';

const images = [
    image,
    image2,
    image3,
    image4,
  ];

const Wiki = () => {
    return(
        <div>
        <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3081463517624663"
     crossOrigin="anonymous"></script></head>
            <Navbar />
            <BackgroundVideo />
            <Personajes images={images}/>
            <Footer />
        </div>
    )
};

export default Wiki;
