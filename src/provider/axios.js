import axios from "axios";

const baseUrl = "https://mmo-games.p.rapidapi.com/";

const header = {
  data: {
    "X-RapidAPI-Key": "631ca707d8mshc88fa974336fc0dp17a9a9jsn9a257c6e4be2",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
};

const getAxios = async (endpoint) => {
  return axios.get(`${baseUrl}${endpoint}`, { headers: header.data });
};

export { getAxios };
