import React from "react";

import { useNavigate } from "react-router-dom";

const FeatureCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
);

const Home: React.FC = () => {
  const navigate = useNavigate();

  const redirectToPortal = () => {
    navigate("/portal/dashboard");
  };
  const redirectToReportForm = () => {
    navigate("/submit-query");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Disaster Decision Support System
      </h1>
      <p className="text-lg text-center max-w-md mb-8">
        Harnessing Chatbot Technology for Effective Disaster Response Management
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <FeatureCard
          title="Chatbot"
          description="Interact with our AI-powered chatbot for immediate assistance and information during emergencies."
        />
        <FeatureCard
          title="Reporting Incidents"
          description="Easily report incidents to rescuers with real-time updates."
        />
        <FeatureCard
          title="Manage Data"
          description="Manage critical data, including incidents and emergency contacts, to streamline response efforts."
        />
      </div>

      <div className="flex gap-12">
        <button
          onClick={redirectToPortal}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Portal Login
        </button>
        <button
          onClick={redirectToReportForm}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Report Queries
        </button>
      </div>
    </div>
  );
};

export default Home;
