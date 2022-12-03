import React from "react";
import styles from "./cards.module.css";
const cards = (props) => {
  return (
    <div className={styles.container}>
      {" "}
      <div style={{ display: "flex" }}>
        <div>
          <h2> {props.x}</h2>
        </div>
        <div>
          <span>{props.y}</span>
        </div>
      </div>
    </div>
  );
};

export default cards;
