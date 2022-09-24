import { signIn } from "../backend/auth";
import { Board } from "../backend/Board_Model";
import { getBoard } from "../backend/crud_functions";
import { useState } from "react";

import Navbar from "./components/navBar.js";
import Grid from "./components/grid.js";

const arrOfObj = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export function MainPage() {
  const [board, setBoard] = useState();

  async function getResponse() {
    const a = await signIn();
    const userBoard = await getBoard(a.userId);
    setBoard(userBoard);
  }
  const handleClick = (event) => {
    getResponse();
  };

  async function testRandoms() {
    board.revealRandom(5);
    console.log(board);
  }

  const handleClick2 = () => {
    testRandoms();
  };
  return (
    <div>
      <Navbar />
      <Grid arrOfObj={arrOfObj} />
      <div className="container">
        <button onClick={handleClick}>Main page</button>
      </div>

      <button onClick={handleClick}>Login in</button>
      <button onClick={handleClick2}>test page</button>
    </div>
  );
}
