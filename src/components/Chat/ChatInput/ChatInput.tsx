// ChatInput.tsx
import React, { useState } from "react";
import { Message } from "../../../types";
import { getAnswer } from "../../../utils/chatbot";

interface ChatInputProps {
  onSubmitMessage: (message: Message) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState<Message>({ text: "", sender: "user" });
  const [enableQueries, setEnableQueries] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ text: event.target.value, sender: "user" });
  };

  const handleSubmitWithQueries = async () => {
    const queries = localStorage.getItem("queries");
    const payload = `${message.text} Data:${queries}`;
    const answer = await getAnswer(payload);
    onSubmitMessage({ text: answer?.output_text, sender: "bot" });
  };
  console.log(enableQueries);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitMessage(message);
    setMessage({ text: "", sender: "user" });
    if (enableQueries) {
      handleSubmitWithQueries();
    } else {
      const answer = await getAnswer(message.text);
      onSubmitMessage({ text: answer?.output_text, sender: "bot" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center ">
      <input
        type="checkbox"
        checked={enableQueries}
        onChange={(e) => setEnableQueries(e.target.checked)}
        placeholder="Type your message..."
        className="border border-gray-300 rounded-lg px-2 py-2 mr-2 "
      />
      <label className="px-2 py-2 ">Submit With Data</label>
      <input
        type="text"
        value={message.text}
        onChange={handleChange}
        placeholder="Type your message..."
        className="border border-gray-300 rounded-lg px-4 py-2 mr-2 w-96"
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
