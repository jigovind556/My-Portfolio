import React, { useState, useEffect, useRef, Suspense } from 'react';
import './AppDetailsModal.css';

const AppDetailsModal = ({ appData, onClose }) => {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const appContentRef = useRef(null); // Create a ref for app-content div
  

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

 

  useEffect(() => {
    const handleScroll = () => {
      if (appContentRef.current && appContentRef.current.scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    if (appContentRef.current) {
      appContentRef.current.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (appContentRef.current) {
        appContentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  // const abc='messages/message.jsx';
  const DynamicComponent = React.lazy(() =>
    import(`../../../appRoutes/${appData.path}`)
  );
  // console.log(appData.path);
  // const DynamicComponent = React.lazy(() => import(`${appData.path}`));

  return (
    <div className={`app-details-modal ${theme}`}>
      <div className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </div>
        <div className="application-name">{appData.appName}</div>
        {appData.type === 'web' && appData.src && (
          <a href={appData.src} target='blank'><div className="external-link-icon" >
            <i className="fas fa-external-link-alt" ></i>
          </div></a>
        )}
        <div className="action-buttons">

          <button className="cut-button" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className="app-content " ref={appContentRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicComponent appData={appData} />
        </Suspense>
        {/* Additional app details */}
      </div>
    </div>
  );
};

export default AppDetailsModal;
