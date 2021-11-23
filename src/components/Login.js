import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const logo = "../images/lodgeLogo.png";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <InnerLoginContainer>
        <LogoContainer>
          <h3>Sign in to the</h3>
          <img src={logo}></img>
          <p>Made for great pirates.</p>
        </LogoContainer>
        <Button onClick={signIn}>Sign in with Google</Button>
      </InnerLoginContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  background-image: url("https://live.staticflickr.com/21/31243651_a7077d8efe_k.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InnerLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.channels};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > button {
    margin-top: 30px;
    text-transform: inherit;
    background-color: ${({ theme }) => theme.colors.lodge};
    color: white;
    :hover {
      background-color: ${({ theme }) => theme.colors.lodge};
      opacity: 0.9;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  place-content: center;
  gap: 20px;

  > h3 {
    font-size: 25px;
    color: white;
  }
  > img {
    width: 30%;
    size: 20px;
  }
  > p {
    color: ${({ theme }) => theme.colors.lighter};
  }
`;
