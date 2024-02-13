// ChatInput.tsx
import React, { useState } from "react";

interface ChatInputProps {
  onSubmitMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <input
        type="text"
        value={message}
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
