import React from "react";
import styles from "./progress.module.css";
import TopNav from "../../Components/TopNav/TopNav";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import SideBar from "../../Components/Sidebar/SideBar";
const ProgrssBar = () => {
  const percentage = 55;
  const percentage02 = 60;
  const percentage03 = 95;
  
  return (
    <>
      <TopNav />
      <SideBar />
      <div className={styles.container}>
        <div className={styles.main_div}>
          <h1 style={{ textAlign: "center" }}>Progress Bar</h1>
          <div className={styles.box_holder}>
            <div className={styles.box}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: "#01d293",
                  textColor: "#fff",
                  trailColor: "#0b0c28",
                  backgroundColor: "#01d293",
                  textSize: "18px",
                })}
              />
            </div>
            <div className={styles.box}>
              <CircularProgressbar
                value={percentage02}
                text={`${percentage02}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: "#30D46F",
                  textColor: "#fff",
                  trailColor: "#0b0c28",
                  backgroundColor: "#01d293",
                  textSize: "18px",
                })}
              />
            </div>
            <div className={styles.box}>
              <CircularProgressbar
                value={percentage03}
                text={`${percentage03}%`}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "16px",
                  pathTransitionDuration: 0.5,
                  pathColor: "#FFD700",
                  textColor: "#fff",
                  trailColor: "#0b0c28",
                  backgroundColor: "#01d293",
                  textSize: "18px",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrssBar;
