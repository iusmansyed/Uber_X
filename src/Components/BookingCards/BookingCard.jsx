import React, { useState } from "react";
import styles from "./booking.module.css"
const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  const [state , setState]=useState("") 
  return (
    <div className={styles.car__item}>
      <div className={styles.car__item_top}>
        <div className={styles.car__item_tile}>
          <h3>{carName}</h3>

          <span
            onClick={() =>
              setState(!state) ? (
                <i class="ri-heart-fill"></i>
              ) : (
                <i class="ri-heart-line"></i>
              )
            }
          >
            {state ? (
              <i
                class="ri-heart-fill"
                style={{ color: "red", transition: "0.5s", float: "right",fontSize:"2rem" }}
              ></i>
            ) : (
              <i
                class="ri-heart-line"
                style={{ color: "white", transition: "0.5s", float: "right",fontSize:"1.5rem" }}
              ></i>
            )}
          </span>
        </div>
        <p>{category}</p>
      </div>

      <div className={styles.car__img}>
        <img  src={imgUrl} alt="" />
      </div>

      <div className={styles.car__item_bottom}>
        <div className={styles.car__bottom_left}>
          <p>
            <i class="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {type}
          </p>
        </div>

        <p className={styles.car__rent}>${rentPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
