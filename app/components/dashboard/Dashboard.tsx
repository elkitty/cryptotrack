import Chart from "../chart/Chart";
import Navbar from "./Navbar";
import StatCards from "./StatCards";
import WatchList from "./Watchlist";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white ">
      <Navbar />
      <div className="px-6 py-4 flex flex-col gap-4">
        <StatCards />
        <div className="flex">
          <div className="w-2/3">
            <Chart />
          </div>
          <div className="w-1/3">
            <WatchList />
          </div>
        </div>
        <div>alerts</div>
      </div>
    </div>
  );
};

export default Dashboard;
