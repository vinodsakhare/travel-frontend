import React from "react";
import './Chat.css';
import ChatSideNav from '../components/ChatSideNav';
import ChatBody from "../components/ChatBody";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";


const Chat = () => {
    return (
      <div className="chat-page">
        {/* <ChatSideNav/>
        <ChatBody/> */}
        <PersistentDrawerLeft />
      </div>
    );
  };
  
  export default Chat;
  