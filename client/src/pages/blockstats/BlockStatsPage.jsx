import React, { useState, useEffect } from "react";
import * as echarts from "echarts";

// MUI
import { Grid, Typography, Box, Button } from "@mui/material";

// Component
// import BlocksChart from "./components/chart/BlocksChart";
// import TransactionChart from "./components/chart/TransactionChart";
import Chart from "./components/chart/Chart";
import DatePicker from "./components/filter/DatePicker";
import ChannelMenu from "./components/filter/ChannelMenu";
import SelectTimeOption from "./components/filter/SelectTimeOption";

// Reducer
import { useDispatch, useSelector } from "react-redux";
import { blockStatsActionCreate } from "../../redux/blockStatsReducer";

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
      channelList: blockStatsReducer.blockStats.channelList,
    })
  );

  console.log("blocks\n", blocks);

  const onSearchData = () => {
    setLoading(true);
    dispatch(
      blockStatsActionCreate({
        startDate: startData,
        endDate: endData,
        channelList: channelData,
        timeOption: selectData,
      })
    );
    setLoading(false);
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
                  setLoading={setLoading}
                  channelList={channelList[0]}
                  setChannelData={setChannelData}
                />
              </Grid>
            </Box>

            {/* Hour, Day, Month 고르기 */}
            <Box sx={{ marginTop: 1.6 }}>
              <Grid item xs={2}>
                <SelectTimeOption
                  selectData={selectData}
                  setLoading={setLoading}
                  setSelectData={setSelectData}
                />
              </Grid>
            </Box>

            {/* 시작날짜 달력 */}
            <Grid item xs={2}>
              <DatePicker
                setLoading={setLoading}
                setData={setStartData}
                data={startData}
                label="(시작날짜)"
              />
            </Grid>

            {/* 종료날짜 달력 */}
            <Grid item xs={2}>
              <DatePicker
                data={endData}
                setEndData={setEndData}
                setLoading={setLoading}
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
        {blocks.map((value, index) => {
          <Chart
            key={index}
            data={value}
            echarts={echarts}
            setLoading={setLoading}
            channelData={value.data}
            channelList={value.channelName}
          />;
        })}

        {/* Transactions Chart */}
        {/* {transactionChart.map((value, index) => {
          return (
            <Grid item xs={11}>
              <Box>
                <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
                  {value.channelName}
                </Typography>
                <TransactionChart
                  echarts={echarts}
                  channelData={value.data}
                  setLoading={setLoading}
                />
              </Box>
            </Grid>
          );
        })} */}
      </React.Fragment>
    );
  }
};
