import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

// Reducer
import { useSelector } from "react-redux";

// MUI
import { Card, CardHeader, CardContent } from "@mui/material";

function BlocksChart(props) {
  const { blockStats } = useSelector((state) => state.blockStatsReducer);

  const [days, setDays] = useState(1);
  const [channel1, setChannel1] = useState();
  const [channel2, setChannel2] = useState();

  const labels = blockStats.map(() => {
    const date = new Date();
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  });

  const channelData = props.channelData;

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
    props.setLoading(true);

    const channel1 = [];
    const channel2 = [];

    if (channelData === undefined || channelData === []) {
      setChannel1([]);
      setChannel2([]);
    } else if (channelData[0] === "Channel_1" && channelData[1] === undefined) {
      for (const data of blockStats) {
        channel1.push(data.size);
      }

      setChannel1(channel1);
      setChannel2([]);
    } else if (channelData[0] === "Channel_2" && channelData[1] === undefined) {
      for (const data of blockStats) {
        channel2.push(data.size);
      }

      setChannel2(channel2);
      setChannel1([]);
    } else if (
      channelData[0] === "Channel_1" &&
      channelData[1] === "Channel_2"
    ) {
      for (const data of blockStats) {
        channel1.push(data.size);
      }

      for (const data of blockStats) {
        channel2.push(data.size);
      }

      setChannel1(channel1);
      setChannel2(channel2);
    } else if (
      channelData[0] === "Channel_2" &&
      channelData[1] === "Channel_1"
    ) {
      for (const data of blockStats) {
        channel1.push(data.size);
      }

      for (const data of blockStats) {
        channel2.push(data.total);
      }

      setChannel1(channel1);
      setChannel2(channel2);
    }

    setOptions({
      ...options,
      xAxis: {
        ...options.xAxis,
        data: labels,
      },
      series: options.series.map((v, i) => {
        return {
          ...v,
          data: i === 0 ? channel1 : channel2,
        };
      }),
    });

    props.setLoading(false);
  }, [blockStats]);

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
