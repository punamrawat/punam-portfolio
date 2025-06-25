// src/theme.js
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: { main: "#38bdf8" },
            background: { default: "#0f172a", paper: "#1e293b" },
            text: { primary: "#ffffff", secondary: "#94a3b8" },
          }
        : {
            primary: { main: "#0d47a1" },
            background: { default: "#fafafa", paper: "#ffffff" },
            text: { primary: "#111", secondary: "#555" },
          }),
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });
