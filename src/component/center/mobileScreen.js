import React, { useContext, useState } from "react";
import ThemeContext from "../../ThemeContext";
import styled, { ThemeProvider } from "styled-components";
import "./mobileScreen.css";
import Home from "../../mobileComponents/home/home";
import TopDrawer from "../../mobileComponents/home/TopDrawer";
import { appDataList } from "../../appDataList";
import AppDetailsModal from "../../mobileComponents/home/widjets/appModel/AppDetailsModal";

const MobileScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [routenum, setRoutenum] = useState(0);
  const onClose=()=>{
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
      <ThemeProvider theme={theme}>
        <MobileContainer className={`mobile-screen ${theme}`}>
          {/* <div className="border-image"></div> */}
          <div className="screen-content">
            <TopDrawer />
            <div className="app-content">{renderComponent()}</div>
          </div>
        </MobileContainer>
      </ThemeProvider>
    </div>
  );
};

const MobileContainer = styled.div`
  background: linear-gradient(
    to left,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  /* Other mobile screen styles */
`;

export default MobileScreen;

