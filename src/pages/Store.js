// src/components/Navbar.js
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Temp from '../components/Store/Temp';


const Store = () => {
    return(
        <div>
            <Navbar />
            <Temp />
            <Footer />
        </div>
    )
};

export default Store;