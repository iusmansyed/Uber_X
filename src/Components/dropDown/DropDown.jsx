import React from "react";
import styles from "./dropdown.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const [click, setClick] = useState(false);
  const [arr, setArr] = useState(false);
  return (
    <>
      <div className={styles.dropdown}>
        <button
          onClick={() => {
            setClick(!click);
            setArr(!arr);
          }}
        >
          <h4>
            {" "}
            <span>
              <i
                class="ri-checkbox-blank-circle-line"
                style={{ color: "#01d293", fontSize: "1.5rem" }}
              ></i>
            </span>{" "}
            <span className={styles.compName}> Components</span>{" "}
            {arr ? (
              <i
                class="ri-arrow-up-s-line"
                style={{
                  color: "#01d293",
                  position: "relative",
                  bottom: "0.3rem",
                  transition:"1s"
                }}
              ></i>
            ) : (
              <i
                class="ri-arrow-down-s-line"
                style={{
                  color: "#01d293",
                  position: "relative",
                  bottom: "0.3rem",
                  transition:"1s"
                }}
              ></i>
            )}
          </h4>
        </button>

        {click ? (
          <>
            <div className={styles.btn}>
              <Link to="/btn">
                <abbr title="Button">
                  <p>
                    {" "}
                    <i
                      class="ri-radio-button-fill"
                      style={{ color: "#01d293" }}
                    ></i>
                  <span className={styles.name}> Buttons </span>
                  </p>
                </abbr>
              </Link>
              <Link to="/card">
                <abbr title="Cards">

                <p>
                  {" "}
                  <i
                    class="ri-bank-card-2-line"
                    style={{ color: "#01d293" }}
                    ></i>
                 <span className={styles.name}> Cards </span>
                </p>
                    </abbr>
              </Link>
              <Link to="/icon">
                <abbr title="Icons">

                <p>
                  {" "}
                  <i
                    class="ri-remixicon-line"
                    style={{ color: "#01d293" }}
                    ></i>
                 <b className={styles.name}> Icons </b>
                </p>
                    </abbr>
              </Link>

              <Link to="/stats">
                <abbr title="Charts">

                <p>
                  {" "}
                  <i
                    class="ri-bar-chart-grouped-line"
                    style={{ color: "#01d293" }}
                    ></i>
                 <b className={styles.name}> Stats Charts </b>
                </p>
                    </abbr>
              </Link>
              <Link to="/progressbar">
                <abbr title="Progress bar">

                <p>
                  {" "}
                  <i
                   class="ri-edit-circle-fill"
                   style={{ color: "#01d293" }}
                   ></i>
                  <span className={styles.name}> Progress Bar </span>
                </p>
                   </abbr>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
