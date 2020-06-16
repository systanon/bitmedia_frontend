import axios from "axios";
import { LIMIT } from "../constants";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const HttpServices = {
  getUsers: (page = 1, limit = LIMIT) => {
    return instance.get(`/users?_page=${page}&_limit=${limit}`).then((res) => {
      const { results, total } = res.data;
      return { total, users: results };
    });
  },
  getUserStatistic: (id) => {
    return instance
      .get(`/users/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  },
};
