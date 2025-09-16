"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import styles from "../styles/Chart.module.css";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function EthCandlestickChart() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchCandles() {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/klines",
          {
            params: {
              symbol: "ETHUSDT",
              interval: "1d",
              limit: 30,
            },
          }
        );

        const candles = response.data.map((candle) => ({
          x: new Date(candle[0]), 
          y: [
            parseFloat(candle[1]), 
            parseFloat(candle[2]), 
            parseFloat(candle[3]), 
            parseFloat(candle[4]), 
          ],
        }));

        setSeries([{ data: candles }]);
      } catch (error) {
        console.error("Error fetching ETH data:", error);
        // fallback dummy data
        setSeries([
          {
            data: [
              { x: new Date(2025, 2, 1), y: [4312, 4481, 4225, 4472] },
              { x: new Date(2025, 2, 2), y: [4312, 4355, 4067, 4075] },
              { x: new Date(2025, 2, 3), y: [4075, 4336, 4060, 4336] },
            ],
          },
        ]);
      }
    }
    fetchCandles();
  }, []);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      background: "transparent",
      toolbar: { show: false },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: { colors: "#ccc" },
        formatter: function (value) {
          const date = new Date(value);
          return `${date.getDate()} ${date.toLocaleString("default", { month: "short" })}`;
        },
      },
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: "#ccc" } },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#5CFF9C", 
          downward: "#F00090", 
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#333",
      padding: { left: 10, right: 10, top: 10, bottom: 10 },
    },
  };

  return (
    <div className={styles.chartWrapper}>
      <Chart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
}
