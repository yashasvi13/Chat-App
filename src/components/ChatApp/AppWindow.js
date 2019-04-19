import React from "react";
import Navbar from "./Navbar";
import Message from "./Message";
import SideBar from "./SideBar";
import UserList from "./UserList";
const AppWindow = () => (
  <div className="app">
    <div className="row">
      <Navbar />
      <div className="col s3 left">
        <SideBar />
        <UserList />
      </div>
      <div className="col s9 left">
        <Message />
      </div>
    </div>
  </div>
);

export default AppWindow;
