import React, { useState, useEffect } from "react";
import * as echarts from "echarts";

// MUI
import { Grid, Typography, Box, Button } from "@mui/material";

// Component
import BlocksChart from "./components/chart/BlocksChart";
import TransactionChart from "./components/chart/TransactionChart";
import DatePicker from "./components/filter/DatePicker";
import ChannelMenu from "./components/filter/ChannelMenu";
import SelectTimeOption from "./components/filter/SelectTimeOption";

// Reducer
import { useDispatch, useSelector } from "react-redux";
import { actionGetData } from "../../redux/blockStatsReducer";

export const BlockStatsPage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [startData, setStartData] = useState(
    new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
  );
  const [endData, setEndData] = useState(new Date());
  const [channelData, setChannelData] = useState([]);
  const [selectData, setSelectData] = useState("hour");

  const { blocks, transactions, channelList } = useSelector(
    ({ blockStatsReducer }) => ({
      blocks: blockStatsReducer.blockStats.blocks,
      transactions: blockStatsReducer.blockStats.transactions,
      channelList: blockStatsReducer.channelList,
    })
  );

  console.log("blocks", blocks);
  console.log("transactions", transactions);
  console.log("channelList", channelList);

  const onSearchData = () => {
    dispatch(
      actionGetData({
        startDate: startData,
        endDate: endData,
        timeOption: selectData,
        channelData: channelData,
      })
    );
  };

  if (loading) {
    <>loading...</>;
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
                  channelList={channelList}
                  channelData={channelData}
                  setChannelData={setChannelData}
                />
              </Grid>
            </Box>

            {/* Hour, Day, Month 고르기 */}
            <Box sx={{ marginTop: 1.6 }}>
              <Grid item xs={2}>
                <SelectTimeOption
                  selectData={selectData}
                  setSelectData={setSelectData}
                />
              </Grid>
            </Box>

            {/* 시작날짜 달력 */}
            <Grid item xs={2}>
              <DatePicker
                data={startData}
                setData={setStartData}
                label="(시작날짜)"
              />
            </Grid>

            {/* 종료날짜 달력 */}
            <Grid item xs={2}>
              <DatePicker
                data={endData}
                setEndData={setEndData}
                label="(종료날짜)"
              />
            </Grid>

            {/* 조회버튼 */}
            <Box sx={{ marginTop: 2 }}>
              <Grid item xs={2}>
                <Button variant="contained" size="large" onClick={onSearchData}>
                  Search
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Block Chart */}
        {/* <BlocksChart data={value} /> */}
        <Grid item xs={11}>
          <Box>
            <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
              Blocks
            </Typography>
            <BlocksChart
              data={blocks}
              echarts={echarts}
              channelList={channelList}
              channelData={channelData}
            />
          </Box>
        </Grid>

        {/* Transactions Chart */}
        {/* <TransactionChart data={value} /> */}
        <Grid item xs={11}>
          <Box>
            <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
              Transactions
            </Typography>
            <TransactionChart
              echarts={echarts}
              data={transactions}
              channelList={channelList}
              channelData={channelData}
            />
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
};
