import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import useInterval from "../utils/useInterval";

export default function Line() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [delay, setDelay] = useState(5000);
  const [days, setDays] = useState(1);
  const [total, setTotal] = useState();
  const [price, setPrice] = useState();
  const { dashboard } = useSelector((state) => state.boardReducer);
  const chartRef = useRef(null);

  const labels = dashboard.map((data) => {
    const date = new Date(data.transaction_date);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  });

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
        data: labels,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "total",
          type: "line",
          stack: "Total",
          data: tot,
        },
        {
          name: "price",
          type: "line",
          stack: "Total",
          data: pri,
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
      data: labels,
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
