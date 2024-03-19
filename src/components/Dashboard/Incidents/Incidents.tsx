import React from "react";

const Incidents: React.FC = () => {
  const incidents = [
    { type: "fire", count: 0 },
    { type: "flood", count: 0 },
    { type: "earthquake", count: 0 },
    { type: "landslide", count: 0 },
  ];
  return (
    <div className=" p-4 bg-slate-100 border-2 rounded w-72 self-end">
      <h2 className="text-lg border-b-2 border-gray-400">Incidents Reported</h2>
      <div className="flex flex-col gap-2 mt-5">
        {incidents.map((incident) => (
          <div className="flex justify-between text-lg">
            <p>{incident.type.toUpperCase()}</p>
            <p>{incident.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incidents;
