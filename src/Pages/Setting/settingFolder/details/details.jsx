import React from "react";
import styles from "./details.module.css";
import SideBar from "../../../../Components/Sidebar/SideBar";
import TopNav from "../../../../Components/TopNav/TopNav";
import { Link } from "react-router-dom";
const details = () => {
  return (
    <>
      <SideBar />
      <TopNav />

      <div className={styles.container}>
        <div className={styles.pageWrapper}>
          <h2>Details :</h2>
          <div className={styles.links}>
            <div className={styles.linksWrapper}>
              <Link to="/details">
                <div style={{ border: "1px solid white" }}>Details</div>
              </Link>
              <Link to="/setting">
                <div>Profile</div>
              </Link>
              <Link to="/email">
                <div>Email</div>
              </Link>
              <Link to="/password">
                <div>Password</div>
              </Link>
              <Link to="/notification">
                <div>Notification</div>
              </Link>
            </div>
          </div>
          <div className={styles.details}>
            <div>
              <div className={styles.picture}>
                <img
                  style={{ borderRadius: "50%", width: "150px" }}
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQGXWqyjOvxoxA/profile-displayphoto-shrink_800_800/0/1632836779861?e=2147483647&v=beta&t=pbUrvKdUE8zOk_GhdZfV0OexEtU5DObkAVp7PdyIoRg"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.holder}>
              <div className={styles.data_form}>
                <div>
                  <div>Name</div>
                  <div className={styles.data}>Muhammad Waqas Ghouri</div>
                </div>
                <div>
                  {" "}
                  <div>Live in</div>
                  <div className={styles.data}>Safoora Goth</div>
                </div>
                <div>
                  <div>DOB</div>
                  <div className={styles.data}>21/6/1998</div>
                </div>
                <div>
                  <div>Email</div>
                  <div className={styles.data}>waqasghouri@gmail.com</div>
                </div>
              </div>
              <div className={styles.data_form2}>
                <div>
                  <div>Phone Number</div>
                  <div className={styles.data}>03003021461</div>
                </div>
                <div>
                  {" "}
                  <div>Gender</div>
                  <div className={styles.data}>Male</div>
                </div>
                <div>
                  <div>Street</div>
                  <div className={styles.data}>No# 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
