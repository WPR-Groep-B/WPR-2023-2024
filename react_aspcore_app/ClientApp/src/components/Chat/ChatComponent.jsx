import { useState } from "react";
import styles from '../../styles/Chat.module.css';

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
                <input className={styles.inputChatRoom} type="text" placeholder="Voer hier de naam van de chatruimte in" onChange={(event) => setRoom(event.target.value)} />
                <button className={styles.joinButton} type="submit" disabled={!Room}>Join</button>
            </form>
        </div>
    );
}
export default PreChat;