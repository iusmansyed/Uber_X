import React from 'react'
import styles from "./password.module.css"
import SideBar from '../../../../Components/Sidebar/SideBar'
import TopNav from '../../../../Components/TopNav/TopNav'
import { Link } from 'react-router-dom'
const password = () => {
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
              <div>Email</div>
            </Link>
            <Link to="/password">
              <div  style={{ border: "1px solid white" }}>Password</div>
            </Link>
            <Link to="/notification">
              <div>Notification</div>
            </Link>
          </div>
        </div>
        <h2 style={{textAlign:"center", marginTop:"50px"}}>Change Your Password</h2>
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
              <p>Password</p>
              <input type="text" name="" id="" />
            </div>
            <div>
              <p>Confirm your Password</p>
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
  )
}

export default password