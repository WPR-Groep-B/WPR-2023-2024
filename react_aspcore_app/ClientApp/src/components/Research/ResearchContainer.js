import ResearchEdit from './ResearchEdit';
import ReseachDetails from './ResearchDetails';
import { useState } from 'react';
import Axios from 'axios';

function ResearchContainer(onderzoek) {

    const [editOnderzoekId, setEditOnderzoekId] = useState(0);

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

    return (
        <div>
            {
                editOnderzoekId === onderzoek.onderzoekId ? (
                <ResearchEdit
                    key={onderzoek.onderzoekId}
                    onderzoek={onderzoek}
                    onSave={handleSave}
                    onCancel={() => setEditOnderzoekId(editOnderzoekId)}
                />
                ) : (
                <ReseachDetails
                    key={onderzoek.onderzoekId}
                    onderzoek={onderzoek}
                    onEdit={() => setEditOnderzoekId(onderzoek.onderzoekId)}
                    onDelete={() => handleDelete(onderzoek.onderzoekId)}
                />
                )
            }
        </div>
    );
}

export default ResearchContainer;