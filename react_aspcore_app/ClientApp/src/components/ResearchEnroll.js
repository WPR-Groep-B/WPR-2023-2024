import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getData from "../ResearchList"; // Zorg ervoor dat getData geëxporteerd wordt in ResearchList.js

export default function ResearchEnroll() {
    const { data, isPending, error } = useQuery({
        queryKey: ['get-research-list'],
        queryFn: getData,
    });

    const handleJoin = async (onderzoekId) => {
        const gebruikerId = jwt_decode(localStorage.getItem('jwt')).id;
        const deelnameData = {
            GebruikerDeskundigeId: gebruikerId,
            OnderzoekId: onderzoekId,
            deelnameDatum: new Date().toISOString(),
            deelnameFeedback: '' // Of een andere waarde indien nodig
        };

        try {
            const response = await fetch('https://localhost:7251/api/deelname/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
                body: JSON.stringify(deelnameData),
            });

            if (!response.ok) {
                throw new Error('Failed to join the research');
            }

            // Optioneel: Ververs de lijst of geef feedback aan de gebruiker
        } catch (error) {
            console.error('Error joining the research: ', error);
        }
    };

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div>
            {data && data.map((onderzoek) => (
                <div key={onderzoek.onderzoekId}>
                    {/* Toon onderzoekdetails hier */}
                    <button onClick={() => handleJoin(onderzoek.onderzoekId)}>Join</button>
                </div>
            ))}
        </div>
    );
}