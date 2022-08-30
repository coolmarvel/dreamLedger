import React, { useState, useEffect } from "react";

import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";

export default React.memo(function Bar({ transactions, setLoading }) {
  const channelName = ["Channel1", "Channel2"];
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: ["Transactions"],
    },
    series: channelName.map((v) => {
      return {
        name: v,
        type: "bar",
        data: [],
      };
    }),
  });

  useEffect(() => {
    setLoading(true);

    setOptions({
      ...options,
      series: options.series.map((v) => {
        return {
          ...v,
          data: transactions.map((v) => {
            return v.size;
          }),
        };
      }),
    });

    setLoading(false);
  }, [transactions]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
});
