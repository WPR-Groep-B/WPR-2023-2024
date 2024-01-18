import React, { useState } from 'react';
import styles from '../../styles/Chat.module.css';
import sendIcon from '../../images/send_icon.png';

function SendMessageForm({ sendMessage, closeConnection }) {

    const [message, setMessage] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                sendMessage(message);
                setMessage("");
            }}>
            <input
                className={styles.input}
                type="text"
                placeholder="Type message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button className={styles.sendButton} type="submit" disabled={!message}>
                <img alt="Papieren vliegtuig verzend icon" className={styles.send} src={sendIcon}></img>
            </button>
            <div className="chat">
                <button className={styles.closeButton} type="reset" onClick={() => closeConnection()}>Close connection</button>
            </div>
        </form>
    )
}

export default SendMessageForm;