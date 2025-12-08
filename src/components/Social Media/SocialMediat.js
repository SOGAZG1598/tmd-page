import React from 'react';
import './SocialMediat.scss';
import FB from '../../assets/images/sm/fb.png'
import X from '../../assets/images/sm/x.webp'
import YT from '../../assets/images/sm/yt.png'
import DS from  '../../assets/images/sm/disc.webp'

const SocialMediat = () => {
  const socialMediaLinks = {
    Twitter: 'https://twitter.com/_TMD_2',
    Facebook: 'https://www.facebook.com/profile.php?id=61551168365082',
    YouTube: 'https://www.youtube.com/@tmd2.0',
    Discord: 'https://discord.gg/KWkEGwySbv'
  };

  const socialMediaImages = {
    Twitter: X,
    Facebook: FB,
    YouTube: YT,
    Discord: DS
  };

  const socialMediaColors = {
    Twitter: '#1DA1F2',
    Facebook: '#4267B2',
    YouTube: '#fc0032',
    Discord: '#4751CC'
  };

  return (
    <div className="grid-container">
      {Object.entries(socialMediaLinks).map(([name, url]) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="grid-item" style={{ backgroundColor: socialMediaColors[name] }}>
          <img src={socialMediaImages[name]} alt={name} />
          <p>{name}</p>
        </a>
      ))}
    </div>
  );
};

export default SocialMediat;