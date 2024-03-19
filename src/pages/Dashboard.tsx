import Incidents from "../components/Dashboard/Incidents/Incidents";

const Dashboard = () => {
  return (
    <div className="container mx-auto my-8 w-full px-4 ">
      <div className="flex flex-col justify-between  items-center bg-white rounded-lg p-4 gap-10">
        <h1 className="text-2xl">DASHBOARD</h1>
        <div className="flex">
          <Incidents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
