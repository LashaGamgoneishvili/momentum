"use server";

import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://momentum.redberryinternship.ge/api",
});

customFetch.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = `Bearer ${process.env.TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
