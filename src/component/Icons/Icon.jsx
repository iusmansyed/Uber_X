import React from "react";
import SideBar from "../../Components/Sidebar/SideBar";
import TopNav from "../../Components/TopNav/TopNav";
import styles from "./icon.module.css";
const Icon = () => {
  return (
    <>
      <TopNav />
      <SideBar />
      <div className={styles.container}>
        <div className={styles.icons}>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-refresh-line"></i>
            </a>
            <p>Refresh Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-car-line"></i>
            </a>
            <p>Car Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-steering-line"></i>
            </a>
            <p>Steering Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-user-line"></i>
            </a>
            <p>User Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-timer-flash-line"></i>
            </a>
            <p>Timer</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-repeat-line"></i>
            </a>
            <p>Repeat Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-heart-line"></i>
            </a>
            <p>Heart Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-heart-fill"></i>
            </a>
            <p>Heart Filled Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-arrow-right-fill"></i>
            </a>
            <p>Arrow Right Filled Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-share-forward-fill"></i>
            </a>
            <p>Share Forward Icon</p>
          </div>
          <div>
            <a href="https://remixicon.com/">
              <i class="ri-money-dollar-circle-fill"></i>
            </a>
            <p>Money Dollar Circle Icon </p>
          </div>
          <div>
            <a href="https://remixicon.com/"></a>
            <p></p>
          </div>
          <div>
            <a href="https://remixicon.com/"></a>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icon;
