import { useState } from "react";
import ChatInput from "../components/Chat/ChatInput/ChatInput";
import ChatMessages from "../components/Chat/ChatMessages/ChatMessages";
import { Message } from "../types";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello, I am a Disaster Decision Support Chatbot. How can I help you?",
      sender: "bot",
    },
  ]);

  const handleSubmitMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="container mx-auto my-8 w-full px-4 ">
      <div className="flex flex-col justify-between  items-center bg-white rounded-lg p-4 ">
        <div className="  h-[600px] w-full">
          <ChatMessages messages={messages} />
        </div>
        <div>
          <ChatInput onSubmitMessage={handleSubmitMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
