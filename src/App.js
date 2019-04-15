import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ChatApp from "./components/Chat/ChatApp";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import firebase from "./config/fbConfig";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            {/* <Route path="/" component={ChatBoard} /> */}
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
