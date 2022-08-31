import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

// MUI
import { Card, CardHeader, CardContent } from "@mui/material";

const labelList = ["CPU", "MEM"];

const TransactionChart = ({ channelData }) => {
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
      data: channelData.map((e) => e.datetime),
    },
    yAxis: {
      type: "value",
    },
    series: labelList.map((la) => {
      return {
        name: la,
        type: "line",
        stack: "Total",
        data: channelData.map((e) => e.count),
      };
    }),
  });

  useEffect(() => {
    setOptions({
      ...options,
      xAxis: { ...options.xAxis, data: channelData.map((e) => e.datetime) },
      series: options.series.map((se) => {
        return { ...se, data: channelData.map((e) => e.count) };
      }),
    });
  }, [channelData, options]);

  return (
    <Card>
      {/* <CardHeader/> */}
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
};

export default React.memo(TransactionChart);
