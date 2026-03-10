import React from 'react';
import './LoadingState.css';

const LoadingState = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h2 className="loading-title">Loading Students...</h2>
      <p className="loading-subtitle">Please wait while we prepare the data</p>
    </div>
  );
};

export default LoadingState;
