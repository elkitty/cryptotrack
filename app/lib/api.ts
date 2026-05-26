import { Coin } from "../types";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoins = async (): Promise<Response> => {
  return fetch(`${BASE_URL}/coins/markets?vs_currency=usd`);
};

export const getCoinHistory = async (
  id: string,
  days: number,
): Promise<Response> => {
  return fetch(
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}`,
  );
};

export const calculateTotalMarketCap = (coins: Coin[]) => {
  return coins.reduce((acumulador, coin) => {
    return acumulador + coin.market_cap;
  }, 0);
};

export const calculateTotalVolume = (coins: Coin[]) => {
  return coins.reduce((acumulador, coin) => {
    return acumulador + coin.total_volume;
  }, 0);
};

export const calculateBTCDominance = (coins: Coin[]) => {
  const bitcoin = coins.find((coin) => coin.id === "bitcoin");
  const totalMarketCap = calculateTotalMarketCap(coins);
  if (bitcoin) {
    return (bitcoin.market_cap / totalMarketCap) * 100;
  }
  return 0;
};

export const formatMarketCap = (value: number) => {
   if (value >= 1_000_000_000_000) {
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  }
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  return `$${value.toFixed(2)}`;
};
