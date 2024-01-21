import styles from '../../styles/Onderzoek.module.css';
import React, { useEffect } from 'react';

function OnderzoekKaal({onderzoek}) {


    return (
        <div className={styles.onderrzoekContainer}>
            <h3>{onderzoek.onderzoekNaam}</h3>
            <p>{onderzoek.onderzoekBeschrijving}</p>
            <p>{onderzoek.onderzoekStartDatum}</p>
            <p>{onderzoek.onderzoekEindDatum}</p>
        </div>
    );
}

export default OnderzoekKaal;
