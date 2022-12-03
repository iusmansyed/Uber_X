import React from "react";
import styles from "./button.module.css";
import TopNav from "../../Components/TopNav/TopNav";
import SideBar from "../../Components/Sidebar/SideBar";

const button = () => {
  return (
    <>
      <SideBar />
      <TopNav />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.page}>
            <div className={styles.Btn1}>
              <span>
                {" "}
                <button className={styles.button_1} role="button">
                  Button
                </button>
              </span>
              <span>
                <button className={styles.primary}>Primary</button>
              </span>
              <span>
                <button className={styles.button_27} role="button">
                  button
                </button>
              </span>
              <span>
                <button className={styles.button_29} role="button">
                  button
                </button>
              </span>
              <span>
                <button className={styles.button_33} role="button">
                  button
                </button>
              </span>
              <span>
                <button className={styles.button_43} role="button">
                  button
                </button>
              </span>
              <span>
                <button className={styles.button_61} role="button">
                  button
                </button>
              </span>
              <span>
                <button className={styles.button_71} role="button">
                  button
                </button>
              </span>
              <span>
                <button className={styles.button_69} role="button">
                  button
                </button>
              </span>
              <span>
                <button className={styles.button_78} role="button">
                  button1
                </button>
              </span>
              <span>
                <button className={styles.button_86} role="button">
                  button1
                </button>
              </span>
              <span>
                <button className={styles.button89} role="button">
                  button1
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default button;
