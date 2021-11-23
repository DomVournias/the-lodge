import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatHeaderLeft>
          <h4>
            <strong>#room name</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <InfoOutlinedIcon />
          <p>Details</p>
        </ChatHeaderRight>
      </ChatHeader>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;

  background-color: ${({ theme }) => theme.colors.chat};
  color: white;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px ${({ theme }) => theme.colors.lighter} solid;
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > h4 {
    text-transform: lowercase;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 18px;
  }
`;

const ChatHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > p {
    font-size: 14px;
  }
  > .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
