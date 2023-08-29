import React from 'react';
import './appIcon.css';

const AppIcon = ({ appData, onClick }) => {

  const openModal = () => {
    onClick(); // Call the onClick handler passed from Home component
  };

  return (
    <div className='app-container' onClick={openModal}>
      <img src={require(`../../../images/${appData.icon}`)} alt={`${appData.appName} Icon`} className='app-icon' />
      <div className='app-name'>
        {appData.appName}
      </div>

      
    </div>
  );
}

export default AppIcon;
