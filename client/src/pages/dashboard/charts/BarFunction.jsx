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
  const [data, setData] = useState([]);

  useEffect(() => {
    props.setLoading(true);
    dispatch(searchDataAsync());
    props.setLoading(false);
  }, []);

  useInterval(() => {
    // Your custom logic here
    dispatch(searchDataAsync());
    const total = dashboard.map((v, i) => {
      return v.total;
    });
    setData(total);
  }, delay);

  const blocksArray = [];

  for (const data of dashboard) {
    blocksArray.push(data.total);
  }

  const chartRef = useRef(null);
  const [options, setOptions] = useState({
    title: {
      text: "Bar Data Chart",
      subtext: "Feature Sample",
    },
    xAxis: {
      data: blocksArray,
      axisLabel: {
        inside: true,
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#999",
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series: [
      {
        // For shadow
        type: "bar",
        itemStyle: {
          color: "rgba(0,0,0,0.05)",
        },
        barGap: "-100%",
        barCategoryGap: "40%",
        // data: dataShadow,
        animation: false,
      },
      {
        type: "bar",
        // emphasis: {
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //     { offset: 0, color: "#83bff6" },
        //     { offset: 0.5, color: "#188df0" },
        //     { offset: 1, color: "#188df0" },
        //   ]),
        //   itemStyle: {
        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //       { offset: 0, color: "#2378f7" },
        //       { offset: 0.7, color: "#2378f7" },
        //       { offset: 1, color: "#83bff6" },
        //     ]),
        //   },
        // },
        data: blocksArray,
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
  }

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

// const dataAxis = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
// const data = [
//   220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133,
//   334, 198, 123, 125, 220,
// ];
//   const yMax = 500;
//   const dataShadow = [];

//   for (let i = 0; i < data.length; i++) {
//     dataShadow.push(yMax);
//   }

// Enable data zoom when user click bar.
// const zoomSize = 6;
// chartRef.on("click", (params) => {
//   chartRef.dispatchAction({
//     type: "dataZoom",
//     startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//     endValue:
//       dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
//   });
// });
