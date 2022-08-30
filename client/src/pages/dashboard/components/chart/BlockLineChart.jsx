import React, { useState, useEffect } from "react";

import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";

export default React.memo(function Line({ blocks, setLoading }) {
  const channelName = ["Channel1", "Channel2"];
  const [days, setDays] = useState(1);
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: channelName,
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
    series: channelName.map((v) => {
      return {
        name: v,
        type: "line",
        stack: "Total",
        data: [],
      };
    }),
  });

  useEffect(() => {
    setLoading(true);

    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: blocks.map(() => {
          const date = new Date();
          const time =
            date.getHours() > 12
              ? `${date.getHours() - 12}:${date.getMinutes()} PM`
              : `${date.getHours()}:${date.getMinutes()} AM`;
          return days === 1 ? time : date.toLocaleDateString();
        }),
      },
      series: options.series.map((v) => {
        return {
          ...v,
          data: blocks.map((v) => {
            return v.size;
          }),
        };
      }),
    });

    setLoading(false);
  }, [blocks]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
});
