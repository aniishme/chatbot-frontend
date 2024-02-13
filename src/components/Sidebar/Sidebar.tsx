// Sidebar.tsx
import React from "react";
import Chat from "../../pages/Chat";

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-gray-800 w-64 flex-none">
        <div className="p-4 text-white">
          <h1 className="text-xl font-semibold">Disaster Management</h1>
          <ul className="mt-4 ">
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Data</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Chatbot</li>
          </ul>
        </div>
      </div>
      <div className="flex-grow w-full">
        <Chat />
      </div>
    </div>
  );
};

export default Sidebar;
