import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import ReactEcharts from 'echarts-for-react'
import { searchDataAsync } from "../../../../redux/boardReducer";
import { getDataAsync } from "../../../../redux/ethReducer";
import useInterval from "../../utils/useInterval";

import { Card, CardHeader, CardContent } from '@mui/material'

export default React.memo(function Bar(props) {
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => state.boardReducer);
  const { eth } = useSelector((state) => state.ethReducer);

  const [delay, setDelay] = useState(10000);
  const [channel1, setChannel1] = useState();
  const [channel2, setChannel2] = useState();

  const chartRef = useRef(null);

  useInterval(() => {
    // Your custom logic here
    props.setLoading(true);
    dispatch(searchDataAsync());
    dispatch(getDataAsync());
    props.setLoading(false);
  }, delay);

  useEffect(() => {
    props.setLoading(true);

    const bitcoin = [];
    const ethereum = [];

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
          data: bitcoin,
        },
        {
          name: "Channel 2",
          type: "bar",
          data: ethereum,
        },
      ],
    };

    for (const data of dashboard) {
      bitcoin.push(data.total);
    }

    for (const data of eth) {
      ethereum.push(data.total);
    }

    setChannel1(bitcoin);
    setChannel2(ethereum);
    setOptions(option);

    props.setLoading(false);
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
        name: "Channel 1",
        type: "bar",
        data: channel1,
      },
      {
        name: "Channel 2",
        type: "bar",
        data: channel2,
      },
    ],
  });

  // useEffect(() => {
  //   props.setLoading(true);
  //   if (chartRef.current) {
  //     const chart = echarts.init(chartRef.current);
  //     chart.setOption(options);
  //   }
  //   props.setLoading(false);
  // }, [options, chartRef]);

  return (
    <Card>
      <CardHeader />
      <CardContent>
        {/* <div
          ref={chartRef}
          style={{
            width: "100%",
            minHeight: "100%",
          }}
        /> */}
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
})