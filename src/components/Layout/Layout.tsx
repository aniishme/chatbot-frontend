import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { LayoutChild } from "../../types";

const Layout: React.FC<LayoutChild> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow w-full">{children}</div>
    </div>
  );
};

export default Layout;
