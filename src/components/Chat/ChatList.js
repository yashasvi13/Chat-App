import React from "react";
import { User } from "../../store/actions/userAction";
import Message from "./Message";

const ChatList = ({ chats }) => {
  return (
    <div className="chat-list section">
      {chats &&
        chats.map(chat => {
          return <Message chat={chat} />;
        })}
    </div>
  );
};

export default ChatList;
