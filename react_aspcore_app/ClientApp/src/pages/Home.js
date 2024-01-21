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
                        <button alt="Login voor weergave onderzoeken" className={styles.button} onClick={() => { window.location.href = "/login"; }}>
                            Log hier in om je onderzoeken te zien
                        </button>
                    ) : (
                        <> {/*Dit zijn placeholderonderzoeken, de implementatie hiervan moet nog toegepast worden*/}

                            <button alt="Knop naar onderzoeken" className={styles.button} onClick={() => { window.location.href = "/onderzoeken"; }}>
                                Alle onderzoeken zijn hier te vinden
                            </button>

                        </>
                    )}
            </div>
        </div>
    );
}

export default Home;
