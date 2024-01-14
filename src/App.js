import React, { Suspense, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { defaultTheme } from "./context/themeColors";
import Left from "./component/main/left";
import Center from "./component/main/center";
import Right from "./component/main/right";
import "./index.css";
import usePreventZoom from ".";
import { PopupProvider } from "./context/popup";
// import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
// import MainPopup from "./mainPopup";

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupComponent, setPopupComponent] = useState(null);

  const openPopup = (comp) => {
    setPopupComponent(comp);
    setIsPopupVisible(true);
  };

  const changeTheme= (theme)=>{
    setTheme(theme)
  }

  const closePopup = () => {
    setIsPopupVisible(false);
  };


  // var comp="colorPicker";
  // useEffect(() => {
  //   return () => {
  //     openPopup(comp);
  //   };
  // }, []);

  usePreventZoom();
  return (
      <ThemeProvider value={{ theme, setTheme:changeTheme }}>
        <PopupProvider value ={{isPopupVisible,openPopup}}>
          <div className="main-page" style={{
            background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`
          }}>
            <Left  />
            <Center />
            <Right theme={theme} setTheme={setTheme} />
            {isPopupVisible && (
              <Popup theme={theme} setTheme={setTheme} closePopup={closePopup}>{popupComponent}</Popup>
            )}
          </div>
        </PopupProvider>
      </ThemeProvider>
  );
}


const Popup = ({ theme, setTheme, children, closePopup }) => {

  const DynamicComponent = React.lazy(() =>
    import(`./component/${children}`)
  );
  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" style={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closePopup}>
          Close
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <>
            <DynamicComponent />
          </>
        </Suspense>
      </div>
    </div>
  );
};
const styles = {
  popup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}

export default App;
