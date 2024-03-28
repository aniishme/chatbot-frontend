import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SubmitQuery from "./pages/SubmitQuery";
import ProtectedRoute from "./components/Protected/Protected";
import Home from "./pages/Home";
import ViewUsers from "./pages/ViewUsers";
import CreateRescuer from "./pages/CreateRescuers";

const router = createBrowserRouter([
  {
    path: "/portal",
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
        path: "users",
        element: <ViewUsers />,
      },
      {
        path: "users/create",
        element: <CreateRescuer />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/submit-query",
    element: <SubmitQuery />,
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
