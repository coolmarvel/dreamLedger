import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";
import { searchDataAsync } from "../../../redux/boardReducer";
import useInterval from "../../dashboard/utils/useInterval";

function TransactionChart() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(1);
  const [delay, setDelay] = useState(5000);
  const [transactions, setTransactions] = useState();

  const { dashboard } = useSelector((state) => state.boardReducer);
  const { blockstats } = useSelector((state) => state.boardReducer);

  const chartRef = useRef(null);

  const labels = blockstats.map((data) => {
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

    const transaction = [];

    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["transactions"],
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
          name: "transactions",
          type: "line",
          stack: "Total",
          data: transaction,
        },
      ],
    };

    for (const data of blockstats) {
      transaction.push(data.total);
    }

    setTransactions(transaction);
    setOptions(option);

    setLoading(false);
  }, [blockstats]);

  const [options, setOptions] = useState({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["transactions"],
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
        name: "transactions",
        type: "line",
        stack: "Total",
        data: transactions,
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

export default TransactionChart;
