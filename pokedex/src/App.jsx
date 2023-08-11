import React from "react";
import { GlobalStyle, Body } from "./GlobalStyle";
import Router from "./routes/Router";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <Body>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </Body>
  );
}

export default App;
