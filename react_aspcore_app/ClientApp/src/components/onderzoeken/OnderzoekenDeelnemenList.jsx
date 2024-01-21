import axios from "axios";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import OnderzoekenDeelnemen from "./OnderzoekDeelnemen";

function OnderzoekenDeelnemenList ({updateList}) {

    const [onderzoeken, setOnderzoeken] = useState([]);

    const getOnderzoeken = async () => {
        axios.get("https://localhost:7251/api/Research/valid/", {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            setOnderzoeken(response.data);
        });
    }

    const Deelnemen = async (onderzoekId) => {
        const jwt = jwtDecode(localStorage.getItem('jwt'));
        axios.post("https://localhost:7251/api/Research/Deelnemen" , {
            onderzoekId: onderzoekId,
            gebruikerId: jwt.id
    }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            console.log(response.data);
        });
    }

    useEffect(() => {
        getOnderzoeken();
    }, []);

    return (
        <div className="onderzoek-veld">
            {onderzoeken.map((onderzoek) => (
            <OnderzoekenDeelnemen onderzoek={onderzoek} Deelnemen={Deelnemen}/>
            ))
        }
        </div>
    );
}

export default OnderzoekenDeelnemenList;