import axios from "axios";
import client from "./client";

export const dashboardAPI = async () => {
  return await axios.get(`http://localhost:5000/dashboard`);
};
