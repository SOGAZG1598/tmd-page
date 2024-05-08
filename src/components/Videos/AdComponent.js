import React, { useEffect } from 'react';


const AdComponent = () => {
    useEffect(() => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);
  
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3081463517624663" // Replace with your AdSense publisher ID
        data-ad-slot="3767297457" // Replace with your ad slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  };

  export default AdComponent;