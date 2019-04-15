import React, { Component } from "react";
import SearchForm from "../form/SerachForm";
import NewMessageForm from "../form/NewMessageForm";
import ChatList from "./ChatList";
import Message from "./Message";
import { connect } from "react-redux";
// import { getFirebase } from "react-redux-firebase";
import firebase from "../../config/fbConfig";
import User from "../../store/actions/authActions";

class ChatApp extends Component {
  componentDidMount() {
    console.log("getting firebase");
    // var firebase = require("firebase/database");
    // var firebase = getFirebase();
    // var database = firebase.database();

    this.props.User();

    console.log("start");

    console.log("stop");
  }
  render() {
    return (
      <div className="chatboard container">
        <div className="row">
          <div className="col s12 m6">
            {/* <p>chats</p> */}

            <div className="col s12 m5 offset-m1" />
            {/* <p>MessageWindow</p> */}
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { User }
)(ChatApp);
