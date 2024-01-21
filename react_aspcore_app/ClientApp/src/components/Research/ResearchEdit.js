import React, { useState } from 'react';
import styles from '../../styles/ResearchList.module.css';


function OnderzoekEdit({ onderzoek, onSave, onCancel }) {
    const [editedOnderzoek, setEditedOnderzoek] = useState({ ...onderzoek });

    const handleChange = (e) => {
        setEditedOnderzoek({ ...editedOnderzoek, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedOnderzoek);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <input
                    className={styles.inputText}
                    type="text"
                    name="onderzoekId"
                    value={editedOnderzoek.onderzoekId}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputText}
                    type="text"
                    name="GebruikerBedrijfId"
                    value={editedOnderzoek.gebruikerBedrijfId}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputText}
                    type="text"
                    name="onderzoekNaam"
                    value={editedOnderzoek.onderzoekNaam}
                    onChange={handleChange}
                />
                <textarea
                    className={styles.textarea}
                    name="onderzoekBeschrijving"
                    value={editedOnderzoek.onderzoekBeschrijving}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputDate}
                    type="date"
                    name="onderzoekStartDatum"
                    value={editedOnderzoek.onderzoekStartDatum ? editedOnderzoek.onderzoekStartDatum.split('T')[0] : ''}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputDate}
                    type="date"
                    name="onderzoekEindDatum"
                    value={editedOnderzoek.onderzoekEindDatum ? editedOnderzoek.onderzoekEindDatum.split('T')[0] : ''}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputText}
                    type="text"
                    name="onderzoekStatus"
                    value={editedOnderzoek.onderzoekStatus}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputText}
                    type="text"
                    name="onderzoekSoort"
                    value={editedOnderzoek.onderzoekSoort}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputText}
                    type="text"
                    name="GoedgekeurdDoorId"
                    value={editedOnderzoek.goedgekeurdDoorId}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputText}
                    type="text"
                    name="onderzoekLink"
                    value={editedOnderzoek.onderzoekLink}
                    onChange={handleChange}
                />
                <input
                    className={styles.inputText}
                    type="text"
                    name="onderzoekNaam"
                    value={editedOnderzoek.onderzoekForm}
                    onChange={handleChange}
                />
                <button className={styles.button} type="submit">Save</button>
                <button className={`${styles.button} ${styles.buttonMargin}`} type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default OnderzoekEdit;