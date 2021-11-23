import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  gap: 10px;
  width: 100%;

  > img {
    height: 50px;
    border-radius: 8px;
    background-color: white;
  }
`;

const MessageInfo = styled.div`
  > h4 {
    font-size: 15px;
    margin-bottom: 5px;
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.normal};
  }
  > h4 > span {
    color: ${({ theme }) => theme.colors.lighter};
    font-weight: 300;
    margin-left: 4px;
    font-size: 13px;
  }
`;
