import React, { useState, useEffect } from "react";

import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";

export default React.memo(function Line({
  blocks,
  setLoading,
  blockStats,
  channelList,
}) {
  const [days, setDays] = useState(1);
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
      },
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
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: channelList.map((v) => {
      return {
        name: v,
        type: "line",
        stack: "Total",
        data: blockStats.map((v) => v.count),
      };
    }),
  });

  useEffect(() => {
    setLoading(true);

    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: blockStats.map(() => {
          const date = new Date();
          const time =
            date.getHours() > 12
              ? `PM ${
                  date.getHours() - 12
                }:${date.getMinutes()}:${date.getSeconds()}`
              : `AM ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          return days === 1 ? time : date.toLocaleDateString();
        }),
      },
      series: options.series.map((v) => {
        return { ...v, data: blockStats.map((v) => v.count) };
      }),
    });

    setLoading(false);
  }, [blockStats]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
});
