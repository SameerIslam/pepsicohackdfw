//import { signIn } from "../backend/auth";
import Navbar from "./components/navBar.js";
import Grid from "./components/grid.js";

const arrOfObj = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export function MainPage() {
  async function getResponse() {
    //const a = await signIn();
  }

  const handleClick = (event) => {
    getResponse();
  };
  return (
    <>
      <Navbar />
      <Grid arrOfObj={arrOfObj} />
      <div className="container">
        <button onClick={handleClick}>Main page</button>
      </div>
    </>
  );
}
