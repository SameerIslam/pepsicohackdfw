import React from "react";
import styles from "../styles/styles.css";
import { Tile } from "./tile";

export default function Grid(props) {
  const cells = props.arrOfObj.map((obj) => (
    <Tile obj ={obj}></Tile>
  ));

  return (
    <div className="container1" styles={styles.container1}>
      {cells}
    </div>
  );
}
