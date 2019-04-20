import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AppWindow from "./components/ChatApp/AppWindow";
import firebase from "./firebase";
import { setUser, clearUser } from "./components/actions";
class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.props.history.push("/");
        this.props.setUser(user);
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={AppWindow} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
