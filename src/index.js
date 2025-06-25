// src/index.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Root = () => {
  const [mode, setMode] = useState("dark");
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleTheme={() => setMode((prev) => (prev === "light" ? "dark" : "light"))} />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
