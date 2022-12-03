import React from "react";
import styles from "./Carcards.moule.css"
const CarCards = (props) => {
  return (
    <div>
      <div>
        <div className={styles.container}>
          <div>{props.a}</div>
          <div>{props.b}</div>
        </div>
      </div>
      <h4 className={styles.name}>{props.x}</h4>
    <div>{props.z}</div>
  </div>
  );
};

export default CarCards;
