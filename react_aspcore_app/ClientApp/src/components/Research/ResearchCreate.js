import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from '../../styles/ResearchList.module.css';


function ReseachCreate({ onSave, onCancel }) {
    const emptyOnderzoek = {
        onderzoekNaam: '',
        gebruikerBedrijfId: '',
        onderzoekBeschrijving: '',
        onderzoekStartDatum: '',
        onderzoekEindDatum: '',
        onderzoekStatus: '',
        onderzoekSoort: '',
        goedgekeurdDoorId: '',
        onderzoekLink: '',
        onderzoekForm: ''
        // Voeg hier andere velden toe indien nodig
    };

    const [newOnderzoek, setNewOnderzoek] = useState(emptyOnderzoek);

    const handleChange = (e) => {
        setNewOnderzoek({ ...newOnderzoek, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(newOnderzoek);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <input
                    type="text"
                    name="gebruikerBedrijfId"
                    value={newOnderzoek.gebruikerBedrijfId}
                    onChange={handleChange}
                    placeholder="ID van Bedrijf"
                />
                <input
                    type="text"
                    name="onderzoekNaam"
                    value={newOnderzoek.onderzoekNaam}
                    onChange={handleChange}
                    placeholder="Naam van het onderzoek"
                />
                <input
                    type="text"
                    name="onderzoekBeschrijving"
                    value={newOnderzoek.onderzoekBeschrijving}
                    onChange={handleChange}
                    placeholder="Beschrijving van het onderzoek"
                />
                <input
                    type="date"
                    name="onderzoekStartDatum"
                    value={newOnderzoek.onderzoekStartDatum.split('T')[0]}
                    onChange={handleChange}
                    placeholder="Start Datum"
                />
                <input
                    type="date"
                    name="onderzoekEindDatum"
                    value={newOnderzoek.onderzoekEindDatum.split('T')[0]}
                    onChange={handleChange}
                    placeholder="Eind Datum"
                />
                <input
                    type="text"
                    name="onderzoekStatus"
                    value={newOnderzoek.onderzoekStatus}
                    onChange={handleChange}
                    placeholder="Status van het onderzoek"
                />
                <input
                    type="text"
                    name="onderzoekSoort"
                    value={newOnderzoek.onderzoekSoort}
                    onChange={handleChange}
                    placeholder="Soort onderzoek"
                />
                <input
                    type="text"
                    name="goedgekeurdDoorId"
                    value={newOnderzoek.goedgekeurdDoorId}
                    onChange={handleChange}
                    placeholder="GoedgekeurdDoorId"
                />
                <input
                    type="text"
                    name="onderzoekLink"
                    value={newOnderzoek.onderzoekLink}
                    onChange={handleChange}
                    placeholder="Link naar de website"
                />
                <input
                    type="text"
                    name="onderzoekForm"
                    value={newOnderzoek.onderzoekForm}
                    onChange={handleChange}
                    placeholder="Link naar het formulier"
                />
                <button type="submit">Accept</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default ReseachCreate;