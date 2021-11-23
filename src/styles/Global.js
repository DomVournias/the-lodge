import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0 ;
  font-family: 'Lato', sans-serif;

  /* Scrollbar */

::-webkit-scrollbar {
  width: 8px;

  background-color: transparent;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-border-radius: 100px;
  border-radius: 100px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 100px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 1);
  
  background-color: rgb(32,34,37);
}

::-webkit-scrollbar-thumb:hover {
  background-color: white;
}
::-webkit-scrollbar-thumb:window-inactive {
}
}
`;

export default GlobalStyles;
