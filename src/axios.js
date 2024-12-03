import axios from "axios";

export const user_API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
export const posts = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
