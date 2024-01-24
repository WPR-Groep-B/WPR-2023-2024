import axios from "axios";
import React, { useEffect, useState , useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import Onderzoek from "./Onderzoek";

function OnderzoekVeld({ joinRoom, connection, refreshKey, ApiLink }) {

    const [onderzoekenDeelgenomen, setOnderzoekenDeelgenomen] = useState([]);

    const getOnderzoekenDeelgenomen = useCallback(async () => {
        const jwt = jwtDecode(localStorage.getItem('jwt'));
        axios.get(ApiLink + jwt.id, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((response) => {
            setOnderzoekenDeelgenomen(response.data);
        });
    }, [ApiLink]);
    
    useEffect(() => {
        getOnderzoekenDeelgenomen();
    }, [getOnderzoekenDeelgenomen, refreshKey]);

    return (
        <div className="onderzoek-veld">
            {onderzoekenDeelgenomen.map((onderzoek) => (
                <Onderzoek  key={onderzoek.onderzoekId} onderzoek={onderzoek} joinRoom={joinRoom} connection={connection}/>
            ))}
        </div>
    );
}

export default OnderzoekVeld;