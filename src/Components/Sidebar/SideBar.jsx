import React from "react";
import { Link } from "react-router-dom";
import  {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Dropdown from "../dropDown/DropDown";
import styles from "./sidebar.module.css";
const SideBar = () => {
  const goTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar_wrapper}>
          <div className={styles.menu}>
            <ul className={styles.nav__list}>
              <Link to="/dashboard" onClick={goTop}>
                <li>
                  <div className={styles.opt1}>
                    <span>
                      <i
                        class="ri-dashboard-3-line"
                        style={{ color: "#01d293", fontSize: "1.5rem" }}
                      ></i>
                    </span>{" "}
                    <span className={styles.sideBarIcon}>Dashboard</span>
                  </div>
                </li>
              </Link>
              <Link to="/booking" onClick={goTop}>
                <li>
                  {" "}
                  <span>
                    <i
                      class="ri-profile-line"
                      style={{ color: "#01d293", fontSize: "1.5rem" }}
                    ></i>
                  </span>{" "}
                  <span className={styles.sideBarIcon}> Booking </span>
                </li>
              </Link>
              <Link to="/sell" onClick={goTop}>
                <li>
                  {" "}
                  <span>
                    <i
                      class="ri-shopping-bag-line"
                      style={{ color: "#01d293", fontSize: "1.5rem" }}
                    ></i>
                  </span>{" "}
                  <span className={styles.sideBarIcon}> Sell Car</span>
                </li>
              </Link>
              <Link to="/setting" onClick={goTop}>
                <li>
                  {" "}
                  <span>
                    <i
                      class="ri-settings-line"
                      style={{ color: "#01d293", fontSize: "1.5rem" }}
                    ></i>
                  </span>{" "}
                  <span className={styles.sideBarIcon}> Settings </span>
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.dropdown}>
            <Dropdown />
          </div>
            <Link to="/login">
          <div className={styles.logout} >

            <div>
              <i
                class="ri-logout-circle-line"
                style={{ color: "#01d293", fontSize: "1.5rem" }}
              ></i>
            </div>
          
            <div >
              <p className={styles.sideBarIcon} > Log Out </p>
            </div>
          
          </div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
