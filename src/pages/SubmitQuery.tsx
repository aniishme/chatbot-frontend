import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [incident, setIncident] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Query:", query);
    console.log("Incident:", incident);
    // You can handle the submission here, e.g., sending it to a backend server
  };

  return (
    <div className="App">
      <div className="max-w-md mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium text-gray-700"
            >
              Query Title
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
