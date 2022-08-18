import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import useInterval from "../utils/useInterval";

export default function LineFunction() {
  const [loading, setLoading] = useState(false);
  const [delay, setDelay] = useState(5000);
  const dispatch = useDispatch();
  const { dashboard, lastId } = useSelector((state) => state.boardReducer);

  const chartRef = useRef(null);

  const total = [];
  const price = [];

  for (const data of dashboard) {
    total.push(data.total);
  }

  for (const data of dashboard) {
    price.push(data.price);
  }

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["total", "price"],
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
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "total",
        type: "line",
        stack: "Total",
        data: total,
      },
      {
        name: "price",
        type: "line",
        stack: "Total",
        data: price,
      },
    ],
  });

  useInterval(() => {
    // Your custom logic here
    setLoading(true);
    dispatch(searchDataAsync());
    setLoading(false);
  }, delay);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(options);
    }
  }, [options, chartRef]);

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div
        ref={chartRef}
        style={{
          width: "100%",
          minHeight: "100%",
        }}
      />
    );
  }
}
