import React from 'react';
import Navbar from '../components/NavBar.js'; // Import your Navbar component
import Welcome from '../components/Home/Welcome.js';
import Footer from '../components/Footer.js';
import './Scroll.css'

const App = () => {
    return (
        <html>
            <head>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3081463517624663"
     crossOrigin="anonymous"></script>
            </head>
        <div className="app">
            <Navbar />
            <Welcome />
            <Footer />
        </div>
        </html>
    );
};

export default App;
