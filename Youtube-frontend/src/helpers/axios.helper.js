import axios from "axios";
// import { loadProgressBar } from "axios-progress-bar";
// import "axios-progress-bar/dist/nprogress.css";
import { BASE_URL } from "../constants";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Ensure credentials like cookies are sent
});

