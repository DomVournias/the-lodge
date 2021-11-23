import React from "react";
import styled from "styled-components";
import logo from "../assets/images/lodgeLogo.png";

function Login() {
  return (
    <LoginContainer>
      <InnerLoginContainer>
        <h3>Welcome to the</h3>
        <img src={logo}></img>
      </InnerLoginContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InnerLoginContainer = styled.div`
  display: flex;
  border-radius: 8px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 25vw;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.channels};
  > h3 {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.normal};
  }
  > img {
    width: 120px;
    height: auto;
  }
`;
