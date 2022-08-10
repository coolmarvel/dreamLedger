import axios from "axios";
import client from "./client";

// READ API
export const getData = async () => {
  const response = await axios.get(`http://localhost:4000/data`);
  return response.data;
};

// CREATE UPDATE API
export async function postData(postData) {
  console.log("postData", postData);
  // UPDATE API
  if (postData.data.id !== "" && postData.data.id !== null) {
    const response = await axios.put(
      `http://localhost:4000/data/` + postData.data.id, //data.json 의 id
      {
        id: postData.data.id,
        blocks: parseInt(postData.data.blocks),
        transactions: parseInt(postData.data.transactions),
      }
    );
    return response;
  }

  // CREATE API
  else {
    const response = await axios.post(`http://localhost:4000/data`, {
      id: postData.data.lastId + 1,
      blocks: parseInt(postData.data.blocks),
      transactions: parseInt(postData.data.transactions),
    });
    return response;
  }
}

// DELETE API
export async function removeData(id) {
  const response = await axios.delete(`http://localhost:4000/data/` + id);
  return response;
}

// 실제 API로 쓸것
export const dashboard_API = async () => {
  return await client.get();
};
