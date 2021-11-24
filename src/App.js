import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth/";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";
import logoUrl from "./images/lodgeLogo.png";
import { theme } from "./styles/Theme";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <GlobalStyles />
        <AppLoading>
          <AppLoadingContent>
            <img src={logoUrl} />
            <Spinner
              name="ball-spin-fade-loader"
              color="#9B84EE"
              fadeIn="none"
            />
          </AppLoadingContent>
        </AppLoading>
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <AppBody>
          {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} exact></Route>
              </Routes>
            </>
          )}
        </AppBody>
      </ThemeProvider>
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${theme.colors.black};
`;

const AppLoading = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.black};
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  align-items: center;

  > img {
    width: 30%;
    margin-bottom: 50px;
  }
`;
