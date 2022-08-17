import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import { css } from "@emotion/react";
import useInterval from "../utils/useInterval";

export default function BarFunction(props) {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #5900ff;
    width: 100%;
    height: 100%;
    background: #34343465;
  `;

  const [delay, setDelay] = useState(5000);
  const [loading, setLoading] = useState(false);
  const { dashboard } = useSelector((state) => state.boardReducer);
  const dispatch = useDispatch();

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
    title: {
      text: "Block Height",
    },
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
        data: total,
      },
      {
        name: "Channel 2",
        type: "bar",
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
    setLoading(true);
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(options);
    }
    setLoading(false);
  }, [options, chartRef]);

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <div
          ref={chartRef}
          style={{
            width: "100%",
            minHeight: "100%",
          }}
        />
      </div>
    );
  }
}
