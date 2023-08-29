import React from 'react';
import './webRoute.css';
const WebRoute = ({ appData }) => {
  return (
    <div className="web-route">
      <iframe src={appData.src} title={appData.appName} className="iframe"></iframe>
    </div>
  );
};

export default WebRoute;
