import React from 'react';
import "./Loader.css";

const Loader = () => {
  return (
    <div className="vertical-bar-loader">
      {/* <span className="loading-text">Loading...</span> */}
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default Loader;
