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
  // 현재 시간
  const today = new Date(+new Date() + 3240 * 10000)
    .toISOString()
    .split("T")[0];

  // 일주일전 시간
  const week = new Date(Date.parse(new Date()) - 7 * 1000 * 60 * 60 * 24)
    .toISOString()
    .split("T")[0];

  const time = new Date().toTimeString().split(" ")[0];

  const startTime = week + " " + time;
  const endTime = today + " " + time;

  console.log("startTime\n", startTime);
  console.log("endTime\n", endTime);

  try {
    const response = await client
      .get("/dle/v1/metric/block", {
        params: {
          page: 1,
          size: 20,
          sort: "createdt-desc",
          startDate: startTime,
          endDate: endTime,
          channel: "channel-dream",
          blockHash: "string",
          txid: "string",
        },
      })
      .then((res) => {
        const data = res.data.data;
        const array = [];
        array.push(data);
        return array;
      })
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
