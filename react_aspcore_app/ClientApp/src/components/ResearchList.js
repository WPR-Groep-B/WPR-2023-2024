import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from '../styles/ResearchList.module.css';

async function getData() {
    const response = await fetch('https://localhost:7251/api/research/', {
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

    const response = await fetch(`https://localhost:7251/api/research/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error('Failed to update the research:', errorBody);
        throw new Error(`Failed to update the research: ${errorBody}`);
    }

    // return await response.json();
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
    );
}

function OnderzoekDetails({ onderzoek, onEdit }) {
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
        </div>
    );
}

export default function ResearchList() {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['get-research-list'],
        queryFn: getData,
    });

    const [editOnderzoekId, setEditOnderzoekId] = useState(null);

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    const handleEdit = (onderzoek) => {
        setEditOnderzoekId(onderzoek.onderzoekId);
    };

    const handleCancel = () => {
        setEditOnderzoekId(null);
    };

    const handleSave = async (onderzoek) => {
        try {
            await updateData(onderzoek.onderzoekId, onderzoek);
            refetch(); // This will refetch the data after the update
            setEditOnderzoekId(null);
        } catch (error) {
            console.error('Failed to save the research: ', error);
        }
    };

    return (
        <div>
            <button type="button">Create</button>
            {data && data.map((onderzoek) =>
                editOnderzoekId === onderzoek.onderzoekId ? (
                    <OnderzoekEdit
                        key={onderzoek.onderzoekId}
                        onderzoek={onderzoek}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                ) : (
                    <OnderzoekDetails
                        key={onderzoek.onderzoekId}
                        onderzoek={onderzoek}
                        onEdit={handleEdit}
                    />
                )
            )}
        </div>
    );
}
