import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { db } from "../firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import Message from "./Message";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behaviour: "smooth",
    });
  }, [roomId, loading]);

  console.log(roomDetails?.data());
  console.log(roomMessages);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <InfoOutlinedIcon />
              <p>Details</p>
            </ChatHeaderRight>
          </ChatHeader>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  /* position: relative; */
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

const ChatMessages = styled.div`
  position: relative;
  width: 100%;
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
