const BASE_URL = 'https://api.coingecko.com/api/v3'

export const getCoins = async (): Promise<Response> => {
    return fetch(`${BASE_URL}/coins/markets?vs_currency=usd`);
}

export const getCoinHistory = async (id:string, days:number): Promise<Response> => {
    return fetch(`${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
}