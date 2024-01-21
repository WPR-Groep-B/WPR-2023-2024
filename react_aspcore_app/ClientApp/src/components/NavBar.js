import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import logo from '../images/Accessibility-logo-RGB-1024x245.png';
import accounticon from '../images/Account_Icon.png';
import accounticonHover from '../images/Account_Icon_Hover.png';
import search from '../images/Search.png'
import searchHover from '../images/Search_Hover.png'

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
            <img src={logo} alt="Logo en knop naar homepagina" className={styles.logo} />
          </a>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/onderzoekbeheer">Onderzoek Beheer</NavLink>
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
          <NavLink
            to="/login"
            onMouseEnter={e => {
              const img = e.currentTarget.children[0];
              img.src = searchHover;
              img.style.opacity = 0;
              setTimeout(() => img.style.opacity = 1, 0);
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.children[0];
              img.src = search;
              img.style.opacity = 0;
              setTimeout(() => img.style.opacity = 1, 0);
            }}
          >
            <img src={search} alt="Search" className={styles.search} />
          </NavLink>
        </li>
        {
          localStorage.getItem("jwt") == null ? (
            <li>
              <NavLink
                to="/login"
                onMouseEnter={e => {
                  const img = e.currentTarget.children[0];
                  img.src = accounticonHover;
                  img.style.opacity = 0;
                  setTimeout(() => img.style.opacity = 1, 0);
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.children[0];
                  img.src = accounticon;
                  img.style.opacity = 0;
                  setTimeout(() => img.style.opacity = 1, 0);
                }}
              >
                <img src={accounticon} alt="Accounticon" className={styles.accounticon} /> Inloggen
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/onderzoeken">Onderzoeken</NavLink>
              </li>
              <li>

                <NavLink
                  to="/Account"
                  onMouseEnter={e => {
                    const img = e.currentTarget.children[0];
                    img.src = accounticonHover;
                    img.style.opacity = 0;
                    setTimeout(() => img.style.opacity = 1, 0);
                  }}
                  onMouseLeave={e => {
                    const img = e.currentTarget.children[0];
                    img.src = accounticon;
                    img.style.opacity = 0;
                    setTimeout(() => img.style.opacity = 1, 0);
                  }}
                >
                  <img src={accounticon} alt="Accounticon" className={styles.accounticon} /> Account
                </NavLink>
              </li>
              <li>
                <button
                  aria-label="Uitloggen met account icon"
                  className={styles.button}
                  onClick={handleLogout}
                  onMouseEnter={e => {
                    const img = e.currentTarget.children[0];
                    img.src = accounticonHover;
                    img.style.opacity = 0;
                    setTimeout(() => img.style.opacity = 1, 0);
                  }}
                  onMouseLeave={e => {
                    const img = e.currentTarget.children[0];
                    img.src = accounticon;
                    img.style.opacity = 0;
                    setTimeout(() => img.style.opacity = 1, 0);
                  }}
                >
                  <img src={accounticon} alt="Uitloggen account" className={styles.accounticon} />Uitloggen
                </button>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
}

export default NavBar;