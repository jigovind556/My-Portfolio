// Left.js
import React, { useEffect, useRef, useState } from "react";
import "./left.css";
import First from "../left/first";
import Second from "../left/second";
import Third from "../right/third";
import usePopup from "../../context/popup";
// import {First ,Second ,Third} from "../left";

const Left = (props) => {
  const [screenSize, setScreenSize] = useState("large");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {openPopup}= usePopup();
  const autoCloseTimeout=useRef(null);
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
    checkScreenWidthAndRedirect();
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
          var temp = document.querySelector(".l-popup-buttons");

          if (temp) temp.classList.add("closing");
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
    console.log("Component opened: " + comp);
    const components = ["first", "second", "third"];
    openPopup(`left/${components[comp]}`);
  };

  const handleTriangleClick = () => {
    if (isPopupOpen) {
      // Add the closing class to trigger the slideOut animation
      document.querySelector(".l-popup-buttons").classList.add("closing");
      setTimeout(() => {
        setIsPopupOpen(false);
      }, 270);
    } else {
      if (autoCloseTimeout.current) {
        clearTimeout(autoCloseTimeout.current);
      }
      setIsPopupOpen(!isPopupOpen);
    }
  };

  switch (screenSize) {
    case "large":
      return (
        <div className="side-items">
          <div className="square-div">{<First/>}</div>
          <div className="square-div">{<Second/>}</div>
          <div className="square-div">{<Third/>}</div>
        </div>
      );
    case "medium":
      return (
        <div className="side-items">
          <div className="square-div" onClick={() => handleClick(0)}>
            <Rbutton content={"Facet"} />
          </div>
          <div className="square-div" onClick={() => handleClick(1)}>
            <Rbutton content={"Projects"} />
          </div>
          <div className="square-div" onClick={() => handleClick(2)}>
            <Rbutton content={<Third/>} />
          </div>
        </div>
      );

    default:
      return (
        <div className="small-screen">
          <div className="l-triangle-button" onClick={handleTriangleClick}></div>
          {isPopupOpen && (
            <div className="l-popup-buttons">
              <div className="square-div" onClick={() => handleClick(0)}>
                <Rbutton content={"First"} />
              </div>
              <div className="square-div" onClick={() => handleClick(1)}>
                <Rbutton content={"Second"} />
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

export default Left;
