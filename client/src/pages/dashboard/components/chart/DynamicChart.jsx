import React, { useState, useEffect } from "react";

import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";

export default React.memo(function DynamicChart({
  setLoading,
  channelList,
  blockStats,
}) {
  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value),
      ],
    };
  }

  let data = [];
  let now = new Date(1997, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;

  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  const [options, setOptions] = useState({
    legend: {
      data: channelList,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false,
      },
    },
    series: channelList.map((v) => {
      return {
        name: v,
        type: "line",
        showSymbol: false,
        data: data,
      };
    }),
  });

  //   setInterval(function () {
  //     for (var i = 0; i < 5; i++) {
  //       data.shift();
  //       data.push(randomData());
  //     }

  //     setOptions({
  //       series: [{ data: data }],
  //     });
  //   }, 1000);

  useEffect(() => {
    setLoading(true);

    for (var i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }

    setOptions({
      series: [{ data: data }],
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
