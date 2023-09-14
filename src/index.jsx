import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./pages/App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import variables from "./styles/variables";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{ variables }}>
    <GlobalStyle />
    <Header />
    <App />
    <Footer />
  </ThemeProvider>
);
