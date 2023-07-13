import React, { useState } from "react";
import { GlobalStyle, Body } from "./GlobalStyle";
import Router from "./routes/Router";

function App() {
  return (
    <Body>
      <GlobalStyle />
      <Router />
    </Body>
  );
}

export default App;
