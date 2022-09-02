import React, { useState, useEffect } from "react";

import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";
import useInterval from "../../utils/useInterval";

export default React.memo(function Bar({ blocks, setLoading, channelList }) {
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
      data: ["Blocks"],
    },
    series: channelList.map((v) => {
      return {
        name: v,
        type: "bar",
        data: blocks.map((v) => v.numberOfElements),
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
          data: blocks.map((v) => {
            return v.totalElements + Math.floor(Math.random() * 50);
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
