import React from "react";
import styles from "../styles/styles.css";
import { Tile } from "./tile";
import chestah from "../../img/intro-1608234614.jpg";

export default function Grid(props) {
  const cells = props.arrOfObj.map((obj) => <Tile obj={obj}></Tile>);

  return <div className="container1">{cells}</div>;
}
