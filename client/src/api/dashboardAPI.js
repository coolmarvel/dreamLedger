import client from "./client";

// 블록 및 트랜잭션 통계데이터 조회
export const getByBlockAndTX = async () => {
  try {
    const blockResponse = await client
      .get(`/dle/v1/ledger/block/getBy/${"second"}`)
      .then((res) => {
        // return res.data.data;
        return res.data.data.map((v) => {
          return { ...v, count: Math.floor(Math.random() * 50) };
        });
      })
      .catch((error) => console.error(error));

    const transactionResponse = await client
      .get(`/dle/v1/ledger/transaction/getBy/${"second"}`)
      .then((res) => {
        return res.data.data.map((v) => {
          return { ...v, count: Math.floor(Math.random() * 50) };
        });
      })
      .catch((error) => console.error(error));

    const channelResponse = await client
      .get(`/dle/v1/network/channel`)
      .then((res) => {
        return res.data.data.map((v) => v.name);
      })
      .catch((error) => console.error("Failed loaded data", error));

    return {
      blockStats: blockResponse,
      transactionStats: transactionResponse,
      channelList: channelResponse,
    };
  } catch (error) {
    console.error(error);
  }
};

// 블록체인 플랫폼의 물리서버 목록 조회
export const getServer = async () => {
  try {
    const response = await client
      .get(`/dle/v1/network/server`)
      .then((res) => res.data)
      .catch((err) => console.error("Failed loaded data", err));
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

// 블록체인 플랫폼의 CA 목록 조회
export const getCAServer = async () => {
  try {
    const response = await client
      .get(`/dle/v1/network/ca`)
      .then((res) => res.data)
      .catch((err) => console.error("Failed loaded data", err));
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

// 블록체인 플랫폼의 Channel 목록 조회
export const getChannelList = async () => {
  try {
    const response = await client
      .get(`/dle/v1/network/channel`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 블록체인 플랫폼의 Orderer 목록 조회
export const getOrderer = async () => {
  try {
    const response = await client
      .get(`/dle/v1/network/orderer`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 블록체인 플랫폼의 Organizations 목록 조회
export const getOrg = async () => {
  try {
    const response = await client
      .get(`/dle/v1/network/organization`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 블록체인 플랫폼의 Peers 목록 조회
export const getPeers = async () => {
  try {
    const response = await client
      .get(`/dle/v1/network/peer`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 블록체인 모든 데이터 조회
export const getAllDatas = async () => {
  try {
    // Server
    const serverResponse = await client
      .get(`/dle/v1/network/server`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));

    // CA
    const CAResponse = await client
      .get(`/dle/v1/network/ca`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));

    // Channel
    const channelResponse = await client
      .get(`/dle/v1/network/channel`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));

    // Orderer
    const ordererResponse = await client
      .get(`/dle/v1/network/orderer`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));

    // Organizations
    const orgsResponse = await client
      .get(`/dle/v1/network/organization`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));

    // Peer
    const peerResponse = await client
      .get(`/dle/v1/network/peer`)
      .then((res) => res.data)
      .catch((error) => console.error("Failed loaded data", error));

    return {
      server: serverResponse.data,
      ca: CAResponse.data,
      channel: channelResponse.data,
      orderer: ordererResponse.data,
      orgs: orgsResponse.data,
      peer: peerResponse.data,
    };
  } catch (error) {
    console.error("Failed loaded data", error);
  }
};

// 블록체인 플랫폼의 리소스(CPU, Memory) 현황을 조회
export const getResources = async () => {
  try {
    const response = await client
      .get(`/dle/v1/metric/container`)
      .then((res) => res.data)
      .catch((err) => console.error("Failed loaded data", err));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 블록데이터 조회
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

  const startTime = week + " " + time; // 일주일 전
  const endTime = today + " " + time; // 현재

  // console.log("startTime\n", startTime);
  // console.log("endTime\n", endTime);

  try {
    const response = await client
      .get("/dle/v1/ledger/block", {
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
        credentials: "include",
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
