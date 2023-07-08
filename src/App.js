import React from 'react';
import RandomImage from './RandomImage';
import ShareButton from './ShareButton';
import './App.css'; // Import the CSS file here

const App = () => {
  const currentURL = window.location.href;

  return (
    <div className="app">
      <RandomImage />
      <ShareButton url={currentURL} />
    </div>
  );
};

export default App;
