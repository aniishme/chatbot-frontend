// ChatInput.tsx
import React, { useState } from "react";
import { Message } from "../../../types";
import { getAnswer } from "../../../utils/chatbot";

interface ChatInputProps {
  onSubmitMessage: (message: Message) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState<Message>({ text: "", sender: "user" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ text: event.target.value, sender: "user" });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitMessage(message);
    setMessage({ text: "", sender: "user" });
    const answer = await getAnswer(
      message.text,
      "AnishSharma_1002163657_Tutorial6"
    );
    onSubmitMessage({ text: answer?.response, sender: "bot" });
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
