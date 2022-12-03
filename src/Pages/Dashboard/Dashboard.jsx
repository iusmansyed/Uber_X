import React from "react";
import styles from "./dashboard.module.css";
import TopNav from "../../Components/TopNav/TopNav";
import Sidebar from "../../Components/Sidebar/SideBar";
import Cards from "../../Components/cards/cards";
import Chart1 from "../../Components/Charts/Charts";
import Chart2 from "../../Components/Charts/Charts1";
import CarCards from "../../Components/CarCards/CarCards";
import Image from "../../Assets/Images/mini-car-02.png";
const Dashboard = () => {
  return (
    <>
      <TopNav />
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.Dashboard_wrapper}>
          <div className={styles.dashboard_cards_wrapper}>
            <div className={styles.card}>
              <div>
                <Cards x={"Daily Drive "} />
              </div>
              <div>
                <Cards
                  y={
                    <i
                      class="ri-roadster-line"
                      style={{ fontSize: "40px" }}
                    ></i>
                  }
                />
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <Cards x={"Distance"} />
              </div>
              <div>
                <Cards
                  y={<i class="ri-run-line" style={{ fontSize: "40px" }}></i>}
                />
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <Cards x={"Trips"} />
              </div>
              <div>
                <Cards
                  y={
                    <i
                      class="ri-steering-line"
                      style={{ fontSize: "40px" }}
                    ></i>
                  }
                />
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <Cards x={"Clients"} />
              </div>
              <div>
                <Cards
                  y={<i class="ri-user-fill" style={{ fontSize: "40px" }}></i>}
                />
              </div>
            </div>
          </div>
          <div className={styles.charts}>
            <div className={styles.chart1}>
              <Chart1 />
            </div>
            <div
              style={{
                border: "1px solid white",
                background: " var(--primary-color)",
                borderRadius:"12px"
              }}
            >
              <Chart2 />
            </div>
          </div>
          <div className={styles.car_card_wrapper}>
            <div className={styles.car_card}>
              <div style={{ display: "flex", columnGap:"10px", alignItems:"center",marginTop:"-5px" }}>
                <div>
                  <CarCards a={<i class="ri-repeat-line"></i>} />
                </div>{" "}
                <div>
                  <CarCards b={"74K recommanded"} />
                </div>
              </div>
              <div style={{width:"60%"}}>
                <img width='100%' src={Image} alt="" />
              </div>
              <div>
                <CarCards x={"Civic"} />{" "}
              </div>
              <div style={{ display: "flex" ,columnGap:"10px" , alignItems:"center" }}>
                <div>
                  <CarCards z={<i class="ri-money-dollar-circle-line"></i>} />
                </div>
                <div>$28/h</div>
              </div>
            </div>
            <div className={styles.car_card}>
              <div style={{ display: "flex", columnGap:"10px", alignItems:"center",marginTop:"-5px" }}>
                <div>
                  <CarCards a={<i class="ri-repeat-line"></i>} />
                </div>{" "}
                <div>
                  <CarCards b={"74K recommanded"} />
                </div>
              </div>
              <div style={{width:"60%"}}>
                <img width='100%' src={Image} alt="" />
              </div>
              <div>
                <CarCards x={"Civic"} />{" "}
              </div>
              <div style={{ display: "flex" ,columnGap:"10px" , alignItems:"center" }}>
                <div>
                  <CarCards z={<i class="ri-money-dollar-circle-line"></i>} />
                </div>
                <div>$28/h</div>
              </div>
            </div>
            <div className={styles.car_card}>
              <div style={{ display: "flex", columnGap:"10px", alignItems:"center",marginTop:"-5px" }}>
                <div>
                  <CarCards a={<i class="ri-repeat-line"></i>} />
                </div>{" "}
                <div>
                  <CarCards b={"74K recommanded"} />
                </div>
              </div>
              <div style={{width:"60%"}}>
                <img width='100%' src={Image} alt="" />
              </div>
              <div className={styles.name}>
                <CarCards x={"Civic"} />{" "}
              </div>
              <div style={{ display: "flex" ,columnGap:"10px" , alignItems:"center" }}>
                <div>
                  <CarCards z={<i class="ri-money-dollar-circle-line"></i>} />
                </div>
                <div>$28/h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
