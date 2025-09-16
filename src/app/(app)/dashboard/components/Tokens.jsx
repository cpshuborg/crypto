"use client";
import React from "react";
import styles from "../styles/Tokens.module.css";

const tokens = [
  { id: 1, name: "Bitcoin", icon: "/bitcoin.svg", balance: "0.94353", totalValue: "$82,500.00" },
  { id: 2, name: "Ethereum", icon: "/eth.svg", balance: "12.4548", totalValue: "$41,472.00" },
//   { id: 3, name: "Solana", icon: "/solana.svg", balance: "5.1234", totalValue: "$15,230.00" },
];

export default function TokenTable() {
  // Only show scroll if more than 2 tokens
  const showScroll = tokens.length > 2;
  const visibleTokens = showScroll ? tokens : tokens;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Tokens</h3>
      
      <div className={`${styles.table} ${showScroll ? styles.scrollable : ""}`}>
        <div className={styles.tableHeader}>
          <div className={styles.columnName}>Name</div>
          <div className={styles.columnBalance}>Balance</div>
          <div className={styles.columnValue}>Total value</div>
          <div className={styles.columnTrade}>Trade</div>
        </div>
        
        <div className={styles.tableBody}>
          {visibleTokens.map((token) => (
            <div key={token.id} className={styles.tableRow}>
              <div className={styles.cellName}>
                <img src={token.icon} alt={token.name} className={styles.tokenIcon} />
                <span className={styles.tokenName}>{token.name}</span>
              </div>
              
              <div className={styles.cellBalance}>
                <span className={styles.balance}>{token.balance}</span>
              </div>
              
              <div className={styles.cellValue}>
                <span className={styles.value}>{token.totalValue}</span>
              </div>
              
              <div className={styles.cellTrade}>
                <button className={styles.tradeButton}>Trade</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
