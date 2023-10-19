// right.js
import React, { useState, useEffect, useRef } from "react";
import "./right.css";
import ColorPicker from "../right/colorPicker";
import ShowTime from "../right/showTime";
import Third from "../right/third";

const Right = (props) => {
  const [screenSize, setScreenSize] = useState("large");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const autoCloseTimeout = useRef(null);
  useEffect(() => {
    function checkScreenWidthAndRedirect() {
      if (window.innerWidth > 768) {
        setScreenSize("large");
      } else if (window.innerWidth >= 600) {
        setScreenSize("medium");
      } else {
        setScreenSize("small");
      }
    }

    window.addEventListener("load", checkScreenWidthAndRedirect);
    window.addEventListener("resize", checkScreenWidthAndRedirect);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("load", checkScreenWidthAndRedirect);
      window.removeEventListener("resize", checkScreenWidthAndRedirect);
    };
  }, []);
  useEffect(() => {
    return () => {
      
      if (!isPopupOpen) {
        
        autoCloseTimeout.current = setTimeout(() => {
          var temp=document.querySelector(".popup-buttons");

          if(temp) temp.classList.add("closing");
          setTimeout(() => {
            setIsPopupOpen(false);
          }, 270);
        }, 3000);
        return () => {
          clearTimeout(autoCloseTimeout.current);
        };
      }
    };
  }, [isPopupOpen]);

  const handleClick = (comp) => {
    // console.log("Component opened: " + comp);
    const components = ["showTime", "colorPicker", "third"];
    props.openPopup(`right/${components[comp]}`);
  };

  const handleTriangleClick = () => {
    // Show/hide the popup buttons here
    if (isPopupOpen) {
      // Add the closing class to trigger the slideOut animation
      document.querySelector(".popup-buttons").classList.add("closing");
      setTimeout(() => {
        setIsPopupOpen(false);
      }, 270);
    } else {
      if(autoCloseTimeout.current!=null) clearTimeout(autoCloseTimeout.current);
      setIsPopupOpen(!isPopupOpen);
    }
    
  };

  switch (screenSize) {
    case "large":
      return (
        <div className="side-items">
          <div className="square-div">{<ShowTime />}</div>
          <div className="square-div">
            <ColorPicker theme={props.theme} setTheme={props.setTheme} />
          </div>
          <div className="square-div">{<Third />}</div>
        </div>
      );

    case "medium":
      return (
        <div className="side-items">
          <div className="square-div" onClick={() => handleClick(0)}>
            <Rbutton content={"show time"} />
          </div>
          <div className="square-div" onClick={() => handleClick(1)}>
            <Rbutton content={"color Picker"} />
          </div>
          <div className="square-div" onClick={() => handleClick(2)}>
            <Rbutton content={"third"} />
          </div>
        </div>
      );

    default:
      return (
        <div className="small-screen">
          <div className="triangle-button" onClick={handleTriangleClick}></div>
          {isPopupOpen && (
            <div className="popup-buttons">
              <div className="square-div" onClick={() => handleClick(0)}>
                <Rbutton content={"Show Time"} />
              </div>
              <div className="square-div" onClick={() => handleClick(1)}>
                <Rbutton content={"Color Picker"} />
              </div>
              <div className="square-div" onClick={() => handleClick(2)}>
                <Rbutton content={"Third"} />
              </div>
            </div>
          )}
        </div>
      );
  }
};

const Rbutton = ({ content }) => {
  return <>{content}</>;
};

export default Right;
