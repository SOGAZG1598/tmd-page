// src/components/Navbar.js
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Temp from '../components/Store/Temp';


const Store = () => {
    return(
        <div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3081463517624663"
     crossOrigin="anonymous"></script>
            <Navbar />
            <Temp />
            <Footer />
        </div>
    )
};

export default Store;