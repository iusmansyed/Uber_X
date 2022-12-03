import React from "react";
import styles from "./notification.module.css";
import SideBar from "../../../../Components/Sidebar/SideBar";
import TopNav from "../../../../Components/TopNav/TopNav";
import { Link } from "react-router-dom";

const notification = () => {
  return (
    <>
      <TopNav />
      <SideBar />

      <div className={styles.container}>
        <div className={styles.pageWrapper}>
          <h2>Notication :</h2>
          <div className={styles.links}>
            <div className={styles.linksWrapper}>
              <Link to="/details">
                <div>Details</div>
              </Link>
              <Link to="/setting">
                <div>Profile</div>
              </Link>
              <Link to="/email">
                <div >Email</div>
              </Link>
              <Link to="/password">
                <div>Password</div>
              </Link>
              <Link to="/notification">
                <div style={{ border: "1px solid white" }}>Notification</div>
              </Link>
            </div>
          </div>
          <div className={styles.notification}>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            <div className={styles.Notify}>
              <h3>Jonson </h3>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quia omnis non sit est eligendi, quasi, dolorem eum dolor
                mollitia aspernatur! Labore voluptatum alias natus eligendi
                veniam! Quam, suscipit dolores.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default notification;
