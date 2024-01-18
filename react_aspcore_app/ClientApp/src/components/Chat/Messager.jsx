import MessageContainer from "./messageContainer"
import SendMessageForm from "./sendMessageForm"
import styles from '../../styles/Chat.module.css';

function Chat({ messages, sendMessage, closeConnection }) {
    return (<>
        <div className="chat">
            <h3>Chat</h3>
            <hr></hr>
            <MessageContainer messages={messages} />
            <SendMessageForm sendMessage={sendMessage} closeConnection={closeConnection} />
        </div>
    </>
    )
}

export default Chat;