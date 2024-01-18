import Chat from "../components/Chat/ChatComponent";
import Message from "../components/Chat/Messager";
import styles from "../styles/Chat.module.css";
import { HubConnectionBuilder, LogLevel, HttpTransportType } from "@microsoft/signalr";
import { useState } from "react";
import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function ChatPage() {

    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    
    const jwt = localStorage.getItem('jwt');

    const joinRoom = async (Room) => {
        if (jwt === null) { return; }

        const user = jwtDecode(jwt);


        const UserId = user.id;
        const UserName = user.voornaam + " " + user.achternaam;

        try {
            const connection = new HubConnectionBuilder()
                .withUrl(`/ChatHub?access_token=${jwt}`, {
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
            setConnection(connection);
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
        <div className={styles.container}>
            <h1>ChatPagina</h1>
            <hr />
            {
                !localStorage.getItem('jwt')
                    ?
                    <div className={styles.contforond}>
                        <button alt="Login voor weergave onderzoeken" className={styles.button} onClick={() => { window.location.href = "/login"; }}>
                            Log hier in om je chats te zien
                        </button>
                    </div>
                    : !connection
                        ? <Chat joinRoom={joinRoom} />
                        : <Message messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} />
            }
        </div>
    )
}
export default ChatPage;