// ChatInput.tsx
import React, { useState } from "react";
import { Message } from "../../../types";

interface ChatInputProps {
  onSubmitMessage: (message: Message) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState<Message>({ text: "", sender: "user" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ text: event.target.value, sender: "bot" });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitMessage(message);

    setMessage({ text: "", sender: "user" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <input
        type="text"
        value={message.text}
        onChange={handleChange}
        placeholder="Type your message..."
        className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
