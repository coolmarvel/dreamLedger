import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

// MUI
import { Card, CardHeader, CardContent } from "@mui/material";

function TransactionChart({ channelData }) {
  const labelList = ["CPU", "MEM"];
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: labelList,
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
      data: channelData === [] ? [] : channelData.map((v) => v.datetime),
    },
    yAxis: {
      type: "value",
    },
    series: labelList.map((v) => {
      return {
        name: v,
        type: "line",
        stack: "Total",
        data: channelData === [] ? [] : channelData.map((v) => v.count),
      };
    }),
  });

  useEffect(() => {
    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: channelData === [] ? [] : channelData.map((v) => v.datetime),
      },
      series: options.series.map((v) => {
        return {
          ...v,
          data: channelData === [] ? [] : channelData.map((v) => v.count),
        };
      }),
    });
  }, [channelData, options]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
}

export default React.memo(TransactionChart);
