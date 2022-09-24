import React from 'react'
import styles from "../styles/styles.css";
import { useState } from 'react';
import { validate } from '../../backend/crud_functions';

export default function TextBox() {
  const [value, setValue] = useState("");

  async function validation(){
    const arr = value.split("-");
    const num = await validate(arr[0], arr[1]);
    console.log(num);
  }

  const handleClick = () =>{
    //var text = e.target.value;
    
    
    validation();
  }

  const onChange = (e) =>{
    setValue(e.target.value);
  }
  return (
    <div class="tb">
        <input id = "couponInput" type = "text" onChange={onChange} value={value}></input>
        <button id = "textButton" onClick={handleClick}>Enter Code</button>
    </div>
    

  )
}
