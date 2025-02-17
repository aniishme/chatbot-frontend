import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-grow w-full overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
