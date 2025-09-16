import React from 'react';
import styles from './styles/DashboardBox.module.css';
import ChainAllocations from './components/ChainAllocation';
import TokenTable from './components/Tokens';
import CommunityBox from './components/Community';
import MainBox from './components/DashboardBox';
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <MainBox />
        </div>
      <div className={styles.box2}>
        <TokenTable />
        </div>
      <div className={styles.box3}>    
          <ChainAllocations />
      </div>
      <div className={styles.box4}>
        <CommunityBox />
      </div>
    </div>
  );
}
