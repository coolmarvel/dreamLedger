import axios from "axios";
import client from "./client";

// READ API
// export const getData = async () => {
//   try {
//     const response = await axios
//       .get(`http://localhost:4000/data`)
//       .then((res) => res.data);
//     return response.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

export const getData = async () => {
  try {
    const response = await client
      .get("/dle/v1/metric/block", {
        params: {
          page: 1,
          size: 20,
          sort: "createdt-desc",
          startDate: "2022-08-08 12:12:12",
          endDate: "2022-08-08 12:12:12",
          channel: "channel-dream",
          blockHash: "string",
          txid: "string",
        },
      })
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));
    return response;
  } catch (e) {
    console.error(e);
  }
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
