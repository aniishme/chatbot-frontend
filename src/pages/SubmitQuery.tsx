import { useState } from "react";
import { api } from "../utils/api";

function App() {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [incident, setIncident] = useState("");
  const [incidentType, setIncidentType] = useState("");

  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setQuery("");
    setIncident("");
    setIncidentType("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      name: name,
      title: query,
      type: incidentType,
      description: incident,
    };

    try {
      const response = await api.post("/query/", payload);
      console.log(response);
      if (response.status === 200) {
        setMessage("Query Submitted");
      }
      clearForm();
    } catch (err: any) {
      setMessage(err.response.data.detail);
    }
  };

  return (
    <div className="App">
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Submit Query
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium text-gray-700"
            >
              Query Topic
            </label>
            <input
              type="text"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="incidentType"
              className="block text-sm font-medium text-gray-700"
            >
              Incident Type
            </label>
            <select
              id="incidentType"
              value={incidentType}
              onChange={(e) => setIncidentType(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select an incident type</option>
              <option value="earthquake">Earthquake</option>
              <option value="flood">Flood</option>
              <option value="landslide">Landslide</option>
              <option value="fire">Fire</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="incident"
              className="block text-sm font-medium text-gray-700"
            >
              Query Details
            </label>
            <textarea
              id="incident"
              value={incident}
              onChange={(e) => setIncident(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={3}
            ></textarea>
          </div>
          {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 shadow-sm hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
