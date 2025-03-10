import styles from '../styles/Contact.module.css';
import React, { useEffect } from 'react';
import linkedinlogo from "../images/linkedin-logo.png"
import ytlogo from "../images/yt-logo.png"
import xlogo from "../images/x-logo.png"

function Contact() {
  useEffect(() => {
    document.title = "Contact - Stichting Accessibility"
  }, [])

  return (
      <div className={styles.justifiedText}>
        <h1>Contact</h1>
        <p>Stichting Accessibility is gevestigd in het bedrijfsverzamelgebouw de Krammstate op een paar minuten lopen van Station Utrecht Overvecht.</p>
        <hr></hr>
        <h2>Bezoek- en postadres:</h2>

        <p><strong>Christiaan Krammlaan 2 <br></br>
          3571 AX Utrecht</strong></p>
        <br></br>
        <p>Mocht u met de trein en bus komen dan kunt u <a href="https://www.accessibility.nl/routebeschrijving-naar-accessibility-kantoor-utrecht-0">de uitgebreide routebeschrijving</a> raadplegen.</p>
        <br></br>
        <div class="mapContainer">
          <iframe title="Stichting Accessibility Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1225.2090191427894!2d5.1202948!3d52.1085222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f6a619fcfe1%3A0xd04ef4a46afb9e92!2sStichting%20Accessibility!5e0!3m2!1snl!2snl!4v1704876708283!5m2!1snl!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <p>Algemene informatie over de toegankelijkheid, rolstoelvriendelijkheid en het meebrengen van geleidehonden staat op onze pagina over de toegankelijkheid van ons kantoor(insert link toegankelijkeid)</p>
        <hr></hr>

        <div>
          <h2>Digitaal contact opnemen</h2>
          <p>U kunt ons telefonisch bereiken via <a href="Tel: +31 30 239 82 70" alternate="Telefoonnummer van Stichting Accessiblity">ons telefoonnummer+31 30 239 82 70.</a><br></br>
            <a href="mailto:info@accessibility.nl" alternate="Email adres van Stichting Accessiblity">Verzend een e-mail naar Stichting Accessibility</a>
          </p>

          <div className={styles.divsocials}>
            <div className={styles.socialsdiv}>
              <p>Benieuw naar onze ervaringen en op de hoogte willen blijven van actuele gebeurtenissen van ons, dat kan! Wij zijn op de volgende kanalen te vinden:</p>
            </div>

            <div className={styles.buttondiv}>
              <div className={styles.socialbtn}>
                <button aria-label="Linkedin pagina Stichting Accessibility" className={styles.button} onClick={() => { window.open("https://nl.linkedin.com/company/accessibilitynl", "_blank"); }}>
                  <img className={styles.sclogo} src={linkedinlogo} alt="LinkedIn logo" />
                </button>
              </div>

              <div className={styles.socialbtn}>
                <button aria-label="Twitter (nu X) pagina Stichting Accessibility" className={styles.button} onClick={() => { window.open("https://twitter.com/AccessibilityNL", "_blank"); }}>
                  <img className={styles.sclogo} src={xlogo} alt="X/Twitter Logo" />
                </button>
              </div>

              <div className={styles.socialbtn}>
                <button aria-label="Youtube pagina Stichting Accessibility" className={styles.button} onClick={() => { window.open("https://www.youtube.com/channel/UCSFsnRBNIDCgYJEW_ZLfTrg", "_blank"); }}>
                  <img className={styles.sclogo} src={ytlogo} alt="Youtube Logo" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>

        <h2>Nieuwsgierig naar onze vacatures?</h2>

        <p>Bekijk <a href="https://www.accessibility.nl/werken-bij-accessibility" target="_blank" rel="noreferrer">op deze pagina</a> de vacatures die we momenteel open hebben staan. We bieden ook stageplekken!</p>
      </div>
  );
}

export default Contact;