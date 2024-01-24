import axios from "axios";
import React, { useEffect, useState , useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import OnderzoekKaal from "./onderzoekKaal";

function OnderzoekenList ({refreshKey, ApiLink}) {

    const RefreshKey = refreshKey

    const [onderzoeken, setOnderzoeken] = useState([]);

    const getOnderzoeken = async () => {
        const jwt = await jwtDecode(localStorage.getItem('jwt'));
        axios.get(ApiLink + jwt.id, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            setOnderzoeken(response.data);
        });
    };
    useEffect(() => {
        getOnderzoeken();
    }, [RefreshKey]);

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