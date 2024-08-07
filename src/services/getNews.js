const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "41744f7d41224b619edf6fdf19299168";

export const getNews = (searchText) => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
};
