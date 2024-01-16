import Chat from "../components/ChatComponent";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";

function ChatPage() {

    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);

    const joinRoom = async (UserName, Room) => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:7251/ChatHub")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user, message) => {
                setMessages(messages => [...messages, { user, message }]);
                console.log(messages);
            })

            await connection.start();
            await connection.invoke("joinroom", { UserName: UserName, Room: Room });
            setConnection(connection);
        }
        catch (error) {
            console.log(error);
        }


    }


    return (
        <div>
            <h1>ChatPagina</h1>
            <Chat joinRoom={joinRoom} />
        </div>
    )
}
export default ChatPage;