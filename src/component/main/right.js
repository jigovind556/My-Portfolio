import React from "react";
import './right.css';
import ColorPicker from "../right/colorPicker";
import ShowTime from "../right/showTime";
const Right = (props) => {
  return (
    <div className="side-items">
      <div className="square-div">{
        <ShowTime/>
      }</div>
      <div className="square-div">
      <ColorPicker theme={props.theme} setTheme={props.setTheme}/>
      </div>
      <div className="square-div">{/* Content */}</div>
    </div>
  );
};

export default Right;
