import React, { useState, useEffect } from 'react';
import './Personajes.scss';


const Personajes = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      if (!Array.isArray(images)) {
        console.error('Images prop is not an array');
        return;
      }
  
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000); // Change image every 10 seconds
  
      return () => clearInterval(timer); // Clean up on component unmount
    }, [images]);
  
    if (!Array.isArray(images) || images.length === 0) {
      return <div>No images provided</div>;
    }
  
    return ( 
    
  <div className='full-screen-element'>
        <div className="text-part">
          <h2>Todo sobre los personajes de TheMarioDimension en esta pestaña!!</h2>
          <h1>Proximamente</h1>
        </div>
        <div className="image-part">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`image ${index === currentImageIndex ? 'fade-in' : 'fade-out'}`}
            />
          ))}
    </div>
        </div>
    );
  };
export default Personajes;