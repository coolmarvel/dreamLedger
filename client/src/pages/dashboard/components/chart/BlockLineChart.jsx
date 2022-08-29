import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInterval from "../../utils/useInterval";

import ReactEcharts from "echarts-for-react";

import { searchDataAsync } from "../../../../redux/dashboardReducer";

import { Card, CardHeader, CardContent } from "@mui/material";

export default React.memo(function Line({ setLoading }) {
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => state.dashboardReducer);

  const [days, setDays] = useState(1);
  const [delay, setDelay] = useState(10000);
  const [blocks, setBlocks] = useState([]);

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["ch1", "ch2"],
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
    series: [
      {
        name: "ch1",
        type: "line",
        stack: "Total",
        data: [],
      },
      {
        name: "ch2",
        type: "line",
        stack: "Total",
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
      xAxis: {
        ...options.xAxis,
        data:
          dashboard.blocks === undefined
            ? []
            : blocks.map((value) => {
                const date = new Date(value.transaction_date);
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
