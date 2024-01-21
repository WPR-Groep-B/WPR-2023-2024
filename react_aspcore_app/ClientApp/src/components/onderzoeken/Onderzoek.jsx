import styles from '../../styles/Onderzoek.module.css';
import React, { useEffect } from 'react';

function Onderzoek({onderzoek, joinRoom, connection}) {


    return (
        <div className={styles.onderrzoekContainer}>
            <h3>{onderzoek.onderzoekNaam}</h3>
            <p>{onderzoek.onderzoekBeschrijving}</p>
            <p>{onderzoek.onderzoekStartDatum}</p>
            <p>{onderzoek.onderzoekEindDatum}</p>
            <hr />
            <button 
            onClick={() => joinRoom(onderzoek.onderzoekId.toString())}
            disabled={connection}
            >Chat</button>
        </div>
    );
}

export default Onderzoek;
