// ChatMessages.tsx
import React from "react";
import { Message } from "../../../types";

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col space-y-5 w-1/2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg flex w-max ${
              message.sender === "user"
                ? "bg-blue-200  self-end flex-row-reverse"
                : "bg-gray-200"
            }`}
          >
            {" "}
            <p>{message.sender === "user" ? "👤" : "🤖"}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
