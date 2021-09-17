import React from "react";
import Chart from "../chart/Chart";
import styles from "./Dashboard.module.css";
function Dashboard(props) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.statistic}>
        <div className={styles.boxContent}>
          <div className={styles.boxTitle}>
            <h4 className={styles.boxName}>new user</h4>
            <h4 className={styles.time}>
              30
              <p>Today</p>
            </h4>
          </div>
          <div className={styles.number}>12,345</div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.boxTitle}>
            <h4 className={styles.boxName}>user</h4>
            <h4 className={styles.time}>
              30
              <p>Today</p>
            </h4>
          </div>
          <div className={styles.number}>12,345</div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.boxTitle}>
            <h4 className={styles.boxName}>user</h4>
            <h4 className={styles.time}>
              30
              <p>Today</p>
            </h4>
          </div>
          <div className={styles.number}>12,345</div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.boxTitle}>
            <h4 className={styles.boxName}>user</h4>
            <h4 className={styles.time}>
              30
              <p>Today</p>
            </h4>
          </div>
          <div className={styles.number}>12,345</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
