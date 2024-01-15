import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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
    const response = await fetch(`https://localhost:7251/api/research/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedOnderzoek),
    });
    if (!response.ok) {
        throw new Error('Failed to update the research');
    }
    return await response.json();
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
        <form onSubmit={handleSubmit}>
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
            {/* Voeg hier indien nodig andere velden toe */}
            <button type="submit">Accept</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}

function OnderzoekDetails({ onderzoek, onEdit }) {
    return (
        <div>
            <div>{onderzoek.onderzoekNaam}</div>
            {/* Toon hier andere details */}
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
