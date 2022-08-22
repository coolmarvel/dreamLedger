import client from "./client";
import URL from "./url";

// READ API

const order_currency = "BTC";
const eth = "eth";
const payment_currency = "KRW";

export const getData = async () => {
  try {
    const response = await URL.get(`/${order_currency}_${payment_currency}`)
      // .then((res) => res.json())
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getEth = async () => {
  try {
    const response = await URL.get(`/${eth}_${payment_currency}`)
      // .then((res) => res.json())
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));
    return response.data;
  } catch (e) {
    console.error(e);
  }
};


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

// export const getData = async () => {
  
// Swagger Format 
// "startDate": "2022-08-01 00:00:00",
// "endDate": "2023-08-01 00:00:00"

//   // 현재 시간
//   const today = new Date(+new Date() + 3240 * 10000)
//     .toISOString()
//     .split("T")[0];

//   // 일주일전 시간
//   const week = new Date(Date.parse(new Date()) - 7 * 1000 * 60 * 60 * 24)
//     .toISOString()
//     .split("T")[0];

//   const time = new Date().toTimeString().split(" ")[0];

//   const startTime = week + " " + time; // 일주일 전
//   const endTime = today + " " + time; // 현재

//   console.log("startTime\n", startTime);
//   console.log("endTime\n", endTime);

//   try {
//     const response = await client
//       .get("/dle/v1/metric/block", {
//         params: {
//           page: 1,
//           size: 20,
//           sort: "createdt-desc",
//           startDate: startTime,
//           endDate: endTime,
//           channel: "channel-dream",
//           blockHash: "string",
//           txid: "string",
//         },
//         credentials: "include", // credentials 옵
//       })
//       .then((res) => {
//         const data = res.data.data;
//         const array = [];
//         array.push(data);
//         return array;
//       })
//       .catch((error) => console.error("Failed loaded data", error));
//     return response;
//   } catch (e) {
//     console.error(e);
//   }
// };