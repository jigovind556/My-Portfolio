import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import "./CameraApp.css"; // Import your CSS file

const CameraApp = (props) => {
  const [cameraMode, setCameraMode] = useState("environment"); // 'environment' for back camera, 'user' for front camera
  const [stream, setStream] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [cameraOn, setCameraOn] = useState(true);
  const videoRef = useRef(null);
  console.log(props.appData);
  // Function to toggle between front and back camera modes
  const toggleCameraMode = () => {
    setCameraMode((prevMode) =>
      prevMode === "environment" ? "user" : "environment"
    );
  };

  // Function to start the camera preview
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: cameraMode },
      });
      setStream(stream);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Function to stop the camera preview
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const toggleCamera = () => {
    if (cameraOn) {
      stopCamera();
    } else {
      startCamera();
    }
    setCameraOn((prevStatus) => !prevStatus);
  };

  // Function to capture a photo
  const capturePhoto = () => {
    if (videoRef.current) {
      const photo = videoRef.current.getScreenshot();
      setCapturedPhoto(photo);
    }
  };

  useEffect(() => {
    if (cameraMode && videoRef.current) {
      startCamera();
    }

    return () => {
      stopCamera();
    };
  }, [cameraMode]);

  return (
    <div className="camera-app">
      <div className="camera-preview">
        <div className="camera-frame">
          <Webcam
            className="camera-view"
            ref={videoRef}
            screenshotFormat="image/jpeg"
          />
        </div>
      </div>
      <div className="controls">
        {capturedPhoto && (
          <a href={capturedPhoto} target="_blank" rel="noopener noreferrer">
            <img
              className="captured-photo"
              src={capturedPhoto}
              alt="Captured"
            />
          </a>
        )}
        <button onClick={capturePhoto}>
          <i className="fas fa-camera"></i>
        </button>
        <button onClick={stopCamera}>X</button>
        {/* <button onClick={toggleCameraMode}>
          <i className="fas fa-sync-alt"></i> 
        </button> */}
      </div>
    </div>
  );
};

export default CameraApp;
