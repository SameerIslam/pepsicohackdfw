import styles from "../styles/styles.css";
import { signIn } from "../../../src/backend/auth.js";


export default function Navbar() {
  async function getResponse(){
    const a = await signIn();
  }

  const handleClick = (event) =>{
    getResponse();
  }
  return (
    
    <nav className="nav">
      <a href="/" className="company-title">
        Pepsico
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
