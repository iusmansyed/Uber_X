import React from "react";
import styles from "./stats.module.css";
import SideBar from "../../Components/Sidebar/SideBar";
import TopNav from "../../Components/TopNav/TopNav";
import Chart1 from "../../Components/Charts/Charts";
import Chart2 from "../../Components/Charts/Charts1";
const stats = () => {
  return (
    <>
      <SideBar />
      <TopNav />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.chart}>
            <div>
              <Chart1 />
            </div>
            <div>
              <Chart2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default stats;
