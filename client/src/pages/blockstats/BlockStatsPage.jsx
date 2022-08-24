import React, { useState } from "react";
import * as echarts from "echarts";

import { Grid, Typography, Box, Button } from '@mui/material'

import BlocksChart from "./components/chart/BlocksChart";
import TransactionChart from "./components/chart/TransactionChart";
import ChannelMenu from './components/filter/ChannelMenu'
import SelectDate from './components/filter/SelectDate'
import Calendar from './components/filter/CalendarMenu'

export const BlockStatsPage = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <React.Fragment>

        <Grid container>
          <Typography variant='h5' sx={{ marginTop: 3, marginBottom: 3 }} align="left">Search Filter</Typography>
          <Grid container spacing={1}>
            <Box>
              <Grid item xs={2} >
                <ChannelMenu />
              </Grid>
            </Box>
            <Box sx={{ marginTop: 1.6 }}>
              <Grid item xs={2}>
                <SelectDate />
              </Grid>
            </Box>
            <Grid item xs={2}>
              <Calendar />
            </Grid>
            <Box sx={{ marginTop: 2 }}>
              <Grid item xs={2}>
                <Button variant="contained" size="large" >
                  Search
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={11}>
          <Box>
            <Typography variant='h5' sx={{ marginTop: 3 }} align="left">Blocks</Typography>
            <BlocksChart echarts={echarts} setLoading={setLoading} />
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Box>
            <Typography variant='h5' sx={{ marginTop: 3 }} align="left">Transactions</Typography>
            <TransactionChart echarts={echarts} setLoading={setLoading} />
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
};
