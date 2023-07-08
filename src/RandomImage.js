// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css'; // Import the CSS file here

// const RandomImage = () => {
//   const [imageURL, setImageURL] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchRandomImage();
//   }, []);

//   const fetchRandomImage = async () => {
//     try {
//       const response = await axios.get('https://picsum.photos/500');
//       setImageURL(response.request.responseURL);
//       console.log('Image URL---------:', imageURL);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching random image:', error);
//     }
//   };

//   return (
//     <div className="random-image-container">
//       {isLoading ? (
//         <div className="loader"></div>
//       ) : (
//         <img className="random-image" src={imageURL} alt="Random" />
//       )}
//     </div>
//   );
// };

// export default RandomImage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import './App.css'; // Import the CSS file here

const RandomImageWithShareButton = () => {
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

  
const handleShare = async (platform) => {
    if (platform === 'WhatsApp') {
      const whatsappText = `Check out this random image: ${imageURL}`;
      const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`;
      const whatsappShareData = {
        title: 'Random Image',
        text: whatsappText,
        url: window.location.href,
        files: [imageURL],
      };
      try {
        await navigator.share(whatsappShareData);
        console.log(`Sharing on ${platform}: ${whatsappText}`);
      } catch (error) {
        console.error('Error sharing on WhatsApp:', error);
        window.open(whatsappURL, '_blank');
      }
    } else if (platform === 'Twitter') {
      const twitterText = `Check out this random image: ${imageURL}`;
      const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
      window.open(twitterURL, '_blank');
      console.log(`Sharing on ${platform}: ${twitterText}`);
    } else if (platform === 'Facebook') {
      const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
      window.open(facebookURL, '_blank');
      console.log(`Sharing on ${platform}: ${window.location.href}`);
    } else {
      console.log(`Unsupported platform: ${platform}`);
    }
  
    try {
      await navigator.clipboard.writeText(imageURL);
      console.log(`Image URL copied to clipboard: ${imageURL}`);
    } catch (error) {
      console.error('Error copying image URL to clipboard:', error);
    }
  };


  return (
    <div>
      <div className="random-image-container">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <img className="random-image" src={imageURL} alt="Random" />
        )}
      </div>
      <div className="share-button">
        <FacebookShareButton url={window.location.href} onClick={() => handleShare('Facebook')}>
          <button>Share on Facebook</button>
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href} onClick={() => handleShare('Twitter')}>
          <button>Share on Twitter</button>
        </TwitterShareButton>
        <WhatsappShareButton
          url={window.location.href}
          title="Random Image"
          separator=" - "
          media={imageURL}
          onClick={() => handleShare('WhatsApp')}
        >
          <button>Share on WhatsApp</button>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default RandomImageWithShareButton;

