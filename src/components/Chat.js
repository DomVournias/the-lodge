import React from "react";
import styled from "styled-components";

function Chat() {
  return (
    <ChatContainer>
      <h2>CHAT</h2>
      <h2>CHAT</h2>
      <h2>CHAT</h2>
      <h2>CHAT</h2>
      <h2>CHAT</h2>
      <h2>CHAT</h2>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.chat};
  color: white;
`;
