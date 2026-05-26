"use client";
import { useEffect, useState } from "react";
import { useAlerts } from "@/app/hooks/useAlerts";
import { useCoins } from "@/app/hooks/useCoins";

const Alerts = () => {
  const [targetPrice, setTargetPrice] = useState<number>(0);
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
    <div>
      <form>
        <input
          type="number"
          placeholder="Target Price"
          value={targetPrice}
          onChange={(e) => setTargetPrice(Number(e.target.value))}
        />
        <select value={coinName} onChange={(e) => setCoinName(e.target.value)}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </select>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value as "above" | "below")}
        >
          <option value="above">Above</option>
          <option value="below">Below</option>
        </select>
        <button
          type="button"
          onClick={() => addAlert({ coinName, targetPrice, condition })}
        >
          Add Alert
        </button>
      </form>
      {alerts.map((alert) => (
        <div key={alert.id}>
          <p>{alert.coinName}</p>
          <p>{alert.targetPrice}</p>
          <p>{alert.condition}</p>
          <button onClick={() => deleteAlert(alert.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
