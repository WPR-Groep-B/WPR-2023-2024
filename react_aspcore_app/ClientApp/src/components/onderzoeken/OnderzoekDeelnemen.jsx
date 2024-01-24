import styles from '../../styles/Onderzoek.module.css';
import React from 'react';

function Onderzoek({onderzoek, Deelnemen} ) {


    return (
        <div className={styles.onderrzoekContainer}>
            <h3>{onderzoek.onderzoekNaam}</h3>
            <p>{onderzoek.onderzoekBeschrijving}</p>
            <p>{onderzoek.onderzoekStartDatum}</p>
            <p>{onderzoek.onderzoekEindDatum}</p>
            <hr />
            <button 
            onClick={() => Deelnemen(onderzoek.onderzoekId)}
            >Deelnemen</button>
        </div>
    );
}

export default Onderzoek;