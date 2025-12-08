// src/components/Navbar.js
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import logodisc from '../assets/images/logo/disc.png'
import './News.scss'; 

const News = ( {articles} ) => {
    return(
        <div>
            <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3081463517624663"
     crossOrigin="anonymous"></script></head>
            <Navbar />
            <div className="news">
            <div className="image-container">
            <a href="https://discord.gg/KWkEGwySbv"><img
              src={logodisc}
              alt=""
              
            /></a>
      </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3081463517624663"
     crossOrigin="anonymous"></script>
            <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="80%"
                src="https://widget.tagembed.com/308963?website=1" >
                </iframe>
                <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="80%"
                src="https://widget.tagembed.com/308969?website=1" >
                </iframe>
                </div>
            <Footer />
        </div>
    )
};

export default News;
