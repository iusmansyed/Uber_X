import React from "react";
import styles from "./cards.module.css";
import TopNav from "../../Components/TopNav/TopNav";
import { useState } from "react";
import SideBar from "../../Components/Sidebar/SideBar";
const Card = () => {
    const [state, setState] = useState("");
  return (
    <>
      <TopNav/>
      <SideBar/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.dashboard__cards}>
            <div
              className={styles.card}
             
            >
              <i class="ri-bank-card-2-fill" style={{ fontSize: "2rem" }}></i>
              <br />
              <h5>cards</h5>
            </div>
            <div
              className={styles.card1}
             
            >
              <i class="ri-bank-card-2-fill" style={{ fontSize: "2rem" }}></i>
              <br />
              <h5>cards</h5>
            </div>
            <div
              className={styles.card2}
             
            >
              <i class="ri-bank-card-2-fill" style={{ fontSize: "2rem" }}></i>
              <br />
              <h5>cards</h5>
            </div>
            <div
              className={styles.card3}
             
            >
              <i class="ri-bank-card-2-fill" style={{ fontSize: "2rem" }}></i>
              <br />
              <h5>cards</h5>
            </div>
          </div>
          <div className={styles.recommend__cars_wrapper}>
            <div
              className={styles.large_card}
            
            >
              <i
                class="ri-roadster-fill"
                style={{ fontSize: "3rem", color: "white" }}
              ></i>
              <br />
              <h5 style={{ color: "white" }}>Car cards</h5>
            </div>
            <div
              className={styles.large_card1}
            
            >
              <i
                class="ri-roadster-fill"
                style={{ fontSize: "3rem", color: "white" }}
              ></i>{" "}
              <br />
              <h5 style={{ color: "white" }}>Car cards</h5>
            </div>
            <div
              className={styles.large_card2}
            
            >
              <i
                class="ri-roadster-fill"
                style={{ fontSize: "3rem", color: "white" }}
              ></i>
              <br />
              <h5 style={{ color: "white" }}>Car cards</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
