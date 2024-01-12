import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import logo from '../images/Accessibility-logo-RGB-1024x245.png';
import accounticon from '../images/Account_Icon.png';
import search from '../images/Search.png'
import { useState } from "react";


function NavBar() {

  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setJwt(null);
    navigate('/');
  };
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
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/privacy">Privacy</NavLink>
        </li>
        <li>
          <a href="/">
            <img src={search} alt="Search" className={styles.search} />
          </a>
        </li>
        {jwt == null ? (
          <li>
            <img src={accounticon} alt="Account shortcut" className={styles.accounticon} />
            <NavLink to="/login">inloggen</NavLink>
          </li>
        ) : (
          <><li>
              <img src={accounticon} alt="Account shortcut" className={styles.accounticon} />
              <NavLink to="/account">Account</NavLink>
            </li><li>
                <img src={accounticon} alt="Account shortcut" className={styles.accounticon} />
                <button onClick={handleLogout} className={styles.logout}>Uitloggen</button>
              </li></>
        )}
      </ul>
    </nav></>
  );
}

export default NavBar;