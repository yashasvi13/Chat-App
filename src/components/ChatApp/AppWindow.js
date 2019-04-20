import React from "react";
import Navbar from "./Navbar";
import Message from "./Message";
import SideBar from "./SideBar";

const AppWindow = () => (
  <div className="app fixed scrollspy">
    <div className="row ">
      <Navbar />
      <div className="col s3 left">
        <SideBar />
      </div>
      <div className="col s9 left">
        <Message />
      </div>
    </div>
  </div>
);

export default AppWindow;
