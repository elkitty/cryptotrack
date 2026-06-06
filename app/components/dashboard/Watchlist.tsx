"use client";
import { useCoins } from "@/app/hooks/useCoins";

const Watchlist = () => {
  const { data, loading, error } = useCoins();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-full overflow-y-auto">
      {data?.slice(0, 20).map((coin) => (
        <div key={coin.id} className="flex justify-between gap-4 px-4 py-3 border-b border-gray-800">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">{coin.name}</p>
            <p className="text-xs text-gray-400">{coin.symbol.toUpperCase()}</p>
          </div>
          <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{coin.current_price}</p>
          <p className={
              coin.price_change_percentage_24h > 0
                ? "text-green-400 bg-green-400/10 px-2 py-1 rounded"
                : "text-red-400 bg-red-400/10 px-2 py-1 rounded"
            }
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
