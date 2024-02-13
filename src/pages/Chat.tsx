import { useState } from "react";
import ChatInput from "../components/Chat/ChatInput/ChatInput";
import ChatMessages from "../components/Chat/ChatMessages/ChatMessages";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmitMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="container mx-auto my-8 w-full">
      <div className="flex flex-col justify-between  items-center bg-white rounded-lg p-4 ">
        <div className=" overflow-scroll h-[500px] w-full">
          <ChatMessages messages={messages} />
        </div>
        <div className=" ">
          <ChatInput onSubmitMessage={handleSubmitMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
