import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";

export default React.memo(function Line({ setLoading, cpu }) {
  const [days, setDays] = useState(1);

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: cpu.map((v) => v.name),
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
    series: cpu.map((v) => {
      return {
        name: v.name,
        type: "line",
        stack: "Total",
        data: cpu.map((v) => v.cpuPerc.replace("%", "") + "%"),
      };
    }),
  });

  useEffect(() => {
    setLoading(true);

    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: cpu.map((v) => {
          const date = new Date(v.currentTime);
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
          data: cpu.map((v) => {
            return v.cpuPerc.replace("%", "");
          }),
        };
      }),
    });

    setLoading(false);
  }, [cpu]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
});
