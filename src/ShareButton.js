import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButton = ({ url }) => {
  return (
    <div className="share-button">
      <FacebookShareButton url={url}>
        <button>Share on Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <button>Share on Twitter</button>
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <button>Share on WhatsApp</button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButton;
