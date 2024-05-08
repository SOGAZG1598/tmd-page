// src/components/Navbar.js
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ChannelLogos from '../components/Channels/ChannelLogos';


const Channels = () => {
    return(
        <div>
            <Navbar />
            <ChannelLogos />
            <Footer />
        </div>
    )
};

export default Channels;