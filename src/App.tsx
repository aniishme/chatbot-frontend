import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import UserQuery from "./pages/UserQuery";
import Login from "./pages/Login";
import ProtectedRoute from "./components/Protected/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "chatbot",
        element: <Chat />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "user-query",
        element: <UserQuery />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
