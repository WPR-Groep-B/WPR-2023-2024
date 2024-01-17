import Chat from "../components/Chat/ChatComponent";
import Message from "../components/Chat/Messager";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

function ChatPage() {

    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState();

    const jwt = localStorage.getItem('jwt');

    const joinRoom = async (UserName, Room) => {
        if (jwt === null) { return; }

        const user = jwtDecode(jwt);

        try {
            const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:7251/ChatHub")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user, message) => {
                setMessages(messages => [...messages, { user, message }]);
                console.log(messages);
            })

            connection.onclose(e => {
                setConnection(null);
                setMessages([]);
            })

            await connection.start();
            await connection.invoke("joinroom", {UserName, Room });
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


    return (
        <div>
            <h2>ChatPagina</h2>
            <hr className="line" />
            {
                !localStorage.getItem('jwt')
                    ? <NavLink to="/login">Login</NavLink>
                    : !connection
                        ? <Chat joinRoom={joinRoom} />
                        : <Message messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} />
            }
        </div>
    )
}
export default ChatPage;