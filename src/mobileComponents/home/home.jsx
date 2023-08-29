import React from "react";
import "./home.css";
import AppIcon from "./widjets/appIcon";
import { appDataList } from "../../appDataList";

const Home = (props) => {

  const openModal = (appData,index) => {
    props.setRoutenum(index+1);
  };

  return (
    <div className="app-menu">
      {appDataList.map((appData, index) => (
        <AppIcon
          key={index}
          appData={appData}
          
          onClick={() => openModal(appData,index)}
        />
      ))}

      {/* {isModalOpen && (
        <AppDetailsModal
          appData={selectedAppData}
          onClose={closeModal}
          className={isModalOpen ? "open" : ""} // Apply the 'open' class when the modal is open
        />
      )} */}
    </div>
  );
};

export default Home;
