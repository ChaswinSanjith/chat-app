// components/ChatList.js
import React from "react";
import ChatItem from "./ChatItem";
import chats from "../data";

function ChatList() {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          name={chat.name}
          message={chat.message}
          time={chat.time}
          avatar={chat.avatar}
        />
      ))}
    </div>
  );
}

export default ChatList;