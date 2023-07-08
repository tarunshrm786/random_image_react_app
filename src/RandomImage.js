import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file here

const RandomImage = () => {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/500');
      setImageURL(response.request.responseURL);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="random-image-container">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <img className="random-image" src={imageURL} alt="Random" />
      )}
    </div>
  );
};

export default RandomImage;



