import React from "react";
import styles from "../styles/styles.css";

export default function Grid(props) {
  const cells = props.arrOfObj.map((obj) => (
    <div
      style={{
        backgroundColor: `#FFC857`,
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
