import styles from '../styles/Privacy.module.css';
import React, { useEffect } from 'react';

function Privacy() {
    useEffect(() => {
        document.title = "Privacy - Stichting Accessibility";
      }, []);

    return (
        <html lang='nl' className={styles.justifiedText}>
            <h1>Privacyverklaring</h1>

            <hr></hr>

            <div>
            <h2>Persoonlijke Gegevens</h2>
            <hr></hr>

            <h3>Verzamelde gegevens:</h3>

            <p>We verzamelen de volgende persoonlijke gegevens van gebruikers:</p>

            <ul>
            <li>Voornaam en Achternaam</li>
            <li>Leeftijd</li>
            <li>Postcode</li> 
            <li>Telefoonnummer</li> 
            <li>E-mailadres</li>
            <li>Wachtwoord</li> 
            <li>Type beperking (lijst)</li> 
            <li>Aandoening/Ziekte</li> 
            <li>Beschikbaarheid</li> 
            <li>Berichten</li> 
            </ul>

            <h3>Doel van Gegevensverzameling</h3>
            <p>De verzamelde gegevens worden gebruikt voor de volgende doeleinden:</p>
            <ul>
                <li>Identificatie en communicatie met de gebruiker</li>
                <li>Beoordeling van de geschiktheid voor deelname aan onderzoeken</li>
                <li>Geografische matching van gebruikers met lokale onderzoeken</li>
                <li>Contact met gebruikers voor belangrijke updates</li>
                <li>Accountbeveiliging en verificatie bij inloggen</li>
                <li>Planning van deelnemers voor onderzoeken op basis van beschikbaarheid</li>
                <li>Interactie en communicatie tussen gebruikers, bedrijven en de Stichting Accessibility</li>
            </ul>

            <h3>Gegevensbescherming</h3>
            <p>
                We nemen de privacy en beveiliging van persoonlijke gegevens serieus. De verzamelde gegevens worden beschermd tegen ongeautoriseerde toegang en misbruik. Persoonlijke gegevens kunnen alleen gedeeld worden met geautoriseerde toegang.
            </p>

            <h3>Delen van Gegevens</h3>
            <p>Persoonlijke gegevens worden niet gedeeld met derden zonder de uitdrukkelijke toestemming van de gebruiker, tenzij vereist door de wet.</p>
            
            <h3>Bewaartijd van gegevens</h3>
            <p>Persoonsgegevens zullen wij bewaren, zolang deze actueel zijn en dus niet een oudere versie van al bijgewerkte gegevens. Zodra iemand zijn/haar gegevens aanpast, zullen wij de oude verwijderen. Daarnaast geldt ook natuurlijk het recht om vergeten te worden, bij ons is dat niet anders. Als iemand zijn account wil verwijderen, dan zorgen wij dat alle gegevens uit onze systemen gewist worden.</p><br></br><br></br>
Berichten die een gebruiker stuurt zullen niet vanzelf verdwijnen, alleen als de gebruiker dit zelf deze actie uitvoert. Denk hierbij aan communicatie tussen gebruiker en bedrijf over bijvoorbeeld een ondervraging van een onderzoek.<br></br><br></br>
Voorafgaand aan een onderzoek moet een gebruiker akkoord gaan met het feit dat wij d.m.v. een track-script gegevens kunnen verzamelen wat de gebruiker doet op een andere site. Dit om een onderzoek accurater uit te voeren. Resultaten hiervan zullen eveneens 3 maanden beschikbaar zijn na het afronden van het onderzoek.<br></br><br></br>
Feedback die gegeven wordt over de panelsite zelf wordt bewaard, totdat deze verwerkt is en de problemen verholpen zijn.<br></br><br></br>
            <p>Persoonsgegevens zullen wij bewaren, zolang deze actueel zijn en dus niet een oudere versie van al bijgewerkte gegevens. Zodra iemand zijn/haar gegevens aanpast, zullen wij de oude verwijderen. Daarnaast geldt ook natuurlijk het recht om vergeten te worden, bij ons is dat niet anders. Als iemand zijn account wil verwijderen, dan zorgen wij dat alle gegevens uit onze systemen gewist worden.<br></br>  
Berichten die een gebruiker stuurt zullen niet vanzelf verdwijnen, alleen als de gebruiker dit zelf deze actie uitvoert. Denk hierbij aan communicatie tussen gebruiker en bedrijf over bijvoorbeeld een ondervraging van een onderzoek.<br></br>
Voorafgaand aan een onderzoek moet een gebruiker akkoord gaan met het feit dat wij d.m.v. een track-script gegevens kunnen verzamelen wat de gebruiker doet op een andere site. Dit om een onderzoek accurater uit te voeren. Resultaten hiervan zullen eveneens 3 maanden beschikbaar zijn na het afronden van het onderzoek.<br></br>
Feedback die gegeven wordt over de panelsite zelf wordt bewaard, totdat deze verwerkt is en de problemen verholpen zijn.<br></br>
Een account waar 6 maanden geen actie op is waargenomen zal ook verwijderd worden uit onze systemen.</p>

            <h3>Rechten van gebruikers</h3>
            <p>Gebruikers hebben het recht om hun persoonlijke gegevens in te zien, te corrigeren of te verwijderen. Neem contact met ons op via onze <a href="/contact">contactgegevens</a> om gebruik te maken van deze rechten.</p>

            <h3>Toestemming</h3>
            <p>Door het gebruik van onze webapplicatie gaat de gebruiker akkoord met deze privacyverklaring en het verzamelen en gebruiken van persoonlijke gegevens zoals beschreven.</p>
            </div>
            <br></br>

            <div>
            <h2>Gebruikersgegevens</h2>

            <hr>
            </hr>
            <h3>Verzamelde gegevens</h3>
            <p>We verzamelen de volgende gegevens met betrekking tot gebruikers:</p>
            <ul>
                <li>Rol van de gebruiker (Authenticatie & authorisatie)</li>
                <li>Hulpmiddelen (Onderzoekverwerking)</li>
                <li>Feedback over de website (Websiteverbeteringen)</li>
            </ul>

            <h3>Doel van Gegevensverzameling</h3>
            <p>De verzamelde gegevens worden gebruikt voor de volgende doeleinden:</p>
            <ul>
                <li>Identificatie en autorisatie van gebruikers binnen de webapplicatie</li>
                <li>Begeleiding van deelname aan specifieke onderzoeken op basis van gebruikte hulpmiddelen</li>
                <li>Evaluatie en verbetering van de prestaties en toegankelijkheid van de website</li>
            </ul>

            <h3>Gegevensbescherming</h3>
            <p>We nemen de privacy en beveiliging van gebruikersgegevens serieus en zorgen ervoor dat deze gegevens beschermd zijn tegen ongeautoriseerde toegang en misbruik.</p>

            <h3>Delen van Gegevens</h3>
            <p>Gebruikersgegevens worden niet gedeeld met derden zonder de uitdrukkelijke toestemming van de gebruiker, tenzij vereist door de wet.</p>

            <h3>Rechten van Gebruikers</h3>
            <p>Gebruikers hebben het recht om inzage te krijgen in de verzamelde gegevens en om gebruik te maken van hun recht om deze gegevens te corrigeren of te verwijderen. Neem contact met ons op via onze <a href="/contact">contactgegevens</a> om gebruik te maken van deze rechten.</p>
            <p>Gebruikers hebben het recht om inzage te krijgen in de verzamelde gegevens en om gebruik te maken van hun recht om deze gegevens te corrigeren of te verwijderen. Neem contact met ons op via onze <a href="https://appservicewprgroepb.azurewebsites.net/contact" target="_blank" rel="noreferrer">contactgegevens</a> om gebruik te maken van deze rechten.</p>

            <h3>Toestemming</h3>
            <p>Door het gebruik van onze webapplicatie gaat de gebruiker akkoord met deze privacyverklaring en het verzamelen en gebruiken van gebruikersgegevens zoals beschreven.</p>
            </div>
        </html>
        );
}

export default Privacy;