import React from "react";
import { Header } from "../Header";
import ModalPlayer from "../ModalPlayer/ModalPlayer.jsx";
import "./styles.scss";
const AppContainer = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ModalPlayer />
        {children}
      </div>
    </div>
  );
};

export default AppContainer;

