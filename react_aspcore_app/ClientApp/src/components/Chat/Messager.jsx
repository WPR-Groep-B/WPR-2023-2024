import MessageContainer from "./messageContainer"
import SendMessageForm from "./sendMessageForm"

function Chat({messages, sendMessage}) {
    return (
        <div>
            <h3>Chat</h3>
                <MessageContainer messages={messages} />
                <SendMessageForm sendMessage={sendMessage} />
                
        </div>
    )
}

export default Chat;