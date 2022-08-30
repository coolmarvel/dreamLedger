import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";

export default React.memo(function Line({ setLoading, memory }) {
  const [days, setDays] = useState(1);

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: memory.map((v) => v.name),
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
    series: memory.map((v) => {
      return {
        name: v.name,
        type: "line",
        stack: "Total",
        data: memory.map((v) => v.memPerc.replace("%", "")),
      };
    }),
  });

  useEffect(() => {
    setLoading(true);

    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: memory.map((v) => {
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
          data: memory.map((v) => {
            return v.memPerc.replace("%", "");
          }),
        };
      }),
    });

    setLoading(false);
  }, [memory]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
});
