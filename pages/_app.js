// pages/_app.js
import React from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: "#171717" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0a0a0a", paper: "#0a0a0a" },
    text: { primary: "#ededed" },
  },
});

export default function App({ Component, pageProps }) {
  // Detect prefers-color-scheme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Memoize so we don't recreate theme on every render
  const theme = lightTheme//React.useMemo(
   // () => (prefersDarkMode ? darkTheme : lightTheme),
    //[prefersDarkMode]
  //);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
