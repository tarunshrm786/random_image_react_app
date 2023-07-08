
import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButton = ({ url, imageUrl }) => {
  const handleShare = (platform) => {
    navigator.clipboard.writeText(imageUrl);
    console.log(`Image URL copied to clipboard: ${imageUrl}`);
    console.log(`Sharing on ${platform}: ${url}`);
  };

  return (
    <div className="share-button">
      <FacebookShareButton url={url} onClick={() => handleShare('Facebook')}>
        <button>Share on Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={url} onClick={() => handleShare('Twitter')}>
        <button>Share on Twitter</button>
      </TwitterShareButton>
      <WhatsappShareButton url={url} onClick={() => handleShare('WhatsApp')}>
        <button>Share on WhatsApp</button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButton;
