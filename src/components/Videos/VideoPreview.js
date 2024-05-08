import React, { useState, useEffect } from 'react';
import './VideoPreview.scss'; // You can create a CSS file for styling
import { Link } from 'react-router-dom';

const VideoPreview = ({ episodes }) => {
  const [episodeData, setEpisodeData] = useState(null);

  // Simulate fetching episode data (replace with actual data retrieval logic)
  useEffect(() => {
    // Select a random episode
    const randomEpisode = episodes[Math.floor(Math.random() * episodes.length)];
    setEpisodeData(randomEpisode);
  }, [episodes]);

  if (!episodeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="episode-preview-container">
      <div className="background-image" style={{ backgroundImage: `url(${episodeData.backgroundImage})` }}>
        <div className="gradient-overlay" />
        <div className="content">
          <img src={episodeData.seriesLogo} alt="Series Logo" className="series-logo" />
          <h2 className="title">{episodeData.title}</h2>
          <p className="description">{episodeData.description}</p>
          <Link key={episodeData.id-1} to={`/videos/${episodeData.section}/${episodeData.id-1}`}>
          <button className="play-button">
            <span className="play-icon">▶</span> Ver Episodio
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
