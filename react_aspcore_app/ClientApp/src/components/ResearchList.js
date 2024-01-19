import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from '../styles/ResearchList.module.css';


//https://localhost:7251
async function getData() {
    const response = await fetch('https://localhost:7251/api/research/', {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
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
    const response = await fetch(`https://localhost:7251/api/research/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error('Failed to update the research:', errorBody);
        throw new Error(`Failed to update the research: ${errorBody}`);
    }

    //return await response.json();
}

//dit is die create data
async function createData(newOnderzoek) {
    const formattedData = {
        ...newOnderzoek,
        // additional formatting if needed
    };

    //https://localhost:7251
    const response = await fetch('https://localhost:7251/api/research/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Failed to create the research: ${errorBody}`);
    }

    return await response.json();
}
// tot hier

// Deze functie voert de DELETE operatie uit
async function deleteData(id) {
    //https://localhost:7251/api/research/${id}
    const response = await fetch(`https://localhost:7251/api/research/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Failed to delete the research: ${errorBody}`);
    }
}

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
                    value={editedOnderzoek.onderzoekStartDatum.split('T')[0]} // Format the date for input[type=date]
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="onderzoekEindDatum"
                    value={editedOnderzoek.onderzoekEindDatum.split('T')[0]} // Format the date for input[type=date]
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

function OnderzoekDetails({ onderzoek, onEdit, onDelete }) {
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
            <button type="button" onClick={() => onEdit(onderzoek)}>Edit</button>
            <button type="button" onClick={() => onDelete(onderzoek.onderzoekId)}>Delete</button>
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
                <textarea
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

export default function ResearchList() {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['get-research-list'],
        queryFn: getData,
    });

    const [editOnderzoekId, setEditOnderzoekId] = useState(null);
    const [isCreating, setIsCreating] = useState(false); // Nieuwe state voor het tonen van create formulier

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

    // In de ResearchList component
    const handleDelete = async (id) => {
        try {
            await deleteData(id);
            refetch(); // Ververs de lijst na het verwijderen
        } catch (error) {
            console.error('Failed to delete the research: ', error);
        }
    };

    const handleCancelCreate = () => {
        setIsCreating(false);
    };

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div>
            <button type="button" onClick={handleCreate}>Create</button>
            {isCreating && (
                <OnderzoekCreate
                    onSave={handleCreateSave}
                    onCancel={handleCancelCreate}
                />
            )}
            {data && data.map((onderzoek) =>
                editOnderzoekId === onderzoek.onderzoekId ? (
                    <OnderzoekEdit
                        key={onderzoek.onderzoekId}
                        onderzoek={onderzoek}
                        onSave={handleSave}
                        onCancel={() => setEditOnderzoekId(null)}
                    />
                ) : (
                    <OnderzoekDetails
                        key={onderzoek.onderzoekId}
                        onderzoek={onderzoek}
                        onEdit={() => setEditOnderzoekId(onderzoek.onderzoekId)}
                        onDelete={() => handleDelete(onderzoek.onderzoekId)}
                    />
                )
            )}
        </div>
    );
}