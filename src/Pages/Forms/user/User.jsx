import React from "react";
import styles from "./user.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const User = () => {
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
let Navigate = useNavigate()
  const handleSubmit = (e) => {
    if (pwd == "admin" && cpwd == "admin") {

      setTimeout(() => {
        Navigate("/");
      }, "5000")

      toast.success("Password Changed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (pwd == "" && cpwd == "") {
      toast.info("Please fill the fields !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Wrong Credentials!", {
        position: "top-center",
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
        <div className={styles.main_form}>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Enter Your New Password
          </h1>
          <div style={{margin:"30px"}}>
            <div className="mb-5 , mt-4" style={{ width: "100%"  }}>
              <label for="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setPwd(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Put new password
              </div>
            </div>
            <div className="mb-5" style={{ width: "100%" }}>
              <label for="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={cpwd}
                onChange={(e) => setCpwd(e.target.value)}
              />
            </div>

            <div>
              
              <button
                type="submit"
                
                style={{ width: "35%", marginLeft: "35%"  , backgroundColor:" #090a20", height:"40px" ,borderRadius:"12px",border:"none"}}
                 onClick={handleSubmit}
              >
                Submit
              </button>
              
            </div>
          </div>
        </div>

        <ToastContainer
          position="top-center"
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
      </div>
    </>
  );
};

export default User;
