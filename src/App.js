import React, { Suspense,  useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeContext from "./ThemeContext";
import { defaultTheme } from "./themeColors";
import Left from "./component/main/left";
import Center from "./component/main/center";
import Right from "./component/main/right";
import "./index.css";
import usePreventZoom from ".";
// import MainPopup from "./mainPopup";

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = (comp) => {
    setPopupComponent(comp);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const [popupComponent, setPopupComponent] = useState(null);
  // var comp="colorPicker";
  // useEffect(() => {
  //   return () => {
  //     openPopup(comp);
  //   };
  // }, []);
 
  usePreventZoom();
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* <div className={(popupVal ===0)?"no-main-popup":"main-popup"}>
          <MainPopup theme={theme} setTheme={setTheme} comp={comp}/>
        </div> */}
        <AppContainer className="main-page">
          <Left openPopup={openPopup}/>
          <Center theme={theme} />
          <Right theme={theme} setTheme={setTheme} openPopup={openPopup} />
          {isPopupVisible && (
            <Popup  theme={theme} setTheme={setTheme} closePopup={closePopup}>{popupComponent}</Popup>
          )}
        </AppContainer>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  /* Other global styles */
`;

const Popup = ({theme,setTheme, children, closePopup }) => {

  const DynamicComponent = React.lazy(() =>
    import(`./component/${children}`)
  );
  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closePopup}>
          Close
        </button>
        <Suspense fallback={<div>Loading...</div>}>
        <>
          <DynamicComponent theme={theme} setTheme={setTheme} />
        </>
      </Suspense>
      </div>
    </div>
  );
};

export default App;
