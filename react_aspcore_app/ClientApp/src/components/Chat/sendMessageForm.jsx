import React, { useState, useRef } from 'react';
import styles from '../../styles/Chat.module.css';
import sendIcon from '../../images/send_icon.png';

function SendMessageForm({ sendMessage, closeConnection }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(message);
    setMessage("");
    textareaRef.current.style.height = "inherit";
    const minHeight = window.getComputedStyle(textareaRef.current).minHeight;
    textareaRef.current.style.height = minHeight;
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
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
  );
}

export default SendMessageForm;