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
            <div className="embed">
    <iframe src="https://widgets.sociablekit.com/twitter-feed/iframe/25632535"
            id="inlineFrameExample"
            title="Inline Frame Example"
            frameborder="0"
            width="1000px"
            height="1000px"></iframe>

    <iframe src="https://widgets.sociablekit.com/youtube-community/iframe/25632538"
            id="inlineFrameExample"
            title="Inline Frame Example"
            frameborder="0"
            width="1000px"
            height="100%"></iframe>
</div>  
                </div>
            <Footer />
        </div>
    )
};

export default News;
