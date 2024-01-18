import styles from '../../styles/Chat.module.css';

function messageContainer({ messages }) {
  return (
    <div className="Message-container">
      {messages.map((message, index) => (
        <div key={index} className={`UserMessage ${styles.messageContainer}`}>
          <div className="Message-user">{message.user}</div>
          <div className="Message-content">: {message.message}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default messageContainer;