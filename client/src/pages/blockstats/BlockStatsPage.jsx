import React, { useState } from "react";
import * as echarts from "echarts";

import { Grid, Typography, Box, Button } from "@mui/material";

import BlocksChart from "./components/chart/BlocksChart";
import TransactionChart from "./components/chart/TransactionChart";
import ChannelMenu from "./components/filter/ChannelMenu";
import SelectDate from "./components/filter/SelectDate";
import StartCalendar from "./components/filter/StartCalendar";
import EndCalendar from "./components/filter/EndCalendar";

import { getBlockStats, getTransactionStats, getStatsByCalendarDate } from "../../api/blockStatsAPI";

// Reducer
import { useDispatch, useSelector } from "react-redux";
import { getDataAsync } from "../../redux/blockStatsReducer"

export const BlockStatsPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // 자식 -> 부모로 props를 받음
  const [startData, setStartData] = useState();
  const [endData, setEndData] = useState();
  const [channelData, setChannelData] = useState();
  const [selectData, setSelectData] = useState();

  // console.log("startData\n", startData);
  // console.log("endData\n", endData);
  // console.log("channelData\n", channelData);
  // console.log("selectData\n", selectData);

  // 부모 -> 자식 전달한 props
  const [blockCount, setBlockCount] = useState()
  const [blockDateTime, setBlockDateTime] = useState()
  const [transactionCount, setTransactionCount] = useState()
  const [transactionDateTime, setTransactionDateTime] = useState()

  // console.log("blockCount", blockCount)
  // console.log("blockDateTime", blockDateTime)
  // console.log("transactionCount", transactionCount)
  // console.log("transactionDateTime", transactionDateTime)

  const getClientData = async () => {
    try {
      // Block Stats 데이터 hour, day, month value를 params로 넘겨 GET으로 받아옴
      await getBlockStats({ selectData })
        .then((response) => {
          const count = response.map((v) => {
            return v.count
          })
          const dateTime = response.map((v) => {
            return v.datetime
          })
          setBlockCount(count)
          setBlockDateTime(dateTime)
        }).catch((e) => {
          console.warn("Failed loaded Data")
        })

      // Transaction Stats 데이터 hour, day, month value를 params로 넘겨 GET으로 받아옴
      await getTransactionStats({ selectData })
        .then((response) => {
          const count = response.map((v) => {
            return v.count
          })
          const dateTime = response.map((v) => {
            return v.datetime
          })
          setTransactionCount(count)
          setTransactionDateTime(dateTime)
        }).catch((e) => {
          console.warn("Failed loaded Data")
        })

      // Block, Transaction Stats Data를 Calendar에서 선택한 value를 params로 넘겨 GET으로 받아옴
      await getStatsByCalendarDate({ channelData, startData, endData })
        .then((response) => {
          const result = response
          console.log("result", result)
        }).catch((e) => {
          console.warn("Failed loaded Data")
        })

      dispatch(getDataAsync());

    } catch (e) {
      console.error(e)
    }
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
            <BlocksChart
              echarts={echarts}
              setLoading={setLoading}
              channelData={channelData}
            />
          </Box>

        </Grid>

        {/* Transaction 차트 */}
        <Grid item xs={11}>
          <Box>
            <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
              Transactions
            </Typography>
            <TransactionChart
              echarts={echarts}
              setLoading={setLoading}
              channelData={channelData}
            />
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
};
