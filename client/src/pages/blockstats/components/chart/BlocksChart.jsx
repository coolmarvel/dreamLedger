import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

// Reducer
import { useDispatch, useSelector } from "react-redux";
import { getDataAsync } from "../../../../redux/blockStatsReducer";

// MUI
import { Card, CardHeader, CardContent } from "@mui/material";

function BlocksChart(props) {
  const dispatch = useDispatch();

  const { blockStats } = useSelector((state) => state.blockStatsReducer);

  const [days, setDays] = useState(1);
  const [channel1, setChannel1] = useState();
  const [channel2, setChannel2] = useState();

  const labels = blockStats.map((data) => {
    const date = new Date(data.transaction_date);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  });

  useEffect(() => {
    props.setLoading(true);
    dispatch(getDataAsync());
    props.setLoading(false);
  }, []);

  useEffect(() => {
    props.setLoading(true);

    const channel1 = [];
    const channel2 = [];

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
          data: channel1,
        },
        {
          name: "ch2",
          type: "line",
          stack: "Total",
          data: channel2,
        },
      ],
    };

    for (const data of blockStats) {
      channel1.push(data.total);
    }

    for (const data of blockStats) {
      channel2.push(data.total);
    }

    setChannel1(channel1);
    setChannel2(channel2);
    setOptions(option);

    props.setLoading(false);
  }, [blockStats]);

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

  return (
    <Card>
      <CardHeader />
      <CardContent>
        <ReactEcharts option={options} />
      </CardContent>
    </Card>
  );
}

export default React.memo(BlocksChart);
