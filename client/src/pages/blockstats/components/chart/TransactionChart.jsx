import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

// MUI
import { Card, CardHeader, CardContent } from "@mui/material";

function TransactionChart({ setLoading, data }) {
  const channelList = data.channelName;
  const chartData = data.data;

  console.log("channelList", channelList);
  console.log("chartData", chartData);

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
      data: chartData.map((v) => v.datetime),
    },
    yAxis: {
      type: "value",
    },
    series: channelList.map((v) => {
      return {
        name: v,
        type: "line",
        stack: "Total",
        data: chartData.map((v) => v.count),
      };
    }),
  });

  useEffect(() => {
    setLoading(true);

    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: chartData.map((v) => v.datetime),
      },
      series: options.series.map((v) => {
        return {
          ...v,
          data: chartData.map((v) => v.count),
        };
      }),
    });

    setLoading(false);
  }, [data]);

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
