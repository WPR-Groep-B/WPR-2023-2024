import { useState } from "react";

// dit zou eigenlijk moeten worden geregeld door code die bvb bij een onderzoek staat die bij ieder onderzoek een chat genereerd en de gebruiker automatisch in de chat zet
// maar voor nu is dit een tijdelijke oplossing

function PreChat({ joinRoom }) {

    const [Room, setRoom] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        joinRoom(Room);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Room</label>
                <input type="text" onChange={(event) => setRoom(event.target.value)} />
                    
                <button type="submit" disabled={!Room}>Join</button>
            </form>
        </div>
    );
}
export default PreChat;