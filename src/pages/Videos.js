// src/components/Navbar.js
import React from 'react';
import Navbar from '../components/NavBar';
import VideoPreview from '../components/Videos/VideoPreview';
import Footer from '../components/Footer';
import EpisodeList from '../components/Videos/EpisodeList';
import DMB from '../data/DMB'
import LB from '../data/LB'
import CW from '../data/CW'
import PD from '../data/PD'
import Creepys from '../data/Creepys'
import Jueguemos from '../data/Jueguemos'
import episodes from '../data/episodes';
import Extras from '../data/extra';
import Lost from '../data/lost';
import Trailers from '../data/trailers';
import './Scroll.css'

const Videos = () => {
    return(
        <div>
            <Navbar />
            <VideoPreview episodes={ episodes }/>
            <h2 className="episode-list-title">Dúper Mario Bros</h2>
            <EpisodeList episodes={ DMB } />
            <h2 className="episode-list-title">LegoBob</h2>
            <EpisodeList episodes={ LB } />
            <h2 className="episode-list-title">El Chow del Weirdo</h2>
            <EpisodeList episodes={ CW } />
            <h2 className="episode-list-title">Preguntas Dimensionales</h2>
            <EpisodeList episodes={ PD } />
            <h2 className="episode-list-title">Creepypastas</h2>
            <EpisodeList episodes={ Creepys } />
            <h2 className="episode-list-title">Jueguemos A...</h2>
            <EpisodeList episodes={ Jueguemos } />
            <h2 className="episode-list-title">Extras</h2>
            <EpisodeList episodes={ Extras } />
            <h2 className="episode-list-title">Trailers</h2>
            <EpisodeList episodes={ Trailers } />
            <h2 className="episode-list-title">Lost Media</h2>
            <EpisodeList episodes={ Lost } />
            <Footer />
        </div>
    )
};

export default Videos;