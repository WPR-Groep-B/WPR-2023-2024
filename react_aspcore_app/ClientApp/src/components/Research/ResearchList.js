import React, { useState, useEffect } from 'react';
import styles from '../../styles/ResearchList.module.css'
import ResearchCreate from './ResearchCreate';

import Axios from 'axios';
import ResearchContainer from './ResearchContainer';

function ResearchList() {

    const [editOnderzoekId, setEditOnderzoekId] = useState(null); // Nieuwe state voor het tonen van het edit formulier

    const [refreshKey, setRefreshKey] = useState(0);

    const [data, setData] = useState();

    const [isCreating, setIsCreating] = useState(false); // Nieuwe state voor het tonen van create formulier

    const fetchData = () => {
        const result = Axios.get('https://localhost:7251/api/research/', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        });
        setData(result.data);
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, [refreshKey]);

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

        Axios.put('https://localhost:7251/api/research/' + onderzoek.onderzoekId, formattedData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then((response) => {
                alert('Onderzoek is succesvol aangepast!');
                setEditOnderzoekId(null); // Reset de edit state
                setRefreshKey(oldKey => oldKey + 1); // Update the refreshKey state to cause the list to refresh
            }, (error) => {
                alert('Onderzoek is niet succesvol aangepast! Probeer opnieuw of neem anders contact op met de beheerder.');
                console.log(error);
            });
    };

    // In de ResearchList component
    const handleDelete = async (id) => {
        Axios.delete('https://localhost:7251/api/research/' + id, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
        }
        })

            .then((response) => {
                alert(response);
                setRefreshKey(oldKey => oldKey + 1); // Update the refreshKey state to cause the list to refresh
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
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then((response) => {
                console.log(response);
                setIsCreating(false);
                setRefreshKey(oldKey => oldKey + 1); // Update the refreshKey state to cause the list to refresh
                alert('Onderzoek is succesvol aangemaakt!');
            }, (error) => {
                alert('Onderzoek is niet succesvol aangemaakt! Probeer opnieuw of neem anders contact op met de beheerder.');
                console.log(error);
            });
    };

    const handleCancelCreate = () => {
        setIsCreating(false);
    };

    // if (isPending) return <div>Loading...</div>;
    // if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div><div className={styles.container}>
            {!isCreating && <button className={styles.createButton} type="button" onClick={handleCreate}>Create New Research</button>}
            {isCreating && (
                <ResearchCreate
                    onSave={handleCreateSave}
                    onCancel={handleCancelCreate}
                />
            )}
            </div>
                {data && data.map((onderzoek) =>
                <ResearchContainer
                    key={onderzoek.onderzoekId}
                    onderzoek={onderzoek}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    setEditOnderzoekId={setEditOnderzoekId}
                    editOnderzoekId={editOnderzoekId}
                />
            )}
        </div>
    );
}

export default ResearchList;