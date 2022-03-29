import React from "react";
import styled, { keyframes } from "styled-components";
import { format } from "timeago.js";

interface Message {
  content: string;
  messageDate: Date;
  sendBy: string;
  messageType: string;
}
interface Props {
  message: Message;
  isMyMessage: boolean;
  isBotAnswering: boolean;
  index: number;
  indexArr: number[];
}
const MessageComponent: React.FC<Props> = (props: Props) => {
  const { message, isMyMessage, isBotAnswering, index, indexArr } = props;

  return (
    <MessageWrapper isMyMessage={isMyMessage}>
      <MessageTop>
        {isBotAnswering && !isMyMessage && indexArr[indexArr.length - 1] === index ? (
          <TypingContainer isMyMessage={isMyMessage}>
            <TypingDot></TypingDot>
            <TypingDot></TypingDot>
            <TypingDot></TypingDot>
          </TypingContainer>
        ) : (
          <MessageText isMyMessage={isMyMessage}>{message.content}</MessageText>
        )}
      </MessageTop>
      <MessageBottom>{format(message.messageDate)}</MessageBottom>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: ${(props) => (props.isMyMessage ? "flex-end" : "flex-start")};
`;

const MessageText = styled.p<{ isMyMessage: boolean }>`
    padding: 10px;
    margin: 6px;
    border-radius: 15px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: ${(props) => (props.isMyMessage ? "15px;" : "0px;")}
    border-bottom-right-radius: ${(props) => (props.isMyMessage ? "0px;" : "15px;")}
    background-color: ${(props) => (!props.isMyMessage ? "#fef8ce;" : "#ffffff;")}
    color: #4d4d4d;
    max-width: 300px;
`;

const MessageTop = styled.div`
  display: flex;
`;

const MessageBottom = styled.div`
  margin: 6px;
  margin-top: -5px;
  font-size: 11px;
  color: #646464;
`;

const loadingFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
`;

const TypingDot = styled.div`
  float: left;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background: #8d8c91;
  border-radius: 50%;
  opacity: 0;
  animation-name: ${loadingFade};
  animation-duration: 1s;
  animation-iteration-count: infinite;

  :nth-child(1) {
    animation-delay: 0s;
  }

  :nth-child(2) {
    animation-delay: 0.2s;
  }

  :nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const TypingContainer = styled.div<{ isMyMessage: boolean }>`
  padding: 10px;
  margin: 6px;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: ${(props) => (props.isMyMessage ? "15px;" : "0px;")}
  border-bottom-right-radius: ${(props) => (props.isMyMessage ? "0px;" : "15px;")}
  background-color: ${(props) => (!props.isMyMessage ? "#fef8ce;" : "#ffffff;")}
  color: #4d4d4d;
  max-width: 300px;
`;
export default MessageComponent;
