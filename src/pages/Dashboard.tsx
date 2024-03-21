// import Incidents from "../components/Dashboard/Incidents/Incidents";
import { useEffect, useState } from "react";
import UserQuery from "../components/Dashboard/UserQueries/UserQuery";
import FileUpload from "../components/Dashboard/FileUpload/FileUpload";

const Dashboard = () => {
  const [role, setRole] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  const handleFileUpload = (message: string) => {
    setMessage(message);
  };
  return (
    <div className="container mx-auto my-8 w-full px-4 ">
      <div className="flex flex-col justify-between  items-center bg-white rounded-lg p-4 gap-10">
        <h1 className="text-2xl">Upload Additional Data </h1>
        {role === "ADM" && (
          <div>
            <FileUpload onUpload={handleFileUpload} />
          </div>
        )}
        <p>{message}</p>
        <h1 className="text-2xl">Submitted Queries by Peoples</h1>

        <div className="flex flex-col items-center justify-center">
          {/* <Incidents /> */}
          <UserQuery />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
