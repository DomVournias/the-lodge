import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import Home from "./components/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const theme = {
  colors: {
    white: "#FFFFFF",
    lodge: "#7289DA",
    online: "#43B581",
    danger: "#F04747",
    idle: "#fAA61A",
    nitro: "#FF73FA",
    bravery: "#9B84EE",
    balance: "#44DDBF",
    brilliance: "#44DDBF",
    high: "#F57B68",
    skin: "#F9C9A9",
    grey: "#99AAB5",
    chat: "#36393F",
    channels: "#2F3136",
    servers: "#202225",
    black: "#16181a",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />} exact></Route>
          </Routes>
        </AppBody>
      </ThemeProvider>
    </>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;
