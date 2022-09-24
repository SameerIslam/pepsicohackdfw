import styles from "../styles/styles.css";
import { signIn } from "../../../src/backend/auth.js";
import logo from "../../img/pepsicologo.png";

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
      <h1 styles={styles.siteTitle}> 
        <span className="font-link">
         Chester's Chest Quest
        </span>
      </h1>
      <ul>
        <li>
          <span className="font-link">
            <a href="/about">About</a>
          </span>
        </li>
        <li>

          <span className="font-link">
            <a onClick={handleClick}>Login/Sign Up</a>
          </span>

     
        </li>
      </ul>
    </nav>
  );
}
