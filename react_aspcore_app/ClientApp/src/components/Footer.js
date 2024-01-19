import linkedinlogo from "../images/linkedin-logo.png"
import ytlogo from "../images/yt-logo.png"
import xlogo from "../images/x-logo.png"
import logo from "../images/logo-groot-transp.png"
import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <footer>
      <div className={styles.divfootBeg}>
        <h2>Snel naar...</h2>
        <div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.location.href = "/"; }}>Home</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.location.href = "/about-us"; }}>Over Ons</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.location.href = "/privacy"; }}>Privacy verklaring</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.location.href = "/login"; }}>Login</button>
          </div>
        </div>
      </div>

      <div className={styles.divfoot}>
        <h2>Hoe wij helpen</h2>
        <div className={styles.buttonDiv}>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.open("https://www.accessibility.nl/audits", "_blank"); }}>Audits</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.open("https://www.accessibility.nl/gebruikersonderzoek", "_blank"); }}>Gebruikersonderzoeken</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.open("https://www.accessibility.nl/hoe-wij-helpen/trainingen", "_blank"); }}>Trainingen</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.open("https://www.accessibility.nl/advies", "_blank"); }}>Advies</button>
          </div>
        </div>
      </div>

      <div className={styles.divfoot}>
        <h2>Contact</h2>
        <div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.location.href = "/contact"; }}>Contact</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.location.href = "Tel: +31 30 239 82 70"; }}>Tel: +31 30 239 82 70</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.location.href = "mailto:info@accessibility.nl"; }}>info@accessibility.nl</button>
          </div>
          <div className={styles.bulletPoint}>
            <button className={styles.buttonMargin} onClick={() => { window.open("https://www.accessibility.nl/werken-bij-accessibility", "_blank"); }}>
              Onze vacatures</button>
          </div>
        </div>
      </div>

      <div className={styles.parentDiv}>
        <div className={styles.divsocials}>

          <div className={styles.socialbtn}>
            <button className={styles.button} onClick={() => { window.open("https://nl.linkedin.com/company/accessibilitynl", "_blank"); }}>
              <img className={styles.sclogo} src={linkedinlogo} alt="LinkedIn Logo" />
            </button>
          </div>

          <div className={styles.socialbtn}>
            <button className={styles.button} onClick={() => { window.open("https://twitter.com/AccessibilityNL", "_blank"); }}>
              <img className={styles.sclogo} src={xlogo} alt="X/Twitter Logo" />
            </button>
          </div>

          <div className={styles.socialbtn}>
            <button className={styles.button} onClick={() => { window.open("https://www.youtube.com/channel/UCSFsnRBNIDCgYJEW_ZLfTrg", "_blank"); }}>
              <img className={styles.sclogo} src={ytlogo} alt="Youtube Logo" />
            </button>
          </div>
        </div>

        <div className={styles.divsocialslogo}>
          <img alt="Stichting Accessibility logo" className={styles.logo} src={logo}></img>
        </div>
      </div>
    </footer >
  );
}

export default Footer;