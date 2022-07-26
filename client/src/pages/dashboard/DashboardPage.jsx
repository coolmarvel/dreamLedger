import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";

import BlockBar from "./components/chart/BlockBarChart";
import BlockLine from "./components/chart/BlockLineChart";
import TransactionBar from "./components/chart/TransactionBarChart";
import TransactionLine from "./components/chart/TransactionLineChart";
import CpuChart from "./components/chart/CpuChart";
import MemoryChart from "./components/chart/MemoryChart";

import { Tabs, Tab } from "@material-ui/core";
import { Grid, Typography, Box } from "@mui/material";
import { Database, SwapHorizontalBold, Memory, Sd } from "mdi-material-ui";
import { TabPanel, TabContext } from "@mui/lab";

import CardStatisticsVerticalComponent from "./components/card/CardStatisticsVerticalComponent";
import Table from "./components/table/BlockChainInfoTable";

import useInterval from "./utils/useInterval";
import {
  getResourcesData,
  searchDataAsync,
  getAllDatas,
  getStatDatas,
} from "../../redux/dashboardReducer";

export const DashboardPage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("1");

  const { cpu, memory } = useSelector((state) => ({
    cpu: state.dashboardReducer.resources.cpu,
    memory: state.dashboardReducer.resources.memory,
  }));

  const { blocks, transactions } = useSelector((state) => ({
    blocks: state.dashboardReducer.dashboard.blocks,
    transactions: state.dashboardReducer.dashboard.transactions,
  }));

  const { blockStats, transactionStats, channelList } = useSelector(
    (state) => ({
      blockStats: state.dashboardReducer.stats.blockStats,
      transactionStats: state.dashboardReducer.stats.transactionStats,
      channelList: state.dashboardReducer.stats.channelList,
    })
  );

  useInterval(() => {
    // Your custom logic here
    setLoading(true);
    dispatch(getResourcesData());
    dispatch(searchDataAsync());
    dispatch(getStatDatas());
    dispatch(getAllDatas());
    setLoading(false);
  }, 10000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) {
    return <>loading...</>;
  } else {
    return (
      <React.Fragment>
        {/* 데이터 정보 */}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <CardStatisticsVerticalComponent
                  stats={blocks.map((v) => {
                    return v.totalElements + Math.floor(Math.random() * 50);
                  })}
                  color="success"
                  trendNumber="1.46%"
                  title="Blocks"
                  subtitle="+ 345 than yesterday"
                  icon={<Database />}
                />
              </Grid>
              <Grid item xs={2}>
                <CardStatisticsVerticalComponent
                  stats={transactions.map((v) => {
                    return v.totalElements + Math.floor(Math.random() * 50);
                  })}
                  color="success"
                  trendNumber="1.46%"
                  title="Transactions"
                  subtitle="+ 345 than yesterday"
                  icon={<SwapHorizontalBold />}
                />
              </Grid>
              <Grid item xs={2}>
                <CardStatisticsVerticalComponent
                  stats={cpu[0].cpuPerc}
                  color="success"
                  trendNumber="1.46%"
                  title="CPU"
                  subtitle="+ 345 than yesterday"
                  icon={<Memory />}
                />
              </Grid>
              <Grid item xs={2}>
                <CardStatisticsVerticalComponent
                  stats={memory[0].memPerc}
                  color="success"
                  trendNumber="1.46%"
                  title="Memory"
                  subtitle="+ 345 than yesterday"
                  icon={<Sd />}
                />
              </Grid>

              {/* Blockchain Info */}
              <Grid item xs={4}>
                <Table setLoading={setLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* /상단 */}

        {/* Tab Panel */}
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="Tabs">
              <Tab label="Ledger Info" value="1" />
              <Tab label="Resource Info" value="2" />
            </Tabs>
          </Box>

          {/* LEDGER INFO */}
          <TabPanel value="1">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} sx={{ boxShadow: 3 }}>
                    <Box>
                      <Typography variant="h5">Block Height</Typography>
                      <BlockBar
                        echarts={echarts}
                        setLoading={setLoading}
                        blocks={blocks}
                        channelList={channelList}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ marginTop: 3 }}>
                        Block Chart
                      </Typography>
                      <BlockLine
                        echarts={echarts}
                        setLoading={setLoading}
                        blocks={blocks}
                        blockStats={blockStats}
                        channelList={channelList}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} sx={{ boxShadow: 3 }}>
                    <Box>
                      <Typography variant="h5">Transaction Height</Typography>
                      <TransactionBar
                        echarts={echarts}
                        setLoading={setLoading}
                        transactions={transactions}
                        channelList={channelList}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ marginTop: 3 }}>
                        Transaction Chart
                      </Typography>
                      <TransactionLine
                        echarts={echarts}
                        setLoading={setLoading}
                        transactions={transactions}
                        transactionStats={transactionStats}
                        channelList={channelList}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          {/* RESOURCE INFO */}
          <TabPanel value="2">
            <Grid item xs={12} sx={{ boxShadow: 3 }}>
              <Box>
                <Typography variant="h5" sx={{ marginTop: 3 }}>
                  CPU
                </Typography>
                <CpuChart echarts={echarts} setLoading={setLoading} cpu={cpu} />
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ boxShadow: 3 }}>
              <Box>
                <Typography variant="h5" sx={{ marginTop: 3 }}>
                  Memory
                </Typography>
                <MemoryChart
                  echarts={echarts}
                  setLoading={setLoading}
                  memory={memory}
                />
              </Box>
            </Grid>
          </TabPanel>
        </TabContext>
      </React.Fragment>
    );
  }
};
