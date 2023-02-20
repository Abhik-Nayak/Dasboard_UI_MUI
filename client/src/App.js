import React, { useState } from 'react';
import Sidebar1 from './components/Sidebar1';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from "./components/Navbar";
import Add from './components/Add';
import { Box, Container, Drawer, Stack, ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("light");
  const [open1,setOpen1] = useState("true");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setOpen1={setOpen1} open1={open1}/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar1 setMode={setMode} mode={mode} open1={open1}/>
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App