import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "./message";
import { ReactComponent as SendIcon } from "../assets/send-icon.svg";
import { callWithAxios, clearSpacesInput } from "../helpers/utils";
import MessageType from "../models/message";
import { ContentType, FIRST_MESSAGE, MESSAGE_LIST_ID, SenderType } from "../helpers/constants";

interface Props {}
const ChatPage: React.FC<Props> = (props: Props) => {
  const [textarea, setTextArea] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessageDate, setNewMessageDate] = useState<string>("");
  const [isBotAnswering, setIsBotAnswering] = useState<boolean>(false);

  useEffect(() => {
    // scroll  down on new message
    const messageListElement = document.getElementById(MESSAGE_LIST_ID);
    if (!messageListElement) return;
    const listHeight = messageListElement.scrollHeight;
    messageListElement.style.scrollBehavior = "smooth";
    messageListElement.style.overscrollBehavior = "contain";
    messageListElement.scroll(0, listHeight);
  });

  useEffect(() => {
    setTimeout(() => {
      setMessages([...messages, FIRST_MESSAGE]);
    }, 2000);
  }, []);

  useEffect(() => {
    callMessageAPI(messages[messages.length - 1]);
  }, [newMessageDate]);

  useEffect(() => {
    setTimeout(() => {
      setIsBotAnswering(false);
    }, 5000);
  }, [newMessageDate]);

  const handleSubmit = async (e: any) => {
    if (!!clearSpacesInput(textarea)) {
      e.preventDefault();
      const message = {
        sendBy: SenderType.Client,
        content: textarea,
        messageDate: new Date(),
        messageType: ContentType.Text,
      };
      setMessages([...messages, message]);
      setNewMessageDate(message.messageDate.toString());
    }
  };

  async function callMessageAPI(message: MessageType | undefined) {
    try {
      const res = await callWithAxios(message);
      res?.data.payload && setMessages([...messages, res.data.payload]);
      setTextArea("");
      setIsBotAnswering(true);
    } catch (err) {
      console.log(err);
    }
  }
  let indexArr: number[] = [];
  return (
    <ChatPageContainer>
      <ChatSection>
        <Header>EchoBot by osagio.ai</Header>
        <MessageListView key="message-list-content" id={MESSAGE_LIST_ID}>
          {messages.map((message, index) => {
            indexArr.push(index);
            return <Message message={message} indexArr={indexArr} isBotAnswering={isBotAnswering} isMyMessage={message.sendBy === "Client"} key={"message-component" + index} index={index} />;
          })}
        </MessageListView>

        <ChatSectionBottom>
          <StyledTextArea
            placeholder="write something..."
            value={textarea}
            maxLength={1024}
            onChange={(e) => {
              setTextArea(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit(event);
              }
            }}></StyledTextArea>
          <SendButtonContainer>
            <SendButton onClick={handleSubmit} is_input_valid={clearSpacesInput(textarea)} />
          </SendButtonContainer>
        </ChatSectionBottom>
      </ChatSection>
    </ChatPageContainer>
  );
};
const Header = styled.div`
  height: 60px;
  background-color: #ffbe3c;
  color: #007171;
  font-family: MuseoSansRounded;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatPageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const ChatSectionBottom = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatSection = styled.div`
  border: 0.5px solid rgb(211, 211, 211);
  width: 70%;
  min-width: 300px;
  background-color: rgb(248, 248, 248);
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const SendButtonContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  height: 60px;
  padding: 10px;
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`;

const MessageListView = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const SendButton = styled(SendIcon)<{ is_input_valid: string }>`
  cursor: ${(props) => (props.is_input_valid ? "pointer" : "default")};
  width: 46px;
  height: 25px;
  fill: ${(props) => {
    if (props.is_input_valid) return "#FFBE3C";
    return "#A3A3A3";
  }};
  font-size: var(--mb-mwc-fontSize-sm);
`;
export default ChatPage;
