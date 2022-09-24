import styles from "../styles/styles.css";
import { signIn } from "../../../src/backend/auth.js";
import logo from "../../pepsicologo.png";

console.log(logo);

export default function Navbar(props) {
  const handleClick = (event) => {
    props.func();
  };
  return (
    <nav className="nav">
      <a href="https://www.pepsico.com/">
        <img src={logo} alt="Logo" width="200 px" />
      </a>
      <h1 styles={styles.siteTitle}> Chester's Chest Quest</h1>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a onClick={handleClick}>Login/Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
