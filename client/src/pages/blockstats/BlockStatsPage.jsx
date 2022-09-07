import React, { useState, useEffect } from "react";
import * as echarts from "echarts";

// MUI
import { Grid, Typography, Box, Button } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import { Tabs, Tab } from "@material-ui/core";

// Component
import BlocksChart from "./components/chart/BlocksChart";
import TransactionChart from "./components/chart/TransactionChart";
import ChannelMenu from "./components/filter/ChannelMenu";
// import SelectTimeOption from "./components/filter/SelectTimeOption";
import DayPickCalendar, {
  YearPickCalendar,
} from "./components/filter/DatePicker";
import SelectWeek, {
  SelectMonth,
  SelectQuarter,
} from "./components/filter/SelectBox";

// Reducer
import { useDispatch, useSelector } from "react-redux";
import { actionGetData } from "../../redux/blockStatsReducer";

export const BlockStatsPage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("1");
  // 시작 및 종료일
  const [startDay, setStartDay] = useState(
    new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
  );
  const [endDay, setEndDay] = useState(new Date());
  // 연도 선택
  const [yearData, setYearData] = useState();
  const [endYearData, setEndYearData] = useState();
  // 시작 및 종료주차
  const [startWeek, setStartWeek] = useState(1);
  const [endWeek, setEndWeek] = useState(1);
  // 시작 및 종료월
  const [startMonth, setStartMonth] = useState(1);
  const [endMonth, setEndMonth] = useState(1);
  // 시작 및 종료분기
  const [startQuarter, setStartQuarter] = useState(1);
  const [endQuarter, setEndQuarter] = useState(1);
  // 채널 및 시간선택
  const [channelData, setChannelData] = useState([]);
  const [selectData, setSelectData] = useState("hour");

  const { blocks, transactions, channelList } = useSelector(
    ({ blockStatsReducer }) => ({
      blocks: blockStatsReducer.blockStats.blocks,
      transactions: blockStatsReducer.blockStats.transactions,
      channelList: blockStatsReducer.channelList,
    })
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSearchData = () => {
    dispatch(
      actionGetData({
        startDay: startDay,
        endDay: endDay,
        startWeek: startWeek,
        endWeek: endWeek,
        startMonth: startMonth,
        endMonth: endMonth,
        yearData: yearData,
        endYearData: endYearData,
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
        {/* Tab Panel */}
        <TabContext value={value}>
          <Box xs={{ borderBottom: 1, borderColor: "divider" }}>
            <Typography
              variant="h4"
              xs={{ marginTop: 3, marginBottom: 3 }}
              align="left"
            >
              Statistics
            </Typography>
            <Tabs value={value} onChange={handleChange} aria-label="Tabs">
              <Tab label="일별" value="1" />
              <Tab label="주별" value="2" />
              <Tab label="월별" value="3" />
              <Tab label="분기별" value="4" />
              <Tab label="연별" value="5" />
            </Tabs>
          </Box>

          {/* Search Filter */}
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{ marginTop: 3, marginBottom: 3 }}
                align="left"
              >
                Search Filter
                {/* 조회버튼 */}
                <Button
                  variant="contained"
                  size="medium"
                  onClick={onSearchData}
                  sx={{ marginLeft: 3 }}
                >
                  Search
                </Button>
              </Typography>
            </Grid>

            {/* 채널 고르기 */}
            <Grid item xs={12} md={4}>
              <ChannelMenu
                channelList={channelList}
                channelData={channelData}
                setChannelData={setChannelData}
              />
            </Grid>

            {/* 일별 */}
            <TabPanel value="1" padding="10px">
              {/* 시작날짜 달력 */}
              <Grid item xs={6} md={8}>
                <DayPickCalendar
                  data={startDay}
                  setData={setStartDay}
                  label="(시작일)"
                />
              </Grid>

              {/* 종료날짜 달력 */}
              <Grid item xs={6} md={8}>
                <DayPickCalendar
                  data={endDay}
                  setEndDay={setEndDay}
                  label="(종료일)"
                />
              </Grid>
            </TabPanel>

            {/* 주별 */}
            <TabPanel value="2">
              <Grid item xs={12}>
                {/* 연도 선택 달력 */}
                <YearPickCalendar
                  label="(연도)"
                  data={yearData}
                  setData={setYearData}
                />

                {/* 시작주차 달력 */}
                <SelectWeek
                  label="(시작주차)"
                  data={startWeek}
                  setData={setStartWeek}
                />

                {/* 종료주차 달력 */}
                <SelectWeek
                  label="(종료주차)"
                  data={endWeek}
                  setData={setEndWeek}
                />
              </Grid>
            </TabPanel>

            {/* 월별 */}
            <TabPanel value="3">
              {/* 연도 선택 달력 */}
              <Grid item xs={4} md={12}>
                <YearPickCalendar
                  label="(연도)"
                  data={yearData}
                  setData={setYearData}
                />
              </Grid>

              {/* 시작월 달력 */}
              <Grid item xs={4} md={12}>
                <SelectMonth
                  label="(시작월)"
                  data={startMonth}
                  setData={setStartMonth}
                />
              </Grid>

              {/* 종료월 달력 */}
              <Grid item xs={4} md={12}>
                <SelectMonth
                  label="(종료월)"
                  data={endMonth}
                  setData={setEndMonth}
                />
              </Grid>
            </TabPanel>

            {/* 분기별 */}
            <TabPanel value="4">
              {/* 연도 선택 달력 */}
              <Grid item xs={4} md={12}>
                <YearPickCalendar
                  label="(연도)"
                  data={yearData}
                  setData={setYearData}
                />
              </Grid>

              {/* 시작분기 달력 */}
              <Grid item xs={4} md={12}>
                <SelectQuarter
                  label="(시작분기)"
                  data={startQuarter}
                  setData={setStartQuarter}
                />
              </Grid>

              {/* 종료분기 달력 */}
              <Grid item xs={4} md={12}>
                <SelectQuarter
                  label="(종료분기)"
                  data={endQuarter}
                  setData={setEndQuarter}
                />
              </Grid>
            </TabPanel>

            {/* 연별 */}
            <TabPanel value="5">
              {/* 시작 연도 달력 */}
              <Grid item xs={4} md={12}>
                <YearPickCalendar
                  label="(시작연도)"
                  data={yearData}
                  setData={setYearData}
                />
              </Grid>

              {/* 종료 연도 달력 */}
              <Grid item xs={4} md={12}>
                <YearPickCalendar
                  label="(종료연도)"
                  data={endYearData}
                  setData={setEndYearData}
                />
              </Grid>
            </TabPanel>
          </Grid>

          {/* Block Chart */}
          {/* <BlocksChart data={value} /> */}
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5" xs={{ marginTop: 3 }} align="left">
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
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5" xs={{ marginTop: 3 }} align="left">
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
        </TabContext>
      </React.Fragment>
    );
  }
};

/* Hour, Day, Month 고르기 */

/* 
  <Box xs={{ marginTop: 1.6 }}>
    <Grid item xs={2}>
      <SelectTimeOption
        selectData={selectData}
        setSelectData={setSelectData}
       />
    </Grid>
  </Box> 
*/
