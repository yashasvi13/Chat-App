import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ChatApp from "./components/Chat/ChatApp";
import ChatList from "./components/Chat/ChatList";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
// import NewMessageForm from "./components/form/NewMessageForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <ChatList />
          {/* <NewMessageForm /> */}
          <Switch>
            <Route path="/" component={ChatApp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
