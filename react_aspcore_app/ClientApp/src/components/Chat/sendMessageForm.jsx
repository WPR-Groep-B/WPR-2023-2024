import React, { useState } from 'react';
import styles from '../../styles/Chat.module.css';
import sendIcon from '../../images/send_icon.png';


function SendMessageForm({ sendMessage }) {

    const [message, setMessage] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                sendMessage(message);
                setMessage("");
            }}>

            <input
                type="text"
                placeholder="Type message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button className={styles.sendButton} type="submit" disabled={!message}>
                <img className={styles.send} src={sendIcon}></img>
            </button>
        </form>
    )
}

export default SendMessageForm;