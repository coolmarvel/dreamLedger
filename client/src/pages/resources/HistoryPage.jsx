import React, { useState } from "react";
import * as echarts from "echarts";
import { Grid, Typography, Box, Button } from "@mui/material";
import BlocksChart from "./components/chart/BlocksChart";
import TransactionChart from "./components/chart/TransactionChart";
import ChannelMenu from "./components/filter/ChannelMenu";
import SelectTimeOption from "./components/filter/SelectTimeOption";

// Reducer
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  actionChannelList,
  actionResourcesHistory,
} from "../../redux/resourcesReducer";
import DateCalendar from "./components/filter/DateCalendar";

export const HistoryPage = () => {
  const dispatch = useDispatch();

  // 상위 페이지의 state를 하위 컴포넌트의 props로 전달하여 그대로 활용
  const [startData, setStartData] = useState(
    new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
  );
  const [endData, setEndData] = useState(new Date());
  const [channelData, setChannelData] = useState([]);
  const [selectData, setSelectData] = useState("hour");

  const { channelList, historyData } = useSelector(({ resourcesReducer }) => ({
    channelList: resourcesReducer.channelList,
    historyData: resourcesReducer.historyData,
  }));

  useEffect(() => {
    // 최초 로드시, 체널 목록을 가져와서 channelList에 저장
    dispatch(actionChannelList());
  }, []);

  const getSearchData = () => {
    dispatch(
      actionResourcesHistory({
        startDate: startData,
        endDate: endData,
        channelList: channelData,
        timeOption: selectData,
      })
    );
  };

  return (
    <>
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
            <DateCalendar
              data={startData}
              setData={setStartData}
              label="(시작날짜)"
            />
          </Grid>

          {/* 종료날짜 달력 */}
          <Grid item xs={2}>
            <DateCalendar
              data={endData}
              setEndData={setEndData}
              label="(종료날짜)"
            />
          </Grid>

          {/* 조회버튼 */}
          <Box sx={{ marginTop: 2 }}>
            <Grid item xs={2}>
              <Button variant="contained" size="large" onClick={getSearchData}>
                Search
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {historyData.map((e, index) => {
        return (
          <Grid item xs={11} key={index}>
            <Box>
              <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
                {e.channelName}
              </Typography>
              <TransactionChart echarts={echarts} channelData={e.data} />
            </Box>
          </Grid>
        );
      })}

      {/*  */}
    </>
  );
};
