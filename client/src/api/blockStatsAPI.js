import client from "./client";

export const getStatsData = async ({
  startDate,
  endDate,
  timeOption,
  channelData,
}) => {
  console.log("timeOption", timeOption);
  try {
    const blockResponse = await client
      .get(`/dle/v1/ledger/block/getBy/${timeOption}`)
      .then((res) => {
        return res.data.data.map((v) => {
          return { ...v, count: Math.floor(Math.random() * 50) };
        });
      })
      .catch((error) => console.error("Failed loaded data", error));

    const transactionsResponse = await client
      .get(`/dle/v1/ledger/transaction/getBy/${timeOption}`)
      .then((res) => {
        return res.data.data.map((v) => {
          return { ...v, count: Math.floor(Math.random() * 50) };
        });
      })
      .catch((error) => {
        console.error("Failed loaded data", error);
      });

    return {
      block: blockResponse,
      transaction: transactionsResponse,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getChannelList = async () => {
  try {
    const response = await client
      .get(`dle/v1/network/channel`)
      .then((res) => {
        return res.data.data.map((v) => v.name);
      })
      .catch((error) => {
        console.error("Failed loaded data", error);
      });

    return response;
  } catch (error) {
    console.error(error);
  }
};
