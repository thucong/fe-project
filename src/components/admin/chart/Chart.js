import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { MoneyCollectOutlined } from "@ant-design/icons";
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "# of Votes",
      barPercentage: 1,
      barThickness: 40,
      maxBarThickness: 40,
      minBarLength: 2,
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      backgroundColor: ["#23c6c6"],
    },
  ],
};

function Chart(props) {
  return (
    <div className={styles.chartContainer}>
      <h1 className={styles.chartTitel}>Sales of 2020 (thousand usd)</h1>
      <div className={styles.chartContent}>
        <div className={styles.chartColumn}>
          <Bar data={data} width={400} height={200} options={{}} />
        </div>
        <div className={styles.period}>
          <div className={styles.revenuePeriod}>
            <div className={styles.periodTitle}>Current period</div>
            <div className={styles.periodContent}>
              <div className={styles.moneyTotal}>
                987,654,321
                <p>$</p>
              </div>
            </div>
          </div>
          <div className={styles.revenuePeriod}>
            <div className={styles.periodTitle}>previous period</div>
            <div className={styles.periodContent}>
              <div className={styles.moneyTotal}>
                123,456,789
                <p>$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
