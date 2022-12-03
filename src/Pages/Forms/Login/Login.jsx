import React from "react";
import styles from "./form.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = () => {
    if (name == "admin" && password == "admin") {
    setTimeout(() => {
      navigate("/dashboard");
      
    }, 1000);
    toast('Successfully Logged in', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    }else if (name == "" && password ==""){
      toast.info('Please fill the fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }); 
    }else{
      toast.error('Enter Correct Credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.heading}>
          <h1>UBER X</h1>
          <div className={styles.form}>
            <div className={styles.form1}>
              <label>Username</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.form2}>
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.btn}>
              <button onClick={handleSubmit}>Submit</button>
            </div>
            <span>
              <Link to="/reset">
                <h6
                  style={{
                    textAlign: "center",
                    color: "white",
                    marginTop: "20px",
                  }}
                >
                  Forgot Password
                </h6>
              </Link>
            </span>
          </div>
          <div className={styles.footer}>
            <h4 style={{ textAlign: "center", color: "white" }}>OR</h4>
            <div className={styles.iconsHolder}>
              <div className={styles.icons}>
                <div className={styles.github}>
                  <i class="ri-github-line"></i>
                </div>
                <div className={styles.google}>
                  <i class="ri-google-line"></i>
                </div>
                <div className={styles.facebook}>
                  <i class="ri-facebook-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Login;
