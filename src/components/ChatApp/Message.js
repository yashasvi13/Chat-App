import React, { Component } from "react";
import NewMessageForm from "./NewMessageForm";
class Message extends Component {
  render() {
    return (
      <div className="container">
        <NewMessageForm />
      </div>
    );
  }
}

export default Message;
