import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function OnderzoekMaken() {
    const [showForm, setShowForm] = useState(false);
    const [onderzoekData, setOnderzoekData] = useState({
        onderzoekNaam: '',
        onderzoekBeschrijving: '',
        onderzoekStartDatum: '',
        onderzoekEindDatum: '',
        onderzoekStatus: '',
        onderzoekSoort: '',
        onderzoekLink: '',
        onderzoekForm: ''
    });

    const handleChange = (e) => {
        setOnderzoekData({ ...onderzoekData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jwt = localStorage.getItem('jwt');
        const gebruiker = jwtDecode(jwt);
        const gebruikerBedrijfId = gebruiker.id;

        const nieuwOnderzoekData = {
            ...onderzoekData,
            GebruikerBedrijfId: gebruikerBedrijfId
        };

        try {
            const response = await axios.post('https://localhost:7251/api/research/', nieuwOnderzoekData, {
                headers: {
                    Authorization: 'Bearer ' + jwt
                }
            });
            console.log(response.data);
            // Verdere afhandeling na succesvolle aanmaak
        } catch (error) {
            console.error('Fout bij het aanmaken van onderzoek:', error);
        }
    };

    return (
        <div>
            <button onClick={() => setShowForm(true)}>Create</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="onderzoekNaam"
                        value={onderzoekData.onderzoekNaam}
                        onChange={handleChange}
                        placeholder="Naam van het onderzoek"
                    />
                    <textarea
                        name="onderzoekBeschrijving"
                        value={onderzoekData.onderzoekBeschrijving}
                        onChange={handleChange}
                        placeholder="Beschrijving van het onderzoek"
                    />
                    <input
                        type="date"
                        name="onderzoekStartDatum"
                        value={onderzoekData.onderzoekStartDatum}
                        onChange={handleChange}
                        placeholder="Startdatum"
                    />
                    <input
                        type="date"
                        name="onderzoekEindDatum"
                        value={onderzoekData.onderzoekEindDatum}
                        onChange={handleChange}
                        placeholder="Einddatum"
                    />
                    <input
                        type="text"
                        name="onderzoekStatus"
                        value={onderzoekData.onderzoekStatus}
                        onChange={handleChange}
                        placeholder="Status van het onderzoek"
                    />
                    <input
                        type="text"
                        name="onderzoekSoort"
                        value={onderzoekData.onderzoekSoort}
                        onChange={handleChange}
                        placeholder="Soort onderzoek"
                    />
                    <input
                        type="text"
                        name="onderzoekLink"
                        value={onderzoekData.onderzoekLink}
                        onChange={handleChange}
                        placeholder="Link naar het onderzoek"
                    />
                    <input
                        type="text"
                        name="onderzoekForm"
                        value={onderzoekData.onderzoekForm}
                        onChange={handleChange}
                        placeholder="Formulier link"
                    />
                    <button type="submit">Accept</button>
                    <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                </form>
            )}
        </div>
    );
}