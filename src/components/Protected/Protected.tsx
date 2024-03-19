import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: any }) => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
