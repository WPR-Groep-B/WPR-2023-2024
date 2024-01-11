import styles from '../styles/Contact.module.css';
import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        document.title = "Stichting Accessibility - Contact";
      }, []);
    return (
        <html>
        <div className={styles.justifiedText}>
        <h1>Contact</h1>
        <p>Stichting Accessibility is gevestigd in het bedrijfsverzamelgebouw de Krammstate op een paar minuten lopen van Station Utrecht Overvecht.</p>

        <h2>Bezoek- en postadres:</h2>

        <p>Christiaan Krammlaan 2 <br></br>
            3571 AX Utrecht</p>

        <p>Mocht u met de trein en bus komen dan kunt u <a href="https://www.accessibility.nl/routebeschrijving-naar-accessibility-kantoor-utrecht-0" >de uitgebreide routebeschrijving</a> raadplegen.</p>

        <div class="mapContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1225.2090191427894!2d5.1202948!3d52.1085222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f6a619fcfe1%3A0xd04ef4a46afb9e92!2sStichting%20Accessibility!5e0!3m2!1snl!2snl!4v1704876708283!5m2!1snl!2snl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Google maps naar het hoofdkatoor van stichting Accessability'></iframe>
        </div>
        
        <p>Algemene informatie over de toegankelijkheid, rolstoelvriendelijkheid en het meebrengen van geleidehonden staat op onze pagina over <a href="https://www.accessibility.nl/algemene-informatie-toegankelijkheid-kantoor-accessibility">de toegankelijkheid van ons kantoor</a></p>

        <p>U kunt ons telefonisch bereiken via <a href="Tel: +31 30 239 82 70" alternate="Telefoonnummer van Stichting Accessiblity">ons telefoonnummer+31 30 239 82 70.</a></p><br></br>
        <a href="mailto:info@accessibility.nl" alternate="Email adres van Stichting Accessiblity">Verzend een e-mail naar Stichting Accessibility</a>
        <br></br>
        <br></br>

        <h2>Nieuwsgierig naar onze vacatures?</h2>

        <p> <a href="https://www.accessibility.nl/werken-bij-accessibility" target="_blank" rel="noreferrer" alternate="Website met vacatures Stichting Accessibility">Bekijk op deze pagina de vacatures </a> die we momenteel open hebben staan. We bieden ook stageplekken!</p>
        
        </div>

        </html>
        );
}

export default Contact;