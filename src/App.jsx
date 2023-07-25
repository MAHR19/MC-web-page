import { NavBar } from "./navigation/NavBar";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { globalTheme } from "./themes/GlobalTheme";
import { Home } from "./pages/home/Home";

export const App = () => {
  return (
    <>
     <ThemeProvider
      theme = {globalTheme}
      >
      <CssBaseline />
      <NavBar />
      <Home />
     </ThemeProvider>
    </>
  );
}


