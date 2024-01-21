import OnderzoekVeld from "../components/onderzoeken/OnderzoekVeld";
import Message from "../components/Chat/Messager";
import { HubConnectionBuilder, LogLevel, HttpTransportType } from "@microsoft/signalr";
import { useState } from "react";
import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import styles from "../styles/Chat.module.css";
import OnderzoekenDeelnemenList from "../components/onderzoeken/OnderzoekenDeelnemenList";
import OnderzoekenList from "../components/onderzoeken/OnderzoekenList";
import axios from "axios";

function Researches() {

    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        document.title = 'Account - Stichting Accessibility';
    
        // If not logged in, redirect to login page
        axios.post('https://localhost:7251/api/User/Authorize', {}, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwt')
          }
        }).then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log('Authorized');
          }
        })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
              localStorage.removeItem('jwt');
              window.location.href = '/login';
            }
          });
      }, []);

    const joinRoom = async (Room) => {
        if (jwt === null) { return; }

        const user = jwtDecode(jwt);


        const UserId = user.id;
        const UserName = user.voornaam + " " + user.achternaam;

        try {
            const connection = new HubConnectionBuilder()
                //https://localhost:7251/ChatHub
                .withUrl(`https://localhost:7251/ChatHub?access_token=${jwt}`, {
                    skipNegotiation: true,
                    transport: HttpTransportType.WebSockets
                })
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (userName, message) => {
                setMessages(messages => [...messages, { user: userName, message }]);
            });

            connection.on("getHistory", (history) => {
                setMessages(messages => [...history.map(item => ({ user: item.userName, message: item.text }))]);
                console.log(messages);
            });

            connection.onclose(e => {
                setConnection(null);
                setMessages([]);
            })


            await connection.start();
            await connection.invoke("getHistory", Room);
            await connection.invoke("joinroom", { UserId, UserName, Room });
            setConnection(connection);


        }
        catch (error) {
            console.log(error);
        }
    }

    const closeConnection = async () => {
        try {
            await connection.stop();
            setConnection(null);
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = async (message) => {
        try {
            connection.invoke("SendMessage", message);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.title = 'Chat - Stichting Accessibility';
    }, []);



    return (
        <div>
            <h1>Onderzoeken</h1>
            <div>
                {connection ?
                    <Message messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} />
                    : null
                }
            </div>
            {jwtDecode(jwt).Rol === "Panellid" ?
            <ToonOnderzoekersScherm setRefreshKey={setRefreshKey} refreshKey={refreshKey} joinRoom={joinRoom} connection={connection}/>
            :
            <ToonBedrijfScherm setRefreshKey={setRefreshKey} refreshKey={refreshKey} joinRoom={joinRoom} connection={connection}/>
            }
        </div>
    );
}

export default Researches;

//had geen zin om dit in een aparte file te zetten

function ToonOnderzoekersScherm({setRefreshKey, refreshKey, joinRoom, connection}) {

    const ApiLink = "https://localhost:7251/api/Research/valid/";

    return (
        <>
        <div>
            <h2>Mijn onderzoeken</h2>
            <OnderzoekVeld joinRoom={joinRoom} connection={connection} refreshKey={refreshKey} ApiLink={ApiLink}/>
        </div>
        <div>
            <h2>Onderzoeken om Deel te nemen</h2>
            <OnderzoekenDeelnemenList setRefreshKey={setRefreshKey} refreshKey={refreshKey}/>
        </div>
        </>
    );
}

function ToonBedrijfScherm({setRefreshKey, refreshKey, joinRoom, connection}) {

    return (
        <>
        <div>
            <h2>Mijn onderzoeken</h2>
            <OnderzoekVeld joinRoom={joinRoom} connection={connection} refreshKey={refreshKey} ApiLink={"https://localhost:7251/api/Research/Bedrijf/goed/"}/>
        </div>
        <div>
            <h2>onderzoeken nog geen deskundige gevonden</h2>
            <OnderzoekenList setRefreshKey={setRefreshKey} refreshKey={refreshKey} ApiLink={"https://localhost:7251/api/Research/Bedrijf/valid/"}/>
        </div>
        <div>
            <h2>onderzoeken nog niet goedgekeurd</h2>
            <OnderzoekenList setRefreshKey={setRefreshKey} refreshKey={refreshKey} ApiLink={"https://localhost:7251/api/Research/Bedrijf/unvalid/"}/>
        </div>
        </>
    );
}