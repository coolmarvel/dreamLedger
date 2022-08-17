import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import { css } from "@emotion/react";
import useInterval from "../utils/useInterval";

export default function LineFunction() {
  const [loading, setLoading] = useState(false);
  const [delay, setDelay] = useState(5000);
  const dispatch = useDispatch();
  const { dashboard, lastId } = useSelector((state) => state.boardReducer);

  const chartRef = useRef(null);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #5900ff;
    width: 100%;
    height: 100%;
    background: #34343465;
  `;

  const total = [];
  const price = [];

  for (const data of dashboard) {
    total.push(data.total);
  }

  for (const data of dashboard) {
    price.push(data.price);
  }

  const data = [];
  const now = new Date();
  const oneDay = 24 * 3600 * 1000;

  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  function getTime() {
    return [hour + minutes + seconds].join(":");
  }

  for (var i = 0; i < 1000; i++) {
    data.push(getTime());
  }

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
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
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  });

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(options);
    }
  }, [options, chartRef]);

  useInterval(() => {
    // Your custom logic here
    dispatch(searchDataAsync());
  }, delay);

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
