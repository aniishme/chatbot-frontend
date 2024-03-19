// Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 w-64 flex-none">
      <div className="p-4 text-white">
        <h1 className="text-l text-center font-semibold">
          Disaster Decision Support System
        </h1>
        <ul className="mt-4 ">
          <Link to="/dashboard">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          </Link>

          <Link to="/chatbot">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">ChatBot</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
