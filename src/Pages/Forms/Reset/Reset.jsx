import React from "react";
import styles from "./reset.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Reset = () => {
  const [username, setUsername] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    if (username == "admin") {
      setTimeout(() => {
        navigate("/user");
      }, "2000");

      toast.success("Correct Username", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (username == "") {
      toast.info("Please fill the feild", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Wrong Username!", {
        position: "top-right",
        autoClose: 1000,
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
        <div className={styles.subContainer}>
          <div>
            <h1 style={{ color: "white", textAlign: "center" }}>
              Enter Your User Name
            </h1>
          </div>
          <label
            for="inputPassword5"
            class="form-label"
            style={{ marginTop: "5vh", fontSize: "large" }}
          >
            User name
          </label>
          <input
            type="email"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className={styles.btn2}>

          <button
            type="button"
            className={styles.btn}
            onClick={handleSubmit}
            >
            Submit
          </button>
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
      </div>
    </>
  );
};

export default Reset;
