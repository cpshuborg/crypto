"use client";
import React, { useState } from "react";
import styles from "../styles/ChainAllocation.module.css";

const coins = [
  { id: 1, name: "Bitcoin", icon: "/bitcoin.svg", value: "$23.3B", percent: 78.57 },
  { id: 2, name: "Ethereum", icon: "/eth.svg", value: "$15.1B", percent: 65.22 },
  { id: 3, name: "Solana", icon: "/solana.svg", value: "$7.4B", percent: 45.6 },
  { id: 4, name: "Shiba", icon: "/shiba.svg", value: "$5.2B", percent: 32.1 },
  { id: 5, name: "Tether", icon: "/tether.svg", value: "$3.9B", percent: 22.8 },
  { id: 6, name: "Bitcoin", icon: "/bitcoin.svg", value: "$23.3B", percent: 78.57 },
  { id: 7, name: "Ethereum", icon: "/eth.svg", value: "$15.1B", percent: 65.22 },
  { id: 8, name: "Solana", icon: "/solana.svg", value: "$7.4B", percent: 45.6 },
  { id: 9, name: "Shiba", icon: "/shiba.svg", value: "$5.2B", percent: 32.1 },
];

export default function ChainAllocations() {
  const [showAll, setShowAll] = useState(false);

  const gradients = [
    "linear-gradient(268.5deg, #FB03F5 -11.69%, #AA9CFF 112.48%)",
    "linear-gradient(180deg, #5CFF9C 0%, #00FFA3 100%)",
    "linear-gradient(268.5deg, #FB035C -11.69%, #FA9FA5 112.48%)",
  ];

  // Only first 5 coins initially
  const visibleCoins = showAll ? coins : coins.slice(0, 5);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Chain Allocations</h3>
      <div className={`${styles.list} ${showAll ? styles.scrollable : styles.fixedHeight}`}>
        {visibleCoins.map((coin, i) => (
          <div key={coin.id} className={styles.coinRow}>
            <div className={styles.topRow}>
              <div className={styles.left}>
                <img src={coin.icon} alt={coin.name} className={styles.icon} />
                <span className={styles.name}>{coin.name}</span>
              </div>
              <span className={styles.value}>{coin.value}</span>
            </div>
            <div className={styles.bottomRow}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${coin.percent}%`, background: gradients[i % gradients.length] }}
                ></div>
              </div>
              <span className={styles.percent}>{coin.percent}%</span>
            </div>
          </div>
        ))}
      </div>

      {coins.length > 5 && (
        <button className={styles.viewAll} onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
    </div>
  );
}
