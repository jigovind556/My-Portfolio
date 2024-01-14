import React from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";
import useTheme from "../../context/ThemeContext";

const ColorPicker = (props) => {
  const { theme, setTheme }= useTheme();
  const handleColorChange = (color) => {
    setTheme({
      ...theme,
      primary: color,
    });
  };

  const colorOptions = [
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f39c12",
    "#9b59b6",
    "#1abc9c",
  ];

  return (
    <ColorPickerContainer>
      {colorOptions.map((color,index) => (
        <ColorButton
          key={index}
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        />
      ))}
    </ColorPickerContainer>
  );
};

const ColorPickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Corrected flex-wrap property */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${"" /* padding:2vh; */}
  ${"" /* margin-top: 20px; */}
`;

const ColorButton = styled.button`
  width: 24%;
  height: 36%;
  margin: 3%;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none; /* Remove focus outline */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export default ColorPicker;
