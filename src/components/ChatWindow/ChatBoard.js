import React, { Component } from "react";
import MessageWindow from "./MessageWindow";
import Message from "./Message";
class ChatBoard extends Component {
  render() {
    return (
      <div className="chatboard container">
        <div className="row">
          <div className="col s12 m6">
            <p>chats</p>
            <MessageWindow />
            <div className="col s12 m5 offset-m1" />
            <p>MessageWindow</p>
            <Message />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBoard;
