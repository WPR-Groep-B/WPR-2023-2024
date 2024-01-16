import { Form, Button, } from "react-bootstrap";
import { useState } from "react";



function Chat({ joinRoom }) {

    const [UserName, setUserName] = useState();
    const [Room, setRoom] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        joinRoom(UserName, Room);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={(event) => setUserName(event.target.value)} />
                <label>Room</label>
                <input type="text" onChange={(event) => setRoom(event.target.value)} />
                    
                <button type="submit" disabled={!UserName || !Room}>Join</button>
            </form>
        </div>
    );
}
export default Chat;