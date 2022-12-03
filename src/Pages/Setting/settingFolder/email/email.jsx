import React from "react";
import styles from "./email.module.css";
import { Link } from "react-router-dom";
import SideBar from "../../../../Components/Sidebar/SideBar";
import TopNav from "../../../../Components/TopNav/TopNav";

const email = () => {
  return (
    <>
      <TopNav />
      <SideBar />
      <div className={styles.container}>
        <div className={styles.pageWrapper}>
          <h2>Email :</h2>
          <div className={styles.links}>
            <div className={styles.linksWrapper}>
              <Link to="/details">
                <div >Details</div>
              </Link>
              <Link to="/setting">
                <div>Profile</div>
              </Link>
              <Link to="/email">
                <div style={{ border: "1px solid white" }}>Email</div>
              </Link>
              <Link to="/password">
                <div>Password</div>
              </Link>
              <Link to="/notification">
                <div>Notification</div>
              </Link>
            </div>
          </div>
          <h2 style={{textAlign:"center", marginTop:"50px"}}>Change Your Email</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
              width: "100%",
            }}
          >
            <div
            className={styles.Holder}
            >
              <div className={styles.formInput}>
                <p>Email</p>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.formInput}>
                <p>Confirm your Email</p>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.btn}>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default email;
