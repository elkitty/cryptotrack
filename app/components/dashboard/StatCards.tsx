import StatCard from "./StatCard";



const StatCards = () => {
  return (
    <div className="flex gap-4">
      <StatCard title="Total Market Cap" value="2.41T" change="+3.2% today" />
      <StatCard title="24h Volume" value="$98.7B" change="-1.1% today" />
      <StatCard title="BTC Dominance " value="52.4%" change="+0.8% today" />
      <StatCard title="Active Alerts" value="3" change="1 triggered" />
    </div>
  );
};

export default StatCards;