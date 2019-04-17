import React, { Component } from "react";
import NewMessageForm from "../form/NewMessageForm";
import ChatList from "./ChatList";
import Message from "./Message";
import { connect } from "react-redux";
import firebase from "../../config/fbConfig";
import { User } from "../../store/actions/userAction";

class ChatApp extends Component {
  componentDidMount() {
    {
      this.props.User();
    }
  }

  render() {
    const { message } = this.props;
    return (
      <div className="chatboard container">
        <div className="row">
          <div className="col s12 m6">
            {/* <p>chats</p> */}

            <div className="col s12 m5 offset-m1" />
            {/* <p>MessageWindow</p> */}
            <Message />
            <NewMessageForm message={message} />
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
