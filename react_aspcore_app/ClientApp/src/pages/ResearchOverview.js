import ResearchList from "../components/ResearchList";
import React, { useEffect } from 'react';
import styles from '../styles/ResearchOverview.module.css';

export default function ResearchOverview() {
    useEffect(() => {
        document.title = 'Onderzoeken - Stichting Accessibility';
    }, []);
    return (
        <div className={styles.container}>
            <div>
                <h1>Onderzoek beheer</h1>
                <hr></hr>
                <p>Hierond staat een lijstweergave van de onderzoeken. <br></br>Onderzoeken kunnen worden bewerkt of verwijderd. <br></br>En nieuwe onderzoeken kunnen worden geplaatst.</p>
            </div>
            {
                localStorage.getItem("jwt") == null ? (
                    <div className={styles.loginDisplay}>
                        <button alt="Login voor weergave onderzoeken" className={styles.loginButton} onClick={() => { window.location.href = "/login"; }}>
                            Log hier in om je onderzoeken te zien
                        </button>
                    </div>
                ) : (
                    <> {/*Dit zijn placeholderonderzoeken, de implementatie hiervan moet nog toegepast worden*/}
                        <ResearchList />
                    </>
                )}
        </div>
    );
}