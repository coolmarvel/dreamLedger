import client from "./client";

// @TODO: 실제 API 명세 확인 후 진행 필요

export const getHistory = async ({
  startDate,
  endDate,
  timeOption,
  channelList,
}) => {
  try {
    const response = await client
      .get(`/dle/v1/ledger/transaction/getBy/${timeOption}`, {
        params: {
          // startDate: startDate.toLocaleDateString().replaceAll('.', '').replaceAll(' ', '-'),
          // endDate: endDate.toLocaleDateString().replaceAll('.', '').replaceAll(' ', '-'),
          // channelList: channelList
        },
      })
      .then((res) => {
        // res.data = {result: 'success', data: [{count, datetime}, ...] } 의 포맷 형테로 전달받음
        return [
          {
            channelName: channelList[0],
            data: res.data.data.map((e) => {
              return { ...e, count: Math.floor(Math.random() * 50) };
            }),
          },
        ];
      })
      .catch((error) => {
        console.error("Failed loaded data", error);
      });

    return response;
  } catch (e) {
    console.error(e);
  }
};

export const getStats = async (searchOption) => {
  try {
    const response = await client
      .get("/resources_stats", {
        params: {
          channel_name: searchOption.channel_name,
          per: searchOption.per,
          startDate: searchOption.startDate,
          endDate: searchOption.endDate,
        },
      })
      .then((res) => {
        console.log(res);
        const data = res.data.data;
        const array = [];
        array.push(data);

        return array;
      })
      .catch((error) => {
        console.error("Failed loaded data", error);
      });

    return response;
  } catch (e) {
    console.error(e);
  }
};

// 체널 목록을 가져오는 API
export const getChannelList = async () => {
  try {
    const response = await client
      .get(`/dle/v1/network/channel`, {
        params: {
          // 해당 없음
        },
      })
      .then((res) => {
        const data = res.data.data;

        return data;
      })
      .catch((error) => {
        console.error("Failed loaded data", error);
      });

    return response;
  } catch (e) {
    console.error(e);
  }
};
