// VideoPlayer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import './VideoPlayer.scss';
import './Scroll.css'
import AdComponent from '../components/Videos/AdComponent'
import DMB from '../data/DMB'
import LB from '../data/LB'
import CW from '../data/CW'
import Creepy from '../data/Creepys'
import PD from '../data/PD'
import Jueguemos from '../data/Jueguemos'
import Extra from '../data/extra'
import Lost from '../data/lost'
import Trailers from '../data/trailers'
import EpisodeList from '../components/Videos/EpisodeList';

const VideoPlayer = ({ episodesData }) => {
  const { episodeId } = useParams();
  const selectedEpisode = episodesData[episodeId]; // Assuming your episodesData is an object with episode IDs as keys

  // Get all episode IDs
  const episodeIds = Object.keys(episodesData);

  // Check if it's the first or last episode
  const isFirstEpisode = episodeId === episodeIds[0];
  const isLastEpisode = episodeId === episodeIds[episodeIds.length - 1];

  var list = DMB

  if (selectedEpisode.section === 'DMB'){
    list = DMB
  } else if (selectedEpisode.section === 'LB'){
    list = LB
  } else if (selectedEpisode.section === 'CW'){
    list = CW
  } else if (selectedEpisode.section === 'Creepy'){
    list = Creepy
  } else if (selectedEpisode.section === 'PD'){
    list = PD
  } else if (selectedEpisode.section === 'Jueguemos'){
    list = Jueguemos
  } else if (selectedEpisode.section === 'Extra'){
    list = Extra
  } else if (selectedEpisode.section === 'Lost'){
    list = Lost
  } else if (selectedEpisode.section === 'Trailers'){
    list = Trailers
  }

  return (
    <div>
    <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3081463517624663"
     crossOrigin="anonymous"></script></head>
      <Navbar />
      <div className="series-info">
        <img className='seriesLogo' src={selectedEpisode.seriesLogo} alt="Series Logo" />
        <div className="episode-details">
          <h2>{selectedEpisode.title}</h2>
          <p>{selectedEpisode.description}</p>
        </div>
      </div>
      <div>
      <AdComponent />
      <iframe title="VideoP" width="1000" height="600"
        src= { selectedEpisode.webUrl } >
      </iframe> 
      <AdComponent />
      </div>
      <div className="button-container">
        
        {isFirstEpisode ? (
          <button className="invisible-button"></button>
        ) : (
          <Link key={selectedEpisode.id-2} to={`/videos/${selectedEpisode.section}/${selectedEpisode.id-2}`}>
            <button className="prev-button">Previous Episode</button>
          </Link>
        )}
        {isLastEpisode ? (
          <button className="invisible-button"></button>
        ) : (
          <Link key={selectedEpisode.id} to={`/videos/${selectedEpisode.section}/${selectedEpisode.id}`}>
            <button className="next-button">Next Episode</button>
          </Link>
        )}
      </div>
      <EpisodeList episodes={ list } />
      <Footer />
    </div>
  );
};

export default VideoPlayer;
