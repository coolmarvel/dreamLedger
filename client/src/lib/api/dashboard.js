import axios from "axios";

// Search Api
export const getData = async () => {
  // const selectUrl = "http://localhost:4000/data";
  const selectUrl = "http://localhost:5000/dashboard";
  const response = await axios.get(selectUrl);
  return response.data;
};
