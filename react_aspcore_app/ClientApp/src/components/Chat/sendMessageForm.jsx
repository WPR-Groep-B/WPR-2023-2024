import React, { useState } from 'react';

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
            <button type="submit" disabled={!message}>Send</button>
        </form>
    )
}

export default SendMessageForm;