import axios from "axios";
import { API_KEY, BASE_URL } from "../data";

const axiosWithAuth = axios.create({
  baseURL: BASE_URL,
  headers: { apikey: API_KEY },
});

export default axiosWithAuth;
