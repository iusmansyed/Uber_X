import React from "react";
import styles from "./topnav.module.css";
import { Link } from "react-router-dom";
import profileImg from "../../Assets/Images/profile-02.png";
const TopNav = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.carIcon}>
          <div className={styles.subHead}>
            <div>
              <i
                class="ri-taxi-line"
                style={{ color: "#01d293", fontSize: "2rem" }}
              ></i>
            </div>{" "}
            <div className={styles.text}>
              <h2 style={{ color: "white" }}>UberX</h2>
            </div>
          </div>
          <div className={styles.searchbar}>
            <div className={styles.search__box}>
              <input type="text" placeholder="" />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </div>
          <div className={styles.top_right}>
            <Link to="/notification">
              <span className={styles.notification}>
                <span className={styles.badge}>1</span>
                <i class="ri-notification-3-line"></i>
              </span>
            </Link>
            <div className="profile">
              <Link to="/setting">
                <img style={{ borderRadius: "50px" }} src={profileImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
