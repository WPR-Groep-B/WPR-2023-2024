import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";
import Pages from "./components/Pages";

// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query'

// const queryClient = new QueryClient()

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <html lang='nl'>
      <Router>
        {/* <QueryClientProvider client={queryClient}> */}
        <div className={styles.container}>
          <NavBar />
          <Pages />
        </div>
      <br></br>
      <footer>
          <div>
            <h1>Snel naar...</h1>
            <ul>
              <li>
                <button onClick={() => { window.location.href = "/"; }}>Home</button>
              </li><br></br>
              <li>
                <button onClick={() => { window.location.href = "/about-us"; }}>Over Ons</button>
              </li><br></br>
              <li>
                <button onClick={() => { window.location.href = "/privacy"; }}>Privacy verklaring</button>
              </li><br></br>
              <li>
                <button onClick={() => { window.location.href = "/login"; }}>Inloggen</button>
              </li><br></br>
            </ul>
          </div>

          <div className={styles.divfoot}>
            <h1>Hoe wij helpen</h1>
            <ul>
              <li>
                <button onClick={() => { window.open("https://www.accessibility.nl/audits", "_blank"); }}>Audits</button>
              </li><br></br>
              <li>
                <button onClick={() => { window.open("https://www.accessibility.nl/gebruikersonderzoek", "_blank"); }}>Gebruikersonderzoeken</button>
              </li><br></br>
              <li>
                <button onClick={() => { window.open("https://www.accessibility.nl/hoe-wij-helpen/trainingen", "_blank"); }}>Trainingen</button>
              </li><br></br>
              <li>
                <button onClick={() => { window.open("https://www.accessibility.nl/advies", "_blank"); }}>Advies</button>
              </li><br></br>
            </ul>
          </div>

          <div className={styles.divfoot}>
            <h1>Contact</h1>
            <ul>
              <li>
                <button onClick={() => { window.location.href = "/contact"; }}>Contact</button>
              </li><br></br>
              <li>
                <button alternate="Telefoonnummer van Stichting Accessiblity" onClick={() => { window.location.href = "Tel: +31 30 239 82 70"; }}>Tel: +31 30 239 82 70</button>
              </li><br></br>
              <li>
                <button alternate="Email adres van Stichting Accessiblity" onClick={() => { window.location.href = "mailto:info@accessibility.nl"; }}>info@accessibility.nl</button>
              </li><br></br>
              <li>
                <button onClick={() => { window.open("https://www.accessibility.nl/werken-bij-accessibility", "_blank"); }}>
                Onze vacatures</button>  
                </li>       
            </ul>
          </div>

          <div>
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
              <img alt="Stichting Accessibility logo"className={styles.logo} src={logo}></img>
            </div>
          </div>
        </footer>
        {/* </QueryClientProvider> */}
    </Router>
    </html>
    );
  }
}