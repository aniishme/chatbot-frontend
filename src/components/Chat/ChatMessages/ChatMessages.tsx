// ChatMessages.tsx
import React from "react";

interface ChatMessagesProps {
  messages: string[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-2 w-1/2">
      {messages.map((message, index) => (
        <div key={index} className="bg-gray-200 rounded-lg px-4 py-2">
          {message}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
