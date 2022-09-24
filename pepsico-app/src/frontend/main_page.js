//import { signIn } from "../backend/auth";
import Navbar from "./components/navBar.js";

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
      <div className="container">
        <button onClick={handleClick}>Main page</button>
      </div>
    </>
  );
}
