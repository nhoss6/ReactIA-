"use client";
import Messages from "@/components/chat/Messages";
import SendMessage from "@/components/chat/SendMessage";
import Username from "@/components/chat/Username";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import '../../styles/Chat.css';

const socket = io("http://localhost:3000", {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.once("messages-old", (data) => {
      setMessages((msg) => [msg, ...data] as any);
    });

    socket.on("chat-message", (data) => {
      setMessages((msg) => [...msg, data] as any);
    });
  }, []);

  return (
    <div>
      <div className="chat-container">
        <div style={{ backgroundColor: 'grey', padding: '20px', }}>
          <h1 className="chat-header">Chat</h1>
          <p>utilisateur</p>
          <Username socket={socket} setUsername={setUsername} />
          <p>Message</p>
          <SendMessage socket={socket} username={username} />

          <Messages messages={messages} username={username} />
        </div>
      </div>
    </div>
  );
};

export default Chat;

