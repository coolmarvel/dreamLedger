import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

export default function LineFunction(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { dashboard, lastId } = useSelector((state) => state.boardReducer);
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  // const data = [
  //   ["2016-10-4", 189],
  //   ["2016-10-5", 195],
  //   ["2016-10-6", 196],
  //   ["2016-10-7", 187],
  //   ["2016-10-8", 186],
  //   ["2016-10-9", 184],
  //   ["2016-10-10", 178],
  //   ["2016-10-11", 169],
  //   ["2016-10-12", 168],
  // ];

  // const data2 = [
  //   ["2016-10-4", 1],
  //   ["2016-10-5", 1],
  //   ["2016-10-6", 36.491669431317064],
  //   ["2016-10-7", 27],
  //   ["2016-10-8", 32],
  //   ["2016-10-9", 34],
  //   ["2016-10-10", 35],
  //   ["2016-10-11", 34],
  //   ["2016-10-12", 34],
  // ];

  useEffect(() => {
    props.setLoading(true);
    dispatch(searchDataAsync());
    props.setLoading(false);
  }, []);

  const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
  const time = new Date().toTimeString().split(" ")[0];
  const timeFormat = date + " " + time;
  const timeArray = [];
  timeArray.push(timeFormat);
  console.log(timeArray);

  useEffect(() => {
    props.setLoading(true);
    setData(timeArray);
    setData2(timeArray);
    props.setLoading(false);
  }, []);

  // useEffect(() => {
  //   setLoading(true);

  //   const data = [];
  //   const data2 = [];

  //   for (let i = 1; i < 10; i++) {
  //     var now = new Date((base += oneDay));
  //     var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
  //       "-"
  //     );

  //     valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
  //     valueBase <= 0 && (valueBase = Math.random() * 300);
  //     data.push([dayStr, valueBase]);

  //     valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
  //     valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
  //     data2.push([dayStr, valueBase2]);
  //   }

  //   setData(data);
  //   setData2(data2);
  //   setLoading(false);
  // }, [dashboard]);

  var base = +new Date(2016, 9, 3);
  var oneDay = 24 * 3600 * 1000;
  var valueBase = Math.random() * 300;
  var valueBase2 = Math.random() * 50;

  const chartRef = useRef(null);

  const [options, setOptions] = useState({
    animation: false,
    title: {
      left: "center",
      text: "Touch Screen Tooltip & DataZoom Demo",
      subtext: '"tootip" and "dataZoom" on mobile device',
    },
    legend: {
      top: "bottom",
      data: [""],
    },
    tooltip: {
      triggerOn: "none",
      position: function (pt) {
        return [pt[0], 130];
      },
    },
    toolbox: {
      left: "center",
      itemSize: 25,
      top: 55,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
      },
    },
    xAxis: {
      type: "time",
      // boundaryGap: [0, 0],
      axisPointer: {
        value: "2022-08-08",
        snap: true,
        lineStyle: {
          color: "#004E52",
          opacity: 0.5,
          width: 2,
        },
        label: {
          show: true,
          formatter: (params) => {
            return echarts.format.formatTime("yyyy-MM-dd", params.value);
          },
          backgroundColor: "#004E52",
        },
        handle: {
          show: true,
          color: "#004E52",
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        inside: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        inside: true,
        formatter: "{value}\n",
      },
      z: 10,
    },
    grid: {
      top: 110,
      left: 15,
      right: 15,
      height: 160,
    },
    dataZoom: [
      {
        type: "inside",
        throttle: 50,
      },
    ],
    series: [
      {
        name: "analog data",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#8ec6ad",
        },
        stack: "a",
        data: data,
      },
      {
        name: "analog data",
        type: "line",
        smooth: true,
        stack: "a",
        symbol: "circle",
        symbolSize: 5,
        sampling: "average",
        itemStyle: {
          color: "#d68262",
        },
        data: data2,
      },
    ],
  });

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption(options);
    }
  }, [options, chartRef]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #5900ff;
    width: 100%;
    height: 100%;
    background: #34343465;
  `;

  return (
    <div>
      {loading ? (
        <div
          className={loading ? "parentDisable" : ""}
          width="100%"
          height="100%"
        >
          <div className="overlay-box">
            <FadeLoader
              size={150}
              color={"#ffffff"}
              css={override}
              loading={loading}
              z-index={"1"}
              text="Loading your content..."
            />
          </div>
        </div>
      ) : (
        false
      )}
      <div
        ref={chartRef}
        style={{
          width: "100%",
          minHeight: 350,
        }}
      />
    </div>
  );
}
