import axios from "axios";
import React, { useState , useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import OnderzoekenDeelnemen from "./OnderzoekDeelnemen";

function OnderzoekenDeelnemenList ({setRefreshKey, refreshKey}) {

    const [onderzoeken, setOnderzoeken] = useState([]);

    const getOnderzoeken = async () => {
        axios.get("/api/Research/valid/", {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            setOnderzoeken(response.data);
        });
    }

    const Deelnemen = async (onderzoekId) => {
        const jwt = jwtDecode(localStorage.getItem('jwt'));
        axios.post("api/Research/Deelnemen" , {
            onderzoekId: onderzoekId,
            gebruikerId: jwt.id
    }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            setRefreshKey(oldKey => oldKey + 1);
            console.log(response.data);
        });
    }

    useEffect(() => {
        getOnderzoeken();
    }, [refreshKey]);

    return (
        <div className="onderzoek-veld">
            {onderzoeken.map((onderzoek) => (
            <OnderzoekenDeelnemen 
            key={onderzoek.onderzoekId} 
            onderzoek={onderzoek} 
            Deelnemen={Deelnemen}/>
            ))
        }
        </div>
    );
}

export default OnderzoekenDeelnemenList;