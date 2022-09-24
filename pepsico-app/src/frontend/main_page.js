import { signIn } from "../backend/auth";
import { Board } from "../backend/Board_Model";
import { getBoard } from "../backend/crud_functions";
import { useState } from "react";

import Navbar from "./components/navBar.js";


export function MainPage() {
  async function getResponse() {
    //const a = await signIn();
  }


export function MainPage(){

    const [board, setBoard] = useState();

    async function getResponse(){
        const a = await signIn();
        const userBoard = await getBoard(a.userId);
        setBoard(userBoard);
    }
    const handleClick = (event) =>{
        getResponse();
    }

    async function testRandoms(){
        board.revealRandom(5);
        console.log(board);
    }

    const handleClick2 = () => {
        testRandoms();
    }
    return(
        <div>
            <button onClick={handleClick}>Main page</button>
            <button onClick={handleClick2}>test page</button>
        </div>
    );
}

  return (
    <>
      <Navbar />
      <div className="container">
        <button onClick={handleClick}>Main page</button>
      </div>
    </>
  );
}

