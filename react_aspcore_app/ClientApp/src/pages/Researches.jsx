import OnderzoekVeld from "../components/onderzoeken/OnderzoekVeld";
import Message from "../components/Chat/Messager";
import { HubConnectionBuilder, LogLevel, HttpTransportType } from "@microsoft/signalr";
import { useState } from "react";
import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import styles from "../styles/Chat.module.css";
import OnderzoekenDeelnemenList from "../components/onderzoeken/OnderzoekenDeelnemenList";

function Researches() {

    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    const jwt = localStorage.getItem('jwt');

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
            <div>
                <h2>Mijn onderzoeken</h2>
                <OnderzoekVeld joinRoom={joinRoom} connection={connection} refreshKey={refreshKey}/>
            </div>
            <div>
                <h2>Onderzoeken om Deel te nemen</h2>
                <OnderzoekenDeelnemenList setRefreshKey={setRefreshKey} refreshKey={refreshKey}/>
            </div>
        </div>
    );
}

export default Researches;