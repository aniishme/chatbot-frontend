import React, { useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { QueryData } from "../../../types";

const UserQuery: React.FC = () => {
  const [data, setData] = useState<QueryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/query");
        setData(response.data);
        const responseString = JSON.stringify(response);
        localStorage.setItem("queries", responseString);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 font-medium text-gray-500 uppercase tracking-wider">
                <div>Name</div>
                <div>Title</div>
                <div>Type</div>
                <div>Description</div>
              </div>
              <div className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-4">
                    <div>{item.name}</div>
                    <div>{item.title}</div>
                    <div>{item.type}</div>
                    <div>{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserQuery;
