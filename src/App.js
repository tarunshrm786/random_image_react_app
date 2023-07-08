import React from 'react';
import RandomImage from './RandomImage';
import './App.css'; // Import the CSS file here

const App = () => {

  return (
    <div className="app">
      <RandomImage />
      {/* <ShareButton url={currentURL} /> */}
    </div>
  );
};

export default App;

