import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
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
                    type="text"
                    name="onderzoekId"
                    value={editedOnderzoek.onderzoekId}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="GebruikerBedrijfId"
                    value={editedOnderzoek.gebruikerBedrijfId}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="onderzoekNaam"
                    value={editedOnderzoek.onderzoekNaam}
                    onChange={handleChange}
                />
                <textarea
                    name="onderzoekBeschrijving"
                    value={editedOnderzoek.onderzoekBeschrijving}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="onderzoekStartDatum"
                    value={editedOnderzoek.onderzoekStartDatum ? editedOnderzoek.onderzoekStartDatum.split('T')[0] : ''}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="onderzoekEindDatum"
                    value={editedOnderzoek.onderzoekEindDatum ? editedOnderzoek.onderzoekEindDatum.split('T')[0] : ''}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="onderzoekStatus"
                    value={editedOnderzoek.onderzoekStatus}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="onderzoekSoort"
                    value={editedOnderzoek.onderzoekSoort}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="GoedgekeurdDoorId"
                    value={editedOnderzoek.goedgekeurdDoorId}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="onderzoekLink"
                    value={editedOnderzoek.onderzoekLink}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="onderzoekNaam"
                    value={editedOnderzoek.onderzoekForm}
                    onChange={handleChange}
                />
                <button type="submit">Accept</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default OnderzoekEdit;