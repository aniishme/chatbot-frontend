import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

interface Rescuer {
  id: string;
  name: string;
  email: string;
  role: string;
}

const ViewUsers = () => {
  const [rescuers, setRescuers] = useState<Rescuer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRescuers = async () => {
      try {
        const response = await api.get("/user/");
        setRescuers(response.data);
      } catch (error) {
        alert("Failed to fetch rescuers");
      }
    };
    fetchRescuers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/user/${id}`);
      setRescuers(rescuers.filter((rescuer) => rescuer.id !== id));
      alert("Rescuer deleted successfully");
    } catch (error) {
      alert("Failed to delete rescuer");
    }
  };
  const redirectToCreateUser = () => {
    navigate("create");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <button
        onClick={redirectToCreateUser}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4"
      >
        Add User
      </button>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rescuers?.map((rescuer) => (
            <tr key={rescuer.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {rescuer.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {rescuer.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {rescuer.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(rescuer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
