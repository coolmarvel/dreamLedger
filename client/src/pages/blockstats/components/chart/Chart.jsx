import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

// MUI
import {
  Grid,
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

function Chart({ channelData, setLoading, channelList, data }) {
  console.log("data", data);
  console.log("channelData", channelData);

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: channelList,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: channelData.map((v) => v.datetime),
    },
    yAxis: {
      type: "value",
    },
    series: channelList.map((v) => {
      return {
        name: v,
        type: "line",
        stack: "Total",
        data: channelData.map((v) => v.count),
      };
    }),
  });

  useEffect(() => {
    setLoading(true);
    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: channelData.map((v) => v.datetime),
      },
      series: options.series.map((v) => {
        return { ...v, data: channelData.map((v) => v.count) };
      }),
    });
    setLoading(false);
  }, [channelData, options]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <Grid item xs={11}>
          <Box>
            <Typography variant="h5" sx={{ marginTop: 3 }} align="left">
              {channelList}
            </Typography>
            <ReactEcharts option={options} />
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default React.memo(Chart);
