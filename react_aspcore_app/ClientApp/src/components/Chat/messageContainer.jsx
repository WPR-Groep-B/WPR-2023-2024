import styles from '../../styles/Chat.module.css';

function MessageContainer({ messages, currentUser }) {
  return (
    <div className="Message-container">
      {messages.map((message, index) => (
        <div key={index} className={`UserMessage ${styles.messageContainer} ${message.user === currentUser ? styles.currentUserMessage : ''}`}>
          <div className="Message-user">{message.user}</div>
          <div className="Message-content">: {message.message}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default MessageContainer;