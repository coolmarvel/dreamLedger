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

function Chart({ setLoading, data }) {
  console.log("data", data);

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: data.channelName,
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
      data: data.data.map((v) => v.datetime),
    },
    yAxis: {
      type: "value",
    },
    series: data.channelName.map((v) => {
      return {
        name: v,
        type: "line",
        stack: "Total",
        data: data.data.map((v) => v.count),
      };
    }),
  });

  useEffect(() => {
    setLoading(true);

    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: data.data.map((v) => v.datetime),
      },
      series: options.series.map((v) => {
        return { ...v, data: data.data.map((v) => v.count) };
      }),
    });

    setLoading(false);
  }, [data]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <Grid item xs={11}>
          <Box>
            {data.channelName.map((value, index) => {
              return (
                <Typography
                  variant="h5"
                  sx={{ marginTop: 3 }}
                  align="left"
                  key={index}
                >
                  {value}
                </Typography>
              );
            })}
            <ReactEcharts option={options} />
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default React.memo(Chart);
