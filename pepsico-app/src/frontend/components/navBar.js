import styles from "../styles/styles.css";

export default function Navbar() {
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
          <a href="/Login-SignUp">Login/Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
