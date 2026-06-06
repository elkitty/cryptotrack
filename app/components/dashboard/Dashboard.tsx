import Alerts from "../alerts/Alerts";
import Chart from "../chart/Chart";
import Navbar from "./Navbar";
import StatCards from "./StatCards";
import WatchList from "./Watchlist";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="flex flex-col flex-1 px-6 py-4 gap-4 overflow-hidden">
        <StatCards />
        <div className="flex flex-1 gap-4 overflow-hidden">
          <div className="w-2/3">
            <Chart />
          </div>
          <div className="w-1/3 overflow-y-auto">
            <WatchList />
          </div>
        </div>
        <Alerts />
      </div>
    </div>
  );
};

export default Dashboard;
