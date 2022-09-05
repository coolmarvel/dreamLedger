import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

// MUI
import { Card, CardHeader, CardContent } from "@mui/material";

function TransactionChart({ data, channelList, channelData }) {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [],
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
        data: [],
      };
    }),
  });

  useEffect(() => {
    setOptions({
      ...options,
      legend: { ...options.legend, data: channelData.map((v) => v) },
      xAxis: {
        ...options.xAxis,
        data: data.map((v) => v.datetime.replaceAll("00-00-00", "")),
      },
      series: options.series.map((v) => {
        return { ...v, data: data.map((v) => v.count) };
      }),
    });
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
