import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import logo from '../images/Accessibility-logo-RGB-1024x245.png';
import accounticon from '../images/Account_Icon.png';
import dropdown from '../images/gridicons_dropdown.png'
import search from '../images/Search.png'

function NavBar() {
  return (
    <><nav className={styles.navbar}>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/privacy">Privacy</NavLink>
        </li>
        <li>
          <a href="/">
            <img src={search} alt="Search" className={styles.search} />
          </a>
        </li>
        <li>
            <NavLink to="/login"><img src={accounticon} alt="Accounticon" className={styles.accounticon} /> Inloggen</NavLink>
        </li>
      </ul>
    </nav></>
  );
}

export default NavBar;