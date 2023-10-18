import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function usePreventZoom(scrollCheck = true, keyboardCheck = true) {
  function checkScreenWidthAndRedirect() {
    if (window.innerWidth < 600) {
      window.location.href = 'https://jigovind556.github.io/About-Me/'; // Replace with the URL you want to redirect to
    }
  }

  // Call the function when the page loads
  window.addEventListener('load', checkScreenWidthAndRedirect);

  // Call the function on window resize to handle changes in screen width
  window.addEventListener('resize', checkScreenWidthAndRedirect);
    useEffect(() => {
      const handleKeydown = (e) => {
        if (
          keyboardCheck &&
          e.ctrlKey &&
          ( e.keyCode === "61" ||
            e.keyCode === "107" ||
            e.keyCode === "173" ||
            e.keyCode === "109" ||
            e.keyCode === "187" ||
            e.keyCode === "189")
        ) {
          e.preventDefault();
        }
      };
  
      const handleWheel = (e) => {
        if (scrollCheck && e.ctrlKey) {
          e.preventDefault();
        }
      };
  
      document.addEventListener("keydown", handleKeydown);
      document.addEventListener("wheel", handleWheel, { passive: false });
  
      return () => {
        document.removeEventListener("keydown", handleKeydown);
        document.removeEventListener("wheel", handleWheel);
      };
    }, [scrollCheck, keyboardCheck]);
  }

export default usePreventZoom

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
