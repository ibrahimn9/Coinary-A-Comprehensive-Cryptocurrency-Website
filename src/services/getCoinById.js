import axios from "axios";

export const getCoinById = async (id) => {

  const baseUrl = `https://coinranking1.p.rapidapi.com/coin/${id}`;

  const options = {
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: "24h",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const { data } = await axios.get(baseUrl, options);
  return data.data.coin;
};
