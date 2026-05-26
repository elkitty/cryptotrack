'use client'
import StatCard from "./StatCard";
import {calculateTotalVolume, calculateBTCDominance, calculateTotalMarketCap} from "../../lib/api";
import { useCoins }  from "../../hooks/useCoins";
import {formatMarketCap} from "../../lib/api";



const StatCards = () => {
    const { data: coins } = useCoins();
    const totalVolume = calculateTotalVolume(coins);
    const totalMarketCap = calculateTotalMarketCap(coins);
    const BTCDominance = calculateBTCDominance(coins);
                    
  return (
    <div className="flex gap-4">
      <StatCard title="Total Market Cap" value={formatMarketCap(totalMarketCap)} change="+3.2% today" />
      <StatCard title="24h Volume" value={formatMarketCap(totalVolume)} change="-1.1% today" />
      <StatCard title="BTC Dominance " value={`${BTCDominance.toFixed(2)}%`} change="+0.8% today" />
      <StatCard title="Active Alerts" value="3" change="1 triggered" />
    </div>
  );
};

export default StatCards;