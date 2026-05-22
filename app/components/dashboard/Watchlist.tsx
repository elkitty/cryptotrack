'use client'
import { useCoins } from "@/app/hooks/useCoins"



const Watchlist = () => {
    const { data, loading, error} = useCoins()

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

  return (
    <div>
        {data?.slice(0, 10).map((coin) => (
            <div key={coin.id}>
                <h2>{coin.name} ({coin.symbol})</h2>
                <p>Current Price: ${coin.current_price}</p>
                <p>Market Cap: ${coin.market_cap}</p>
            </div>
        ))}
    </div>
  )
}

export default Watchlist