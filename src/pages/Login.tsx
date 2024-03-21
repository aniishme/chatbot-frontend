import React, { useState } from "react";
import { api } from "../utils/api";

import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isAuthenticated = localStorage.getItem("accessToken");

  if (isAuthenticated) {
    return <Navigate to="/portal/dashboard" />;
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/user/login/", {
        email,
        password,
      });
      console.log(response);
      const accessToken = response.data.access_token;
      const userRole = response.data.role;
      // Store the access token in localStorage or cookies
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("role", userRole);
      // Redirect to the dashboard or home page
      return navigate("/portal/dashboard");
    } catch (err: any) {
      setError(err.response.data.detail);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-md shadow-md">
        <Link to="/" className="text-blue-400">
          {"< Home"}
        </Link>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-12">
          LOGIN
        </h2>
        <form onSubmit={handleLogin} className="w-80">
          <div className="mt-4">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
