import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global"; 
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";

export default function App() {

  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    return theme
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme  : darkTheme}>
      <GlobalStyle />
      <Main themeToggler={themeToggler}/>  
    </ThemeProvider>
  )
}