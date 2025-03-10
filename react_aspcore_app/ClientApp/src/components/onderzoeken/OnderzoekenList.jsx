import axios from "axios";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import OnderzoekKaal from "./onderzoekKaal";

function OnderzoekenList ({refreshKey, ApiLink}) {

    const [onderzoeken, setOnderzoeken] = useState([]);

    useEffect(() => {
        const jwt = jwtDecode(localStorage.getItem('jwt'));
        axios.get(ApiLink + jwt.id, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            setOnderzoeken(response.data);
        });
    }, [refreshKey, ApiLink]);

    return (
        <div className="onderzoek-veld">
            {onderzoeken.map((onderzoek) => (
            <OnderzoekKaal 
            key={onderzoek.onderzoekId} 
            onderzoek={onderzoek} />
            ))
        }
        </div>
    );
}

export default OnderzoekenList;