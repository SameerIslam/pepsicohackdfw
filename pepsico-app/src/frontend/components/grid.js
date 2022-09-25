import React from "react";
import styles from "../styles/styles.css";
import { Tile } from "./tile";
import chestah from "../../img/intro-1608234614.jpg";

var z = {zIndex:-1};

export default function Grid(props) {
  if (props.load){
    z = {zIndex:2};
  }
  const cells = props.arrOfObj.map((obj) => <Tile obj={obj}></Tile>);

  return <div className="container1" style={z}>{cells}</div>;
}
