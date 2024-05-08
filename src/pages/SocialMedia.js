// src/components/Navbar.js
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import SocialMediat from '../components/Social Media/SocialMediat';


const SocialMedia = () => {
    return(
        <div>
            <Navbar />
            <SocialMediat />
            <Footer />
        </div>
    )
};

export default SocialMedia;