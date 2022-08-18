import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import useInterval from "../utils/useInterval";

export default function Line() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(1);
  const [delay, setDelay] = useState(5000);
  const [channel1, setChannel1] = useState();
  const [channel2, setChannel2] = useState();
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

    const ch1 = [];
    const ch2 = [];

    const option = {
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
        data: labels,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "ch1",
          type: "line",
          stack: "Total",
          data: ch1,
        },
        {
          name: "ch2",
          type: "line",
          stack: "Total",
          data: ch2,
        },
      ],
    };

    for (const data of dashboard) {
      ch1.push(data.total);
    }

    for (const data of dashboard) {
      ch2.push(data.price);
    }

    setChannel1(ch1);
    setChannel2(ch2);
    setOptions(option);

    setLoading(false);
  }, [dashboard]);

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
      data: labels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "ch1",
        type: "line",
        stack: "Total",
        data: channel1,
      },
      {
        name: "ch2",
        type: "line",
        stack: "Total",
        data: channel2,
      },
    ],
  });

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    if (chartRef.current) {
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
