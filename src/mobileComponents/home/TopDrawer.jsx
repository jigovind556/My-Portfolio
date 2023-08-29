import React from 'react';
import './TopDrawer.css';
import cameraIcon from '../../images/camera-icon.png';
const TopDrawer = () => {
  return (
    <div className="top-drawer">

      <div className="left-section">
      <img src={cameraIcon} alt="Camera Icon" className="camera-icon" />
        <div className="time">{getCurrentTime()}</div>
        <div className="network">Wi-Fi</div>
      </div>
      <div className="right-section">
        <div className="battery-icon">
          <i className="fas fa-battery-full"></i>
          <span className="battery-percent">{getBatteryLevel()}%</span>
        </div>
      </div>
    </div>
  );
}

const getCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const getBatteryLevel = () => {
  // Replace this with your logic to get the actual battery level
  return 75;
};

export default TopDrawer;
