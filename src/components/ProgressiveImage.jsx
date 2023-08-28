import React, { useState, useEffect } from 'react';

const ProgressiveImage = ({ smallImage, largeImage, alt, className,children }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = largeImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [largeImage]);

  const backgroundImage = imageLoaded ? `url(${largeImage})` : `url(${smallImage})`;

  return (
    <div className={className} style={{ backgroundImage:backgroundImage }}>
        {children}
    </div>
      
  );
};

export default ProgressiveImage;
