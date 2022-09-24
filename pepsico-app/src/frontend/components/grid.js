import React from "react";
import styles from "../styles/styles.css";

export default function Grid(props) {
  const cells = props.arrOfObj.map((obj) => (
    <div
      style={{
        width: "115px",
        height: "115px",
        backgroundColor: `#FFC857`,
        border: "5px solid #544A26",
        
      }}
      className="item"
    >
      {obj}
    </div>
  ));

  return (
    <div className="container1" styles={styles.container1}>
      {cells}
    </div>
  );
}
