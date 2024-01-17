function messageContainer({ messages }) {
  return (
    <div className="Message-container">
      {messages.map((message, index) => (
        <div key={index} className={`UserMessage }`}>
          <div className="Message-content">
            <div className="Message-user">
              {message.user}:
            </div>
            {message.message}
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default messageContainer;