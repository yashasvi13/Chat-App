import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

class Navbar extends Component {
  state = {
    signOut: ""
  };
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out"));
  };
  render() {
    return (
      <nav className="nav-wrapper  grey darken-2">
        <div className="container">
          <Link to="/" className="brand-logo left">
            My Chat App
          </Link>
          <Link className="right" to="/login" onClick={this.handleSignOut}>
            Signout
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
