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
          <img src={dropdown} alt="Dropdown" className={styles.dropdown} />
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
          <img src={dropdown} alt="Dropdown" className={styles.dropdown} />
        </li>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
          <img src={dropdown} alt="Dropdown" className={styles.dropdown} />
        </li>
        <li>
          <NavLink to="/privacy">Privacy</NavLink>
          <img src={dropdown} alt="Dropdown" className={styles.dropdown} />
        </li>
        <li>
          <a href="/">
            <img src={search} alt="Search" className={styles.search} />
          </a>
        </li>
        <li>
          <img src={accounticon} alt="Accounticon" className={styles.accounticon} />
          <NavLink to="/login">inloggen</NavLink>
        </li>
      </ul>
    </nav></>
  );
}

export default NavBar;