import React from "react";
import styles from "./sell.module.css";
import SideBar from "../../Components/Sidebar/SideBar";
import TopNav from "../../Components/TopNav/TopNav";
import Img from "../../Assets/Images/sell-car.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Sell = () => {
  const percentage = 55;
  const percentage02 = 60;
  return (
    <>
      <TopNav />
      <SideBar />
      <div className={styles.container}>
        <div className={styles.page_Wrapper}>
          <div>
            <h1>Sell :</h1>
          </div>
          <div className={styles.headWrapper}>
            <div>
              <img width="100%" src={Img} alt="" />
            </div>
            <div>
              <div className={styles.info}>
                <div style={{ display: "flex" }}>
                  <h2>AUDI V8 </h2>
                  <h4>(2020)</h4>
                </div>
                <div>
                  <i class="ri-speed-line" style={{ color: "orange" }}></i>{" "}
                  Speed : 200KM/H{" "}
                </div>
                <div>
                  <i class="ri-settings-5-line" style={{ color: "orange" }}></i>{" "}
                  Engine : EFI
                </div>
                <div>
                  <i class="ri-rocket-2-line" style={{ color: "orange" }}></i>{" "}
                  Horse power : 200HP
                </div>
              </div>
            </div>
          </div>
          <div className={styles.offer__wrapper}>
            <div className={styles.offer__list}>
              <div className={styles.offer__item}>
                <div className={styles.box__01}>
                  <h3 className={styles.client__name}>Syed Haris Ali</h3>
                  <h6 className={styles.avg__price}>
                    $100,000 <span>average price</span>
                  </h6>
                  <h6 className={styles.market__price}>
                    Market average is $120,000
                  </h6>
                  <span className={styles.arrow__key}>
                    <i class="ri-arrow-right-fill"></i>
                  </span>
                </div>
                <div className={styles.circle__wrapper}>
                  <div className={styles.box__02}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: "butt",
                        textSize: "16px",
                        pathTransitionDuration: 0.5,
                        pathColor: "#01d293",
                        textColor: "#fff",
                        trailColor: "#0b0c28",
                        backgroundColor: "#01d293",
                        textSize: "18px",
                      })}
                    />
                  </div>
                  <h4>Impression share</h4>
                </div>
                <div className={styles.box__03}>
                  <span className={styles.model__spend_icon}>
                    <i class="ri-car-line"></i>
                  </span>
                  <h6 className={styles.spend__amount}>$1200</h6>
                  <p className={styles.spend__title}>Model Spend</p>
                </div>
                <div className={styles.box__04}>
                  <span className={styles.model__spend_icon}>
                    <i class="ri-share-forward-line"></i>
                  </span>
                  <h6 className={styles.spend__amount}>$1200</h6>
                  <p className={styles.spend__title}>Model Spend</p>
                </div>
                <div className={styles.box__05}>
                  <span className={styles.model__spend_icon}>
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6 className={styles.spend__amount}>$1000</h6>
                  <p className={styles.spend__title}>Spend Per Unit Turned</p>
                </div>
              </div>
              <div className={styles.offer__item}>
                <div className={styles.box__01}>
                  <h3 className={styles.client__name}>Syed Muhammad Usman</h3>
                  <h6 className={styles.avg__price}>
                    $200,000 <span>average price</span>
                  </h6>
                  <h6 className={styles.market__price}>
                    Market average is $110,000
                  </h6>
                  <span className={styles.arrow__key}>
                    <i class="ri-arrow-right-fill"></i>
                  </span>
                </div>
                <div className={styles.circle__wrapper}>
                  <div className={styles.box__02}>
                    <CircularProgressbar
                      value={percentage02}
                      text={`${percentage02}%`}
                      styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: "butt",
                        textSize: "16px",
                        pathTransitionDuration: 0.5,
                        pathColor: "#01d293",
                        textColor: "#fff",
                        trailColor: "#0b0c28",
                        backgroundColor: "#01d293",
                        textSize: "18px",
                      })}
                    />
                  </div>
                  <h4>Impression share</h4>
                </div>
                <div className={styles.box__03}>
                  <span className={styles.model__spend_icon}>
                    <i class="ri-car-line"></i>
                  </span>
                  <h6 className={styles.spend__amount}>$1900</h6>
                  <p className={styles.spend__title}>Model Spend</p>
                </div>
                <div className={styles.box__04}>
                  <span className={styles.model__spend_icon}>
                    <i class="ri-share-forward-line"></i>
                  </span>
                  <h6 className={styles.spend__amount}>$1500</h6>
                  <p className={styles.spend__title}>Model Spend</p>
                </div>
                <div className={styles.box__05}>
                  <span className={styles.model__spend_icon}>
                    <i class="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6 className={styles.spend__amount}>$1020</h6>
                  <p className={styles.spend__title}>Spend Per Unit Turned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
