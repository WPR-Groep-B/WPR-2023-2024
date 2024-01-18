import { render, screen, fireEvent } from "@testing-library/react";
import Chat from "./Messager";

describe("Chat component", () => {
  const messages = [
    { id: 1, text: "Hello" },
    { id: 2, text: "How are you?" },
  ];
  const sendMessage = jest.fn();
  const closeConnection = jest.fn();

  beforeEach(() => {
    render(
      <Chat
        messages={messages}
        sendMessage={sendMessage}
        closeConnection={closeConnection}
      />
    );
  });

  test("renders chat component with messages", () => {
    const chatElement = screen.getByTestId("chat");
    expect(chatElement).toBeInTheDocument();

    const messageContainerElement = screen.getByTestId("message-container");
    expect(messageContainerElement).toBeInTheDocument();
    expect(messageContainerElement.children.length).toBe(messages.length);

    const sendMessageFormElement = screen.getByTestId("send-message-form");
    expect(sendMessageFormElement).toBeInTheDocument();
  });

  test("calls closeConnection when close button is clicked", () => {
    const closeButton = screen.getByText("Close connection");
    fireEvent.click(closeButton);
    expect(closeConnection).toHaveBeenCalledTimes(1);
  });

  test("calls sendMessage when sending a message", () => {
    const messageInput = screen.getByLabelText("Message");
    const sendButton = screen.getByText("Send");

    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(sendButton);

    expect(sendMessage).toHaveBeenCalledTimes(1);
    expect(sendMessage).toHaveBeenCalledWith("Test message");
  });
});