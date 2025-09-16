// components/Sidebar.jsx
"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./../styles/Sidebar.module.css";
import HomeIcon from "./icons/dashboard";
import SettingsIcon from "./icons/settings";
import ProfileIcon from "./icons/profile";
import ProtocolIcon from "./icons/protocol";
import TradeIcon from "./icons/trade";
import DepostIcon from "./icons/deposits";
import Logout from "./icons/logout";


export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
    { id: "trade", label: "Trade", icon: <TradeIcon />, path: "/dashboard/trade" },
    { id: "deposits", label: "Deposits", icon: <DepostIcon />, path: "/dashboard/deposits" },
    { id: "protocols", label: "Protocols", icon: <ProtocolIcon />, path: "/dashboard/protocols" },
    { id: "settings", label: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings" },
    { id: "profile", label: "Profile", icon: <ProfileIcon />, path: "/dashboard/profile" },
  ];

  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${
              pathname === item.path ? styles.active : ""
            }`}
            onClick={() => router.push(item.path)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className={styles.logout} >
      <Logout/>
      <div className={styles.txt}>Log Out</div>
      </div>
    </div>
  );
}
