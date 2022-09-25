import React from "react";
import styles from "../styles/styles.css";
import { useState } from "react";
import { validate } from "../../backend/crud_functions";
import { async } from "@firebase/util";

export default function TextBox(props) {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");

  async function validation() {
    const arr = value.split("-");
    if (arr.length == 2){
      const num = await validate(arr[0], arr[1]);
      props.testRandoms(num);
      console.log(num);
      if (num === 0){
        console.log("validation error");
        setErr("ERROR");
      }else{
        setErr("");
      }
    }else{
      console.log("validation error");
      setErr("ERROR");
    }
    
  }

  const handleClick = () => {
    //var text = e.target.value;

    validation();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div class="tb">

      <input
        id="couponInput"
        type="text"
        placeholder="Enter Code Here"
        onChange={onChange}
        value={value}
      ></input>
       <label id="error">{err}</label>
      <button id="textButton" onClick={handleClick}>
        <span className="font-link">Submit Code</span>
      </button>

    </div>
  );
}
