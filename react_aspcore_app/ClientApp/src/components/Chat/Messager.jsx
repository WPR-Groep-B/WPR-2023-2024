import MessageContainer from "./messageContainer"
import SendMessageForm from "./sendMessageForm"

function Chat({ messages, sendMessage, closeConnection }) {
    return (<>
        <div className="chat">
            <h3>Chat</h3>
            <hr></hr>
            <div className="chat">
                <button type="reset" onClick={() => closeConnection()}>Close connection</button>
            </div>
            <hr></hr>
            <MessageContainer messages={messages} />
            <SendMessageForm sendMessage={sendMessage} />

        </div>
    </>
    )
}

export default Chat;