import React from 'react';
import Navbar from '../components/NavBar.js'; // Import your Navbar component
import Welcome from '../components/Home/Welcome.js';
import Footer from '../components/Footer.js';
import './Scroll.css'

const App = () => {
    return (
        <div className="app">
            
            <Navbar /> {/* Include your Navbar component */}
            <Welcome />
            <Footer />
        </div>
    );
};

export default App;