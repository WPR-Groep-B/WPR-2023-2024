import Chat from "../components/ChatComponent";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function ChatPage() {

    const joinRoom = async (UserName, Room) => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:7251/ChatHub")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user, message) => {
                console.log(user, message);
            })

            await connection.start();
            await connection.invoke("joinroom", { UserName: UserName, Room: Room });
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