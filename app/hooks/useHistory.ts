import { useEffect, useState } from "react";
import { getCoinHistory } from "../lib/api";
import {  PricePoint } from "../types";

export const useCoinHistory = (coinId: string, days: number) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PricePoint[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const response = await getCoinHistory(coinId, days);
        const coins = await response.json();
        setData(coins);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch coins");
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [coinId, days]);

  return { loading, data, error };
};