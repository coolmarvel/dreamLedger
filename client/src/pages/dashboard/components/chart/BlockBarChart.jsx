import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInterval from "../../utils/useInterval";

import ReactEcharts from "echarts-for-react";

import { Card, CardHeader, CardContent } from "@mui/material";

import { searchDataAsync } from "../../../../redux/dashboardReducer";

export default React.memo(function Bar({ setLoading }) {
  const dispatch = useDispatch();

  const { dashboard } = useSelector((state) => state.dashboardReducer);

  const [delay, setDelay] = useState(10000);
  const [blocks, setBlocks] = useState([]);
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
    series: [
      {
        name: "Channel 1",
        type: "bar",
        data: [],
      },
      {
        name: "Channel 2",
        type: "bar",
        data: [],
      },
    ],
  });

  useInterval(() => {
    // Your custom logic here
    setLoading(true);

    dispatch(searchDataAsync());

    setBlocks(dashboard.blocks);

    setOptions({
      ...options,
      series: options.series.map((v) => {
        return {
          ...v,
          data:
            dashboard.blocks === undefined
              ? []
              : blocks.map((v) => {
                  return v.total;
                }),
        };
      }),
    });

    setLoading(false);
  }, delay);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
});
