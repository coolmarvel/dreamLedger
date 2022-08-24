import React, { useState } from "react";
import * as echarts from "echarts";

import { Grid, Typography, Box, Button } from "@mui/material";

import BlocksChart from "./components/chart/BlocksChart";
import TransactionChart from "./components/chart/TransactionChart";
import ChannelMenu from "./components/filter/ChannelMenu";
import SelectDate from "./components/filter/SelectDate";
import StartCalendar from "./components/filter/StartCalendar";
import EndCalendar from "./components/filter/EndCalendar";

import URL from "../../api/blockStatsAPI";

export const BlockStatsPage = () => {
  const [loading, setLoading] = useState(false);

  // 자식 -> 부모로 props를 받아야함
  const searchData = (props) => {
    console.log(props);
  };

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
                <ChannelMenu />
              </Grid>
            </Box>

            {/* Hour, Day, Month 고르기 */}
            <Box sx={{ marginTop: 1.6 }}>
              <Grid item xs={2}>
                <SelectDate />
              </Grid>
            </Box>

            {/* 시작날짜 달력 */}
            <Grid item xs={2}>
              <StartCalendar searchData={searchData} />
            </Grid>

            {/* 종료날짜 달력 */}
            <Grid item xs={2}>
              <EndCalendar searchData={searchData} />
            </Grid>

            {/* 조회버튼 */}
            <Box sx={{ marginTop: 2 }}>
              <Grid item xs={2}>
                <Button variant="contained" size="large">
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
