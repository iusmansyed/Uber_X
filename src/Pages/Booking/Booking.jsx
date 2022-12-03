import React from "react";
import SideBar from "../../Components/Sidebar/SideBar";
import TopNav from "../../Components/TopNav/TopNav";
import styles from "./booking.module.css";
import Card from "../../Components/BookingCards/BookingCard";
import BookingCars from "../../Assets/dummyData";
const Booking = () => {
  return (
    <>
      <TopNav />
      <SideBar />
      <div className={styles.container}>
        <div className={styles.booking_wrapper}>
          <div className={styles.headWrapper}>
            <div className={styles.heading}>
              <h1>Booking:</h1>
            </div>
            <div className={styles.dropDown}>
              <select>
                <option value="nissan">NISSAN</option>
                <option value="toyota">TOYOTA</option>
                <option value="honda">HONDA</option>
              </select>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div className={styles.cards_wrapper}>
            <div className={styles.cards}>
              {BookingCars?.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
