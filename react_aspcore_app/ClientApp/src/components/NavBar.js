import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import logo from '../images/Accessibility-logo-RGB-1024x245.png';
import accounticon from '../images/Account_Icon.png';
import search from '../images/Search.png'

function NavBar() {

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    window.location.href = "/";
  };

  return (
    <nav className={styles.navbar}>
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
        {
          localStorage.getItem("jwt") == null ? (
            <li>
                <NavLink to="/login">
                  <img src={accounticon} alt="Accounticon" className={styles.accounticon}/> Inloggen</NavLink>
            </li>
          ) : (
            <>
            <li>
                <NavLink to="/account"><img src={accounticon} alt="Account shortcut" className={styles.accounticon}/>Account</NavLink>
            </li>
            <li>
                <button className={styles.button} onClick={handleLogout}>
                  <img src={accounticon} alt="Account shortcut" className={styles.accounticon} />Uitloggen</button>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
}

export default NavBar;