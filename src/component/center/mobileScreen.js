import React, { useState } from "react";
import "./mobileScreen.css";
import Home from "../../mobileComponents/home/home";
import TopDrawer from "../../mobileComponents/home/TopDrawer";
import { appDataList } from "../../appDataList";
import AppDetailsModal from "../../mobileComponents/home/widjets/appModel/AppDetailsModal";
import useTheme from "../../context/ThemeContext";

const MobileScreen = () => {
  const { theme } = useTheme();
  const [routenum, setRoutenum] = useState(0);
  const onClose = () => {
    setRoutenum(0);
  }
  const renderComponent = () => {
    if (routenum === 0) {
      return <Home setRoutenum={setRoutenum} />;
    } else {
      const selectedAppData = appDataList[routenum - 1];
      return <AppDetailsModal onClose={onClose} appData={selectedAppData} />;
    }
  };
  return (
    <div className="background-image">
        <div className={`mobile-screen ${theme}`} style={{
            background: `linear-gradient(to left, ${theme.primary}, ${theme.secondary})`
          }}>
          {/* <div className="border-image"></div> */}
          <div className="screen-content">
            <TopDrawer />
            <div className="app-content">{renderComponent()}</div>
          </div>
        </div>
    </div>
  );
};

// const MobileContainer = styled.div`
//   background: linear-gradient(
//     to left,
//     ${(props) => props.theme.primary},
//     ${(props) => props.theme.secondary}
//   );
//   /* Other mobile screen styles */
// `;

export default MobileScreen;

