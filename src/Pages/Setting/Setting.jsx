import React from "react";
import TopNav from "../../Components/TopNav/TopNav";
import SideBar from "../../Components/Sidebar/SideBar";
import styles from "./setting.module.css";
import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <>
      <TopNav />
      <SideBar />
      <div className={styles.container}>
        <div className={styles.pageWrapper}>
          <h2>Settings :</h2>
          <div className={styles.links}>
            <div className={styles.linksWrapper}>
             <Link to='/details'>
              <div>Details</div>
             </Link>
             <Link to='/details'>
              <div style={{border:"1px solid white"}}>Profile</div>
             </Link>
             <Link to='/email'>
              <div>Email</div>
             </Link>
             <Link to='/password'>
              <div>Password</div>
             </Link>
             <Link to='/notification'>
              <div>Notification</div>
             </Link>
            </div>
          </div>

          <div className={styles.details__form}>
            <h2 className={styles.profile__title}>Profile</h2>
            <p className={styles.profile__desc}>
              Update your photo and personal details here
            </p>
            <div className="detail">
              <div>
                <div className={styles.form__group}>
                  <div>
                    <label>Live in</label>
                    <input
                      type="text"
                      placeholder="Karachi, Pakistan"
                    //   value={data.live}
                    //   onChange={(e) => {
                    //     setData({ ...data, live: e.target.value });
                    //   }}
                    />
                  </div>
                </div>
                <div className={styles.form__group}>
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="enter your name"
                    //   value={data.name}
                    //   onChange={(e) => {
                    //     setData({ ...data, name: e.target.value });
                    //   }}
                    />
                  </div>

                  <div>
                    <label>Street</label>
                    <input
                      type="text"
                      placeholder="SYL 3108"
                    //   value={data.street}
                    //   onChange={(e) => {
                    //     setData({ ...data, street: e.target.value });
                    //   }}
                    />
                  </div>
                </div>

                <div className={styles.form__group}>
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                    //   value={data.email}
                    //   onChange={(e) => {
                    //     setData({ ...data, email: e.target.value });
                    //   }}
                    />
                  </div>

                  <div>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="+92**-*******"
                    //   value={data.num}
                    //   onChange={(e) => {
                    //     setData({ ...data, num: e.target.value });
                    //   }}
                    />
                  </div>
                </div>

                <div className={styles.form__group}>
                  <div>
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      placeholder="dd/mm/yyyy"
                    //   value={data.dob}
                    //   onChange={(e) => {
                    //     setData({ ...data, dob: e.target.value });
                    //   }}
                    />
                  </div>

                  <div className={styles.drpdwn}>
                    <label>Gender</label>
                    <select name="" id="">
                      <option value="Male">Male</option>
                      <option value="Male">Female</option>
                    </select>
                  </div>
                </div>

                <div className={styles.form__group1}>
                  <div style={{ display: "flex", alignItem: "center" }}>
                    <label>Your Photo</label>

                    <div className={styles.upload_btn_wrapper}>
                      <button className={styles.btn}>Upload a file</button>
                      <input
                        type="file"
                        name="myfile"
                        // value={data.photo}
                        // onChange={(e) => {
                        //   setData({ ...data, photo: e.target.value });
                        // }}
                      />
                    </div>
                  </div>

                  <div className={styles.profile__img_btns}>
                    <button className={styles.update__btn}>Delete</button>
                    <button
                      className={styles.update__btn}
                    //   onClick={handleSubmit}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
