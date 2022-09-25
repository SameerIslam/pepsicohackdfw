import { signIn } from "../backend/auth";
import { getBoard, updateBoard } from "../backend/crud_functions";
import { useEffect, useState } from "react";

import Navbar from "./components/navBar.js";
import Grid from "./components/grid.js";
import TextBox from "./components/textBox.js";
import Chester from "../img/thumbs-up-chester-cheetah.png";
import oasis from "../img/oasispano.png";

const emptyBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export function MainPage() {
  const [board, setBoard] = useState();
  const [boardVals, setBoardVals] = useState([]);
  const [user, setUser] = useState();
  const [l, setL] = useState(false);

  useEffect(() => {
    console.log(board);
  });
  async function getResponse() {
    const a = await signIn();
    await setUser(a);
    const userBoard = await getBoard(a.userId);
    console.log(userBoard);
    await setBoard(userBoard);
    await setBoardVals(userBoard.boardValues);
    loader();
    return a;
  }

  async function loader(){
    setTimeout(()=>{
        setL(true)
    },500);
  }

  async function testRandoms(nums) {
    board.revealRandom(nums);
    setBoard(board);
    const a = board.boardValues;
    setBoardVals([...a]);
    console.log(board);
    await updateBoard(user.userId, board);
  }

  return (
    <div>
      <Navbar func={getResponse} />

      <div className="gridSurrounding">
        <div class="card">
            <p>and act like ion know nobody</p>
        </div>

        {l ? <Grid arrOfObj={boardVals} load={l}/> : <Grid arrOfObj={emptyBoard} load={true}/>}

        <div className="chestah">
          <img src={Chester} alt="Chester" width="250 px" />
        </div>
      </div>
      <div className="input">
        <TextBox testRandoms={testRandoms} />
      </div>
      <div className="footer">
        <img src={oasis} alt="oasis" width="100%" />
      </div>
    </div>
  );
}
