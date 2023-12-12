import React, { useEffect, useState } from 'react';
import './TopDrawer.css';
import cameraIcon from '../../images/camera-icon.png';
// import batteryLevel from 'battery-level';
const TopDrawer = () => {
  const [ttime, settime] = useState("");
  useEffect(() => {
    setInterval(() => {
      settime(getCurrentTime());
    }, 1000);
    settime(getCurrentTime());
  }, [ttime, settime]);


  const getCurrentTime = () => {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };


  const getBatteryLevel = () => {
    // Replace this with your logic to get the BATTERY LEVEL
 
    // batteryLevel().then(level => {
    //   console.log(level);
    //   //=> 0.55
    // });
    return 75;
  };

  return (
    <div className="top-drawer">

      <div className="left-section">
        <img src={cameraIcon} alt="Camera Icon" className="camera-icon" />
        <div className="time">{ttime}</div>
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


export default TopDrawer;
