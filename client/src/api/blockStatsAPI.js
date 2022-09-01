import client from "./client";

export const getAlldatas = async (params) => {
  console.log("params", params);

  try {
    const blockResponse = await client
      .get(`/dle/v1/ledger/block/getBy/${"hour"}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((error) => console.error("Failed loaded data", error));

    const transactionsResponse = await client
      .get(`/dle/v1/ledger/transaction/getBy/${"hour"}`)
      .then((res) => {
        return res.data.data;
      })
      .catch((error) => {
        console.error("Failed loaded data", error);
      });

    const channelResponse = await client
      .get(`dle/v1/network/channel`)
      .then((res) => {
        return res.data.data.map((v) => v.name);
      })
      .catch((error) => {
        console.error("Failed loaded data", error);
      });

    return [
      {
        block: blockResponse,
        transaction: transactionsResponse,
        channelList: channelResponse,
      },
    ];
  } catch (error) {
    console.error(error);
  }
};
