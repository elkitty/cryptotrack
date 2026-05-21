export interface Coin {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  image: string
}

export interface PricePoint {
  timestamp: number
  price: number
}

export interface Alert {
  id: string
  coinId: string
  coinName: string
  targetPrice: number
  condition: 'above' | 'below'
  triggered: boolean
}