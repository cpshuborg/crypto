// components/Header.js
"use client";
import { useState } from "react";
import styles from "./../styles/Header.module.css";
import Logo from "./icons/logo";
import Bell from "./icons/bell";
import Search from "./icons/search";

export default function Header({ userName = "Hashir", notificationCount = 5 }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo/>
        <span className={styles.welcome}>Welcome back, {userName}</span>
      </div>
      <div className={styles.rightFlex}>
      <div className={styles.middle}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <Search/>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className={styles.searchInput}
          />
        </form>
        <button className={styles.notifyBtn}>
        <div className={styles.container} >
        <Bell />
        {notificationCount > 0 && (
        <div className={styles.badge}>
          {notificationCount > 99 ? '99+' : notificationCount}
        </div>
      )}

        </div>
        </button>
      </div>
      <div className={styles.right}>
        <span className={styles.username}>{userName}</span>
        <img
          src="/pfp.png"
          alt="Profile"
          className={styles.pfp}
        />
      </div>
      </div>
    </header>
  );
}
