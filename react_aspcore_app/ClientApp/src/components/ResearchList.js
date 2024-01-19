import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from '../styles/ResearchList.module.css';


//https://localhost:7251
async function getData() {
    const response = await fetch('/api/research/', {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

async function updateData(id, updatedOnderzoek) {
    // Format the dates and include the IDs for gebruikerBedrijf and gebruikerDeskundige
    const formattedData = {
        ...updatedOnderzoek,
        onderzoekStartDatum: updatedOnderzoek.onderzoekStartDatum
            ? new Date(updatedOnderzoek.onderzoekStartDatum).toISOString()
            : null,
        onderzoekEindDatum: updatedOnderzoek.onderzoekEindDatum
            ? new Date(updatedOnderzoek.onderzoekEindDatum).toISOString()
            : null,
        GebruikerBedrijfId: updatedOnderzoek.GebruikerBedrijfId,
        GebruikerDeskundigeId: updatedOnderzoek.GebruikerDeskundigeId,
    };

    //https://localhost:7251
    const response = await fetch(`/api/research/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error('Failed to update the research:', errorBody);
        alert('Onderzoek is niet succesvol aangepast! Probeer opnieuw of neem anders contact op met de beheerder.');
        throw new Error(`Failed to update the research: ${errorBody}`);
    }

    alert('Onderzoek is succesvol aangepast!');

    //return await response.json();
}

//dit is die create data
async function createData(newOnderzoek) {
    const formattedData = {
        ...newOnderzoek,
        // additional formatting if needed
    };

    //https://localhost:7251
    const response = await fetch('/api/research/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        alert('Onderzoek is niet succesvol aangemaakt! Probeer opnieuw of neem anders contact op met de beheerder.');
        throw new Error(`Failed to create the research: ${errorBody}`);
    }

    alert('Onderzoek is succesvol aangemaakt!');
    return await response.json();
}
// tot hier

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
                    value={editedOnderzoek.onderzoekStartDatum.split('T')[0]} // Format the date for input[type=date]
                    onChange={handleChange}
                />
                <input
                    className={styles.inputDate}
                    type="date"
                    name="onderzoekEindDatum"
                    value={editedOnderzoek.onderzoekEindDatum.split('T')[0]} // Format the date for input[type=date]
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
                <div>
                    <button className={styles.button} type="submit">Save</button>
                    <button className={`${styles.button} ${styles.buttonMargin}`} type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

function OnderzoekDetails({ onderzoek, onEdit }) {
    return (
        <div className={styles.researchContainer}>
            <div>{onderzoek.onderzoekId}</div>
            <div>{onderzoek.gebruikerBedrijfId}</div>
            <div>{onderzoek.onderzoekNaam}</div>
            <div>{onderzoek.onderzoekBeschrijving}</div>
            <div>{onderzoek.onderzoekStartDatum}</div>
            <div>{onderzoek.onderzoekEindDatum}</div>
            <div>{onderzoek.onderzoekStatus}</div>
            <div>{onderzoek.onderzoekSoort}</div>
            <div>{onderzoek.goedgekeurdDoorId}</div>
            <div>{onderzoek.onderzoekForm}</div>
            <div className={styles.formAndButtonContainer}>
                <div>{onderzoek.onderzoekForm}</div>
                <button className={styles.editButton} type="button" onClick={onEdit}>Edit</button>
            </div>
        </div>
    );
}





function OnderzoekCreate({ onSave, onCancel }) {
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
                <div>
                    <input
                        className={styles.inputText}
                        type="text"
                        name="gebruikerBedrijfId"
                        value={newOnderzoek.gebruikerBedrijfId}
                        onChange={handleChange}
                        placeholder="ID van Bedrijf"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputText}
                        type="text"
                        name="onderzoekNaam"
                        value={newOnderzoek.onderzoekNaam}
                        onChange={handleChange}
                        placeholder="Naam van het onderzoek"
                    />
                </div>
                <div>
                    <textarea
                        className={styles.textarea}
                        name="onderzoekBeschrijving"
                        value={newOnderzoek.onderzoekBeschrijving}
                        onChange={handleChange}
                        placeholder="Beschrijving van het onderzoek"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputDate}
                        type="date"
                        name="onderzoekStartDatum"
                        value={newOnderzoek.onderzoekStartDatum.split('T')[0]}
                        onChange={handleChange}
                        placeholder="Start Datum"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputDate}
                        type="date"
                        name="onderzoekEindDatum"
                        value={newOnderzoek.onderzoekEindDatum.split('T')[0]}
                        onChange={handleChange}
                        placeholder="Eind Datum"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputText}
                        type="text"
                        name="onderzoekStatus"
                        value={newOnderzoek.onderzoekStatus}
                        onChange={handleChange}
                        placeholder="Status van het onderzoek"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputText}
                        type="text"
                        name="onderzoekSoort"
                        value={newOnderzoek.onderzoekSoort}
                        onChange={handleChange}
                        placeholder="Soort onderzoek"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputText}
                        type="text"
                        name="goedgekeurdDoorId"
                        value={newOnderzoek.goedgekeurdDoorId}
                        onChange={handleChange}
                        placeholder="GoedgekeurdDoorId"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputText}
                        type="text"
                        name="onderzoekLink"
                        value={newOnderzoek.onderzoekLink}
                        onChange={handleChange}
                        placeholder="Link naar de website"
                    />
                </div>
                <div>
                    <input
                        className={styles.inputText}
                        type="text"
                        name="onderzoekForm"
                        value={newOnderzoek.onderzoekForm}
                        onChange={handleChange}
                        placeholder="Link naar het formulier"
                    />
                </div>
                <div>
                    <button className={styles.button} type="submit">Accept</button>
                    <button className={`${styles.button} ${styles.buttonMargin}`} type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default function ResearchList() {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['get-research-list'],
        queryFn: getData,
    });

    const [editOnderzoekId, setEditOnderzoekId] = useState(null);
    const [isCreating, setIsCreating] = useState(false); // Nieuwe state voor het tonen van create formulier
    const [isEditing, setIsEditing] = useState(false);

    const handleCreate = () => {
        setIsCreating(true);
    };

    const handleCreateSave = async (newOnderzoek) => {
        try {
            await createData(newOnderzoek);
            refetch();
            setIsCreating(false);
        } catch (error) {
            console.error('Failed to create the research: ', error);
        }
    };

    const handleSave = async (onderzoek) => {
        try {
            await updateData(onderzoek.onderzoekId, onderzoek);
            refetch(); // Haal de data opnieuw op
            setEditOnderzoekId(null); // Reset de edit state
        } catch (error) {
            console.error('Failed to save the research: ', error);
        }
    };

    const handleCancelCreate = () => {
        setIsCreating(false);
    };

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div>
            {!isCreating && !isEditing && <button className={styles.createButton} type="button" onClick={handleCreate}>Create New Research</button>}
            {isCreating && (
                <OnderzoekCreate
                    onSave={handleCreateSave}
                    onCancel={handleCancelCreate}
                />
            )}
            {!isCreating && data && data.map((onderzoek) =>
                editOnderzoekId === onderzoek.onderzoekId ? (
                    <OnderzoekEdit
                        key={onderzoek.onderzoekId}
                        onderzoek={onderzoek}
                        onSave={(...args) => {
                            handleSave(...args);
                            setIsEditing(false);
                        }}
                        onCancel={() => {
                            setEditOnderzoekId(null);
                            setIsEditing(false);
                        }}
                    />
                ) : (
                    <OnderzoekDetails
                        key={onderzoek.onderzoekId}
                        onderzoek={onderzoek}
                        onEdit={() => {
                            setEditOnderzoekId(onderzoek.onderzoekId);
                            setIsEditing(true);
                        }}
                    />
                )
            )}
        </div>
    );
}