import { Button } from "@material-ui/core";
import React, { useState, useRef } from "react";
import { auth, db } from "../firebase";
import styled from "styled-components";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  ChatInputContainer,
  ChatInputContainerInner,
} from "../styles/ChatInput.styled";

function ChatInput({ channelName, channelId, chatRef }) {
  // const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const sendMessage = (e) => {
    e.preventDefault(); //Prevents refreshing

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      //Getting the chat text from the input
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
    //After we send message then the input clears
  };
  return (
    <ChatInputContainer>
      <ChatInputContainerInner>
        <form>
          <input
            // ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <Button hidden type="submit" onClick={sendMessage}>
            SEND
          </Button>
        </form>
      </ChatInputContainerInner>
    </ChatInputContainer>
  );
}

export default ChatInput;
