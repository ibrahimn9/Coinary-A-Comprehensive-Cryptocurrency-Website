import axios from "axios";

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

export const getCoins = async () => {
  const options = {
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: "24h",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const { data } = await axios.get(baseUrl, options);
  return data.data.coins;
};
