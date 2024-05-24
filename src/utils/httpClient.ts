import axios, { AxiosInstance } from "axios";

const baseURL = process.env.API_URL;

const httpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${sessionStorage
    .getItem("token")
    ?.replace(/^['"]|['"]$/g, "")}`;

  return config;
});

const fetcher = (url: string) => httpClient.get(url).then((res) => res.data);

export { httpClient, fetcher };
