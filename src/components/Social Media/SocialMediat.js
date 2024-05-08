import React from 'react';
import './SocialMediat.scss';
import FB from '../../assets/images/sm/fb.png'
import X from '../../assets/images/sm/x.webp'
import TT from '../../assets/images/sm/tt.webp'
import PT from  '../../assets/images/sm/ptrn.png'

const SocialMediat = () => {
  const socialMediaLinks = {
    Twitter: 'https://twitter.com/_TMD_2',
    Facebook: 'https://www.facebook.com/profile.php?id=61551168365082',
    TikTok: 'https://www.tiktok.com/@themariodimension2',
    Patreon: 'https://www.patreon.com/user?u=91132824'
  };

  const socialMediaImages = {
    Twitter: X,
    Facebook: FB,
    TikTok: TT,
    Patreon: PT
  };

  const socialMediaColors = {
    Twitter: '#1DA1F2',
    Facebook: '#4267B2',
    TikTok: '#000000',
    Patreon: '#F96854'
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