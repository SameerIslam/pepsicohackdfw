import React from 'react'
import styles from "../styles/styles.css";
import validate from '../../backend/validate';

export default function TextBox() {
  return (
    <div class="tb">
        <input id = "couponInput" type = "text"></input>
        <button id = "textButton">Enter Code</button>
    </div>
    

  )
}
