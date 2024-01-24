import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Axios from 'axios';

function ResearchEnroll() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('/api/research/', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then((response) => {
                console.log(response);
                setData(response.data);
            }, (error) => {
                console.log(error);
            });
    }, [data]);

    const handleJoin = async (onderzoekId) => {
        const gebruikerId = jwtDecode(localStorage.getItem('jwt')).id;
        const deelnameData = {
            GebruikerDeskundigeId: gebruikerId,
            OnderzoekId: onderzoekId,
            deelnameDatum: new Date(),
            deelnameFeedback: '' // Of een andere waarde indien nodig
        };

        // try {
        //     const response = await fetch('https://localhost:7251/api/deelname/', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        //         },
        //         body: JSON.stringify(deelnameData),
        //     });

        //     if (!response.ok) {
        //         throw new Error('Failed to join the research');
        //     }

        //     // Optioneel: Ververs de lijst of geef feedback aan de gebruiker
        // } catch (error) {
        //     console.error('Error joining the research: ', error);
        // }

        Axios.post('/api/deelname/', {
            deelnameData
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        
    };

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

export default ResearchEnroll;