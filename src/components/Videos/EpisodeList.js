import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './EpisodeList.scss'; // Import your CSS file
import leftArrowImage from '../../assets/images/arrow.png'; // Import your left arrow image


const EpisodeList = ({ episodes }) => {
const episodeListRef = useRef(null);

  const scrollLeft = () => {
    episodeListRef.current.scrollBy({
      left: -900, // Adjust the scroll amount based on thumbnail width
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    episodeListRef.current.scrollBy({
      left: 900, // Adjust the scroll amount based on thumbnail width
      behavior: 'smooth',
    });
  };

  return (
    <div className="episode-list" >
      <div className="episode-thumbnails" ref={episodeListRef}>
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="episode-thumbnail"
          >
            <Link key={episode.id} to={`/videos/${episode.section}/${episode.id-1}`}>
              <img src={episode.thumbnailUrl} alt={episode.title} />
              
            </Link>
            <p className="episode-title">{episode.title}</p>
          </div>))}
      </div>
      <button className="scroll-button left" onClick={scrollLeft}>
        <img src={leftArrowImage} alt="Left Arrow" style={{ transform: 'rotate(180deg)' }}/> {/* Use left arrow image */}
      </button>
      <button className="scroll-button right" onClick={scrollRight}>
        <img src={leftArrowImage} alt="Right Arrow"  /> {/* Use right arrow image with 180-degree rotation */}
      </button>
    </div>
  );
};

export default EpisodeList;