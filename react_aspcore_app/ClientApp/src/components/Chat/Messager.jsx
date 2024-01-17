import MessageContainer from "./messageContainer"
import SendMessageForm from "./sendMessageForm"

function Chat({ messages, sendMessage, closeConnection }) {
    return (<>
        <div className="chat">
            <button type="reset" onClick={() => closeConnection()}>Close connection</button>
        </div>
        <div className="chat">
            <h3>Chat</h3>
            <MessageContainer messages={messages} />
            <SendMessageForm sendMessage={sendMessage} />

        </div>
    </>
    )
}

export default Chat;