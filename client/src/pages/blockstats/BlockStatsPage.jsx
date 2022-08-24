import React, { useState } from "react";
import * as echarts from "echarts";

import { Grid, Typography, Box, Button } from "@mui/material";

import BlocksChart from "./components/chart/BlocksChart";
import TransactionChart from "./components/chart/TransactionChart";
import ChannelMenu from "./components/filter/ChannelMenu";
import SelectDate from "./components/filter/SelectDate";
import StartCalendar from "./components/filter/StartCalendar";
import EndCalendar from "./components/filter/EndCalendar";

import Client from "../../api/dashboardAPI";

export const BlockStatsPage = () => {
  const [loading, setLoading] = useState(false);

  // 자식 -> 부모로 props를 받음
  const [startData, setStartData] = useState();
  const [endData, setEndData] = useState();
  const [channelData, setChannelData] = useState();
  const [selectData, setSelectData] = useState();

  console.log("startData\n", startData);
  console.log("endData\n", endData);
  console.log("channelData\n", channelData);
  console.log("selectData\n", selectData);

  // Client API를 통해 리덕스가 아닌 로컬에서 직접 AXIOS GET 통신 해야 할 거 같음
  // params로 위에 자식들에서 받은 props들로 search button function 구현해야함
  const getClientData = () => {
    console.log("getClientData");
  };

  // 그리고 받은 데이터를 가지고 chart 컴포넌트로 props로 전달해서 렌더링해야함

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <React.Fragment>
        {/* Search Filter */}
        <Grid container>
          <Typography
            variant="h5"
            sx={{ marginTop: 3, marginBottom: 3 }}
            align="left"
          >
            Search Filter
          </Typography>

          <Grid container spacing={1}>
            {/* 채널 고르기 */}
            <Box>
              <Grid item xs={2}>
                <ChannelMenu
                  setChannelData={setChannelData}
                  setLoading={setLoading}
                />
              </Grid>
            </Box>

            {/* Hour, Day, Month 고르기 */}
            <Box sx={{ marginTop: 1.6 }}>
              <Grid item xs={2}>
                <SelectDate
                  setSelectData={setSelectData}
                  setLoading={setLoading}
                />
              </Grid>
            </Box>

            {/* 시작날짜 달력 */}
            <Grid item xs={2}>
              <StartCalendar
                setStartData={setStartData}
                setLoading={setLoading}
              />
            </Grid>

            {/* 종료날짜 달력 */}
            <Grid item xs={2}>
              <EndCalendar setEndData={setEndData} setLoading={setLoading} />
            </Grid>

            {/* 조회버튼 */}
            <Box sx={{ marginTop: 2 }}>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={getClientData}
                >
                  Search
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Block 차트  */}
        <Grid item xs={11}>
          <Box>
            <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
              Blocks
            </Typography>
            <BlocksChart echarts={echarts} setLoading={setLoading} />
          </Box>
        </Grid>

        {/* Transaction 차트 */}
        <Grid item xs={11}>
          <Box>
            <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
              Transactions
            </Typography>
            <TransactionChart echarts={echarts} setLoading={setLoading} />
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
};
