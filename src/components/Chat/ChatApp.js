import React, { Component } from "react";
import SearchForm from "../form/SerachForm";
import NewMessageForm from "../form/NewMessageForm";
import ChatList from "./ChatList";
import Message from "./Message";
class ChatApp extends Component {
  render() {
    return (
      <div className="chatboard container">
        <div className="row">
          <div className="col s12 m6">
            <p>chats</p>

            <div className="col s12 m5 offset-m1" />
            <p>MessageWindow</p>
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;
