import styled from "styled-components";
import { device } from "../styles/Theme";

export const ChatInputContainer = styled.div``;

export const ChatInputContainerInner = styled.div`
  position: relative;
  justify-content: center;
  display: flex;

  > form {
    position: fixed;
    bottom: 0px;

    background-color: transparent;
    color: white;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.chat};

    @media ${device.mobileS} {
      max-width: 60%;
    }
    @media ${device.mobileM} {
      min-width: 65%;
    }
    @media ${device.mobileL} {
      min-width: 67%;
    }
    @media ${device.tablet} {
      min-width: 69%;
    }
    @media ${device.laptop} {
      min-width: 70%;
    }
    @media ${device.laptopL} {
      min-width: 77%;
    }
    @media ${device.desktopS} {
      min-width: 80%;
    }
    @media ${device.desktop} {
      min-width: 83%;
    }
  }

  > form > input {
    border-radius: 8px;
    width: 100%;
    margin-bottom: 30px;
    padding: 15px 25px;
    background-color: transparent;
    color: white;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.chatbox};
  }

  > form > button {
    display: none;
  }
`;
