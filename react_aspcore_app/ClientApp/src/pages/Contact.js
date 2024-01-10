import styles from '../styles/Contact.module.css';

function Contact() {
    return (
        <html className={styles.justifiedText}>
        <h1>Contact</h1>
        <p>Stichting Accessibility is gevestigd in het bedrijfsverzamelgebouw de Krammstate op een paar minuten lopen van Station Utrecht Overvecht.</p>

        <h2>Bezoek- en postadres:</h2>

        <p>Christiaan Krammlaan 2 <br></br>
            3571 AX Utrecht</p>

        <p>Mocht je met de trein en bus komen dan kun je hier de uitgebreide routebeschrijving (insert link naar uitgebreide route beschrijving) raadplegen.</p>

        <iframe src="https://www.google.com/maps/place/Stichting+Accessibility/@52.1085222,5.1202948,18.5z/data=!4m15!1m8!3m7!1s0x47c66f3b97fb2a95:0x30cf938aa1cf68a9!2sChristiaan+Krammlaan+2,+3571+AX+Utrecht!3b1!8m2!3d52.108711!4d5.1211567!16s%2Fg%2F11b8v4bc8_!3m5!1s0x47c66f6a619fcfe1:0xd04ef4a46afb9e92!8m2!3d52.1086494!4d5.1210281!16s%2Fg%2F1tgj_vkw?entry=ttu" title= "routebeschrijving" alt="Routebeschrijving via google maps">routebeschrijving</iframe>  
        
        <p>Algemene informatie over de toegankelijkheid, rolstoelvriendelijkheid en het meebrengen van geleidehonden staat op onze pagina over de toegankelijkheid van ons kantoor(insert link toegankelijkeid)</p>


        <p>Tel. +31 30 239 82 70 <br></br>
        E-mail: info@accessibility.nl(verzendt email)</p>

            
        <h1>Nieuwsgierig naar onze vacatures?</h1>

        <p>Bekijk op deze pagina (insert link) de vacatures die we momenteel open hebben staan. We bieden ook stageplekken!</p>

        </html>
        );
}

export default Contact;