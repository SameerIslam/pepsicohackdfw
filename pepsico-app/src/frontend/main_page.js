import { signIn } from "../backend/auth";
import { Board } from "../backend/Board_Model";
import { getBoard, updateBoard } from "../backend/crud_functions";
import { useEffect, useState } from "react";

import Navbar from "./components/navBar.js";
import Grid from "./components/grid.js";
import TextBox from "./components/textBox.js";
import Chester from "../img/thumbs-up-chester-cheetah.png";
import oasis from "../img/oasispano.png";

const arrOfObj = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export function MainPage() {
  const [board, setBoard] = useState();
  const [boardVals, setBoardVals] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    console.log(board);
  }, [boardVals]);
  async function getResponse() {
    const a = await signIn();
    await setUser(a);
    const userBoard = await getBoard(a.userId);
    console.log(userBoard);
    await setBoard(userBoard);
    await setBoardVals(userBoard.boardValues);
  }

  async function testRandoms(nums) {
    board.revealRandom(nums);
    setBoard(board);
    const a = board.boardValues;
    setBoardVals([...a]);
    console.log(board);
    await updateBoard(user.userId, board);
  }

  const handleClick2 = () => {
    testRandoms();
  };
  return (
    <div>
      <Navbar func={getResponse} />

      <div className="gridSurrounding">
        <Grid arrOfObj={boardVals} />
        <div className="chestah">
          <img src={Chester} alt="Chester" width="250 px" />
        </div>
      </div>
      <div className="input">
      <TextBox testRandoms={testRandoms} />
      </div>
      <div className ="footer">
        <img src={oasis} alt="oasis" width="100%" />
      </div>
       
    </div>
  );
}
