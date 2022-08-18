import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import useInterval from "../utils/useInterval";

export default function Bar() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [delay, setDelay] = useState(5000);
  const [total, setTotal] = useState();
  const [price, setPrice] = useState();
  const { dashboard } = useSelector((state) => state.boardReducer);

  const chartRef = useRef(null);

  useInterval(() => {
    // Your custom logic here
    setLoading(true);
    dispatch(searchDataAsync());
    setLoading(false);
  }, delay);

  useEffect(() => {
    setLoading(true);
    const tot = [];
    const pri = [];
    const option = {
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
    };

    for (const data of dashboard) {
      tot.push(data.total);
    }

    for (const data of dashboard) {
      pri.push(data.price);
    }

    setTotal(tot);
    setPrice(pri);
    setOptions(option);

    setLoading(false);
  }, [dashboard]);

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
        name: "total",
        type: "bar",
        data: total,
      },
      {
        name: "price",
        type: "bar",
        data: price,
      },
    ],
  });

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
