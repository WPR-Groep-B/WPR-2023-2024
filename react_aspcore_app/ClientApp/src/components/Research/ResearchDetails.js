import React from "react";
import styles from "../../styles/ResearchList.module.css";

// Deze functie voert de DELETE operatie uit
function ResearchDetails({ onderzoek, onEdit, onDelete }) {
    return (
        <div>
            <div>{onderzoek.onderzoekId}</div>
            <div>{onderzoek.gebruikerBedrijfId}</div>
            <div>{onderzoek.onderzoekNaam}</div>
            <div>{onderzoek.onderzoekBeschrijving}</div>
            <div>{onderzoek.onderzoekStartDatum}</div>
            <div>{onderzoek.onderzoekEindDatum}</div>
            <div>{onderzoek.onderzoekStatus}</div>
            <div>{onderzoek.onderzoekSoort}</div>
            <div>{onderzoek.goedgekeurdDoorId}</div>
            <div>{onderzoek.onderzoekLink}</div>
            <div>{onderzoek.onderzoekForm}</div>
            <br/>
            <div className={styles.formAndButtonContainer}>
            <hr />
            <button type="button" className={styles.editButton} onClick={() => onEdit(onderzoek)}>Edit</button>
            <button type="button" className={styles.editButton} onClick={() => onDelete(onderzoek.onderzoekId)}>Delete</button>
            </div>
        </div>
    );
}

export default ResearchDetails;
