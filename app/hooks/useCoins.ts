'use client'
import { useEffect, useState } from "react";
import { getCoins } from "../lib/api";
import { Coin } from "../types";

export const useCoins = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Coin[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const response = await getCoins();
        const coins = await response.json();
        setData(coins);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch coins");
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  return { loading, data, error };
};
