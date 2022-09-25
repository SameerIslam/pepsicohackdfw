import styles from "../styles/styles.css";
import { signIn } from "../../../src/backend/auth.js";
import logo from "../../img/pepsicologo.png";
import { useState } from 'react';
import { User } from "../../backend/User_Model";



console.log(logo);


export default function Navbar(props) {
  const [name, setName] = useState("Login/Sign Up")
  const handleClick = () => {
    getName();
  };
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  async function getName(){
    const u = await props.func();
    setName(u.name);
  }
  return (
    <nav className="nav">
      <a onClick={() => openInNewTab('https://www.pepsico.com/')}>
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
            <a onClick={() => openInNewTab('https://www.pepsico.com/who-we-are/about-pepsico')}>
              About
            </a>
          </span>
        </li>
        <li>

          <span className="font-link">
            <a onClick={handleClick}>{name}</a>
          </span>

     
        </li>
      </ul>
    </nav>
  );
}
