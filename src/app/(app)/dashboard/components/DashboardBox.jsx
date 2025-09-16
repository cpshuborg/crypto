"use client"
import React, { useState } from "react";
import styles from "../styles/PortfolioPerformance.module.css";
import Chart from "./Chart";
const stats = [
  { id: 1, icon: "/icon1.svg", title: "Total assets", amount: "$120,000" },
  { id: 2, icon: "/icon2.svg", title: "Total deposits", amount: "$8,500" },
  { id: 3, icon: "/icon3.svg", title: "APY", amount: "+12.3%" },
];

const timeOptions = ["1D", "1W", "1M", "3M", "1Y", "📅"]; 

const currencyOptions = [
  { value: "BTC", label: "BTC", icon: "/bitcoin.svg" },
  { value: "Tether", label: "Tether", icon: "/tether.svg" },
  { value: "ETH", label: "ETH", icon: "/eth.svg" },
];

export default function MainBox() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
  
  const getSelectedOption = () => {
    return currencyOptions.find(option => option.value === selectedCurrency) || currencyOptions[0];
  };

  return (
    <div className={styles.container}>
      {/* Top 3 stats */}
      <div className={styles.statsRow}>
        {stats.map((item) => (
          <div key={item.id} className={styles.statCard}>
            <div className={styles.statIconCont}>
            <img src={item.icon} alt={item.title} className={styles.statIcon} />
            </div>
            <div className={styles.statText}>
              <span className={styles.statTitle}>{item.title}</span>
              <span className={styles.statAmount}>{item.amount}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.heading}>Portfolio Performance</h3>

      <div className={styles.controlsRow}>
        <div className={styles.currencySelectWrapper}>
          <select 
            className={styles.currencySelect} 
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            {currencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className={styles.selectedCurrency}>
            <img 
              src={getSelectedOption().icon} 
              alt={getSelectedOption().label} 
              className={styles.currencyIcon}
            />
            <span>{getSelectedOption().label}</span>
            <span className={styles.dropdownArrow}><img src="drop.svg"/></span>
          </div>
        </div>

        <button className={styles.candlesButton}><img className={styles.candleIcon} src="/candle.svg"></img></button>

        <div className={styles.timeButtons}>
          {timeOptions.map((t, i) => (
            <button key={i} className={styles.timeButton}>{t}</button>
          ))}
        </div>
      </div>

      
      <div>
       <Chart />
      </div>
    </div>
  );
}