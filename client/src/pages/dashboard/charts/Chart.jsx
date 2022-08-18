import React, { useState, useContext, useCallback, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import axios from "axios";
import { HistoricalChart } from "../utils/api";
import { chartDays } from "../utils/misc";
import { cryptoContext } from "../utils/contexts/CryptoContext";
import styles from "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

function Chart({ coin }) {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency } = useContext(cryptoContext);

  const fetchHistoricalData = useCallback(async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricData(data.prices);
  }, [coin.id, currency, days]);

  useEffect(() => {
    fetchHistoricalData();
  }, [fetchHistoricalData]);

  const labels = historicData.map((data) => {
    const date = new Date(data[0]);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;

    return days === 1 ? time : date.toLocaleDateString();
  });

  const datasets = [
    {
      data: historicData.map((data) => data[1]),
      label: `Price (Past ${days} Days) in ${currency}`,
      borderColor: "#00a97f",
      backgroundColor: "#c2c2c2",
    },
  ];

  if (historicData.length === 0)
    return (
      <div className={styles.loader}>
        <CircularProgress size={100} color="primary" />
      </div>
    );

  return (
    <div className={styles.container}>
      <Line data={{ labels, datasets }} />{" "}
      <div className={styles.buttonWrapper}>
        {chartDays.map((day) => (
          <Button
            key={day.value}
            onClick={() => setDays(day.value)}
            disabled={day.value === days}
            variant="contained"
          >
            {day.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Chart;
