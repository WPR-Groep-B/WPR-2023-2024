import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import wheelchair from '../images/Computer-User-Wheelchair-2.jpeg';

function Home() {
    useEffect(() => {
        document.title = 'Home - Stichting Accessibility';
    }, []);
    return (
        <div className={styles.homeContainer}>
            <div className={styles.heroSection}>
                <img src={wheelchair} alt="Wheelchair user at computer" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>
                        Samen met onze partners en klanten werken we aan een inclusieve samenleving die toegankelijk is voor iedereen.
                    </h1>
                    <h2>
                        <a href="./about-us"> Meer over Accessibility &gt;</a>
                    </h2>
                </div>
            </div>

            <div className={styles.contforond}>
                {
                    localStorage.getItem("jwt") == null ? (
                        <button className={styles.button} onClick={() => { window.location.href = "/login"; }}>
                            Log hier in om je onderzoeken te zien
                        </button>
                    ) : (
                        <>
                            <div className={styles.onderzoeken}>
                                <div className={styles.onderrzoekContainer}>
                                    <p>Hier komen alle onderzoeken te staan</p>
                                </div>

                                <div className={styles.onderrzoekContainer}>
                                    <p>Het kunnen oneindig veel containers worden met allemaal andere soorten onderzoeken</p>
                                </div>

                                <div className={styles.onderrzoekContainer}>
                                    <p>Ze kunnen verschillende teksten en formatting hebben, maar het kunnen ook verschillende onderzoeken zijn, zoals een enquête of om en afspraak te maken</p>
                                </div>

                                <div className={styles.onderrzoekContainer}>
                                    <p>Hieronder heb je een voorbeeld van een onderzoek:</p>
                                </div>

                                <div className={styles.onderrzoekContainer}>
                                    <p>
                                        Test Onderzoek
                                        <hr></hr>
                                        Locatie: nog te bepalen <br></br>
                                        Datum: 21 januari 2024 <br></br>
                                        Tijdstip: 23:59 <br></br>
                                        <hr></hr>
                                        Inhoud: Kijken of deze website af is
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
            </div>
        </div>
    );
}

export default Home;
