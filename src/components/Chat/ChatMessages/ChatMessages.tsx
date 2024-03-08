// ChatMessages.tsx
import React from "react";
import { Message } from "../../../types";

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="w-full flex items-center justify-center overflow-scroll overflow-x-hidden border-b-2 border-blue-500 p-2 ">
      <div className="flex flex-col space-y-5 w-1/2  h-[550px] ">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg flex text-justify  items-center justify-between w-max max-w-full text-base font-semibold ${
              message.sender === "user"
                ? "bg-blue-200  self-end flex-row-reverse"
                : "bg-gray-200"
            }`}
          >
            {" "}
            <p>{message.sender === "user" ? " 👤" : "🤖 "}</p>
            <p className="inline-block break-words max-w-full px-2">
              {message.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
