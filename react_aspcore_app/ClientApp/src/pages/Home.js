import styles from '../styles/Home.module.css';
import wheelchair from '../images/Computer-User-Wheelchair-2.jpeg';

function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.heroSection}>
                <img src={wheelchair} alt="Wheelchair user at computer" className={styles.heroImage} />
                <div className={styles.heroText}>
                    <h1>
                        Samen met onze partners en klanten werken we aan een inclusieve samenleving die toegankelijk is voor iedereen.
                    </h1>
                    <NavLink to="/aboutus">
                        <h2>
                            Meer over Accessibility &gt;
                        </h2>
                    </NavLink>
                </div>
            </div>
            <div className={styles.onderrzoekContainer}>
                {/* Your 'Onderzoek' sections would go here */}
                <p>
                    Onderzoek
                </p>
                <p>
                    Titel van Onderzoek
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr
                </p>
            </div>
        </div>
    );
}

export default Home;
