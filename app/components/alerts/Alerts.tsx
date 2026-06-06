"use client";
import { useEffect, useState } from "react";
import { useAlerts } from "@/app/hooks/useAlerts";
import { useCoins } from "@/app/hooks/useCoins";

const Alerts = () => {
  const [targetPrice, setTargetPrice] = useState<number | "">("");
  const [coinName, setCoinName] = useState<string>("");
  const [condition, setCondition] = useState<"above" | "below">("above");

  const { alerts, addAlert, deleteAlert } = useAlerts();

  const { data: coins = [] } = useCoins();

  useEffect(() => {
    console.log("coins:", coins);
    if (coins.length > 0 && coinName === "") {
      setCoinName(coins[0].name);
    }
  }, [coins]);

  return (
    <div className="bg-gray-900 rounded-xl p-6 mt-4">
      <form className="flex w-full gap-3 items-center">
        <input
          type="number"
          placeholder="Target price (USD)"
          value={targetPrice}
          onChange={(e) => setTargetPrice(Number(e.target.value))}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
        />
        <select
          value={coinName}
          onChange={(e) => setCoinName(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
        >
          {coins.map((coin) => (
            <option key={coin.id} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </select>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value as "above" | "below")}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
        >
          <option value="above">Above</option>
          <option value="below">Below</option>
        </select>
        <button
          type="button"
          onClick={() => addAlert({ coinName, targetPrice, condition })}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap"
        >
          Add Alert
        </button>
      </form>
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="flex justify-between items-center mt-4 gap-6 px-3 py-3 border border-gray-700 bg-gray-800/50 rounded-lg "
        >
          <div className="flex items-baseline gap-4">
            <p className="text-medium font-bold">{alert.coinName}</p>
            <span
              className={
                alert.condition === "above"
                  ? "text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs"
                  : "text-red-400 bg-red-400/10 px-2 py-1 rounded text-xs"
              }
            >
              {alert.condition === "above" ? "▲ above" : "▼ below"}
            </span>

            <p className="text-sm font-medium">${alert.targetPrice.toFixed(2)}</p>
          </div>
          <button onClick={() => deleteAlert(alert.id)} className="bg-gray-800 border border-gray-700 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap hover:bg-gray-700 transition-colors">✕</button>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
