import React, { useState, useEffect } from 'react';
import styles from '../../styles/ResearchList.module.css'
import ResearchCreate from './ResearchCreate';

import Axios from 'axios';
import ResearchContainer from './ResearchContainer';

function ResearchList() {

    const [editOnderzoekId, setEditOnderzoekId] = useState(null); // Nieuwe state voor het tonen van het edit formulier

    const [Status, setStatus] = useState(''); // Nieuwe state voor het tonen van de status van het onderzoek
    const [data, setData] = useState([]); 

    const [isCreating, setIsCreating] = useState(false); // Nieuwe state voor het tonen van create formulier

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios.get('https://localhost:7251/api/research/', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                }
            });

            setData(result.data);
        };

        fetchData();
    }, []);

    const handleCreate = () => {
        setIsCreating(true);
    };

    const handleSave = async (onderzoek) => {

        const formattedData = {
            ...onderzoek,
            onderzoekStartDatum: onderzoek.onderzoekStartDatum,
            onderzoekEindDatum: onderzoek.onderzoekEindDatum,
            GebruikerBedrijfId: onderzoek.GebruikerBedrijfId,
            GebruikerDeskundigeId: onderzoek.GebruikerDeskundigeId
        };

        Axios.put('https://localhost:7251/api/research/' + onderzoek.onderzoekId, {
            formattedData
        })
            .then((response) => {
                console.log(response);
                setEditOnderzoekId(null); // Reset de edit state
            }, (error) => {
                console.log(error);
            });
    };

    // In de ResearchList component
    const handleDelete = async (id) => {
        Axios.delete('https://localhost:7251/api/research/' + id, {}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })

            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            }
            );
    };

    const handleCreateSave = async (newOnderzoek) => {
        Axios.post('https://localhost:7251/api/research/', {
            newOnderzoek
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then((response) => {
                console.log(response);
                setIsCreating(false);
            }, (error) => {
                console.log(error);
            });
    };

    const handleCancelCreate = () => {
        setIsCreating(false);
    };

    // if (isPending) return <div>Loading...</div>;
    // if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div>
            <button type="button" onClick={handleCreate}>Create</button>
            {isCreating && (
                <ResearchCreate
                    onSave={handleCreateSave}
                    onCancel={handleCancelCreate}
                />
            )}
            {data && data.map((onderzoek) =>
                <ResearchContainer 
                onderzoek={onderzoek}
                onSave={handleSave}
                onCancel={() => setEditOnderzoekId(null)}
                />
            )}
        </div>
    );
}

export default ResearchList;