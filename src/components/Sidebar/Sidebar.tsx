// Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    return navigate("/");
  };

  return (
    <div className="bg-gray-800 w-64 flex-none">
      <div className="p-4 text-white">
        <h1 className="text-l text-center font-semibold">
          Disaster Decision Support System
        </h1>
        <ul className="mt-10">
          <Link to="/">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Home</li>
          </Link>
          <Link to="/portal/dashboard">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          </Link>
          <Link to="/portal/chatbot">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">ChatBot</li>
          </Link>
          <Link to="/portal/users">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">Users</li>
          </Link>

          <button onClick={handleLogout} className="w-full text-left mt-8">
            <li className="p-2 hover:bg-gray-700 cursor-pointer text-red-400">
              Logout
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
