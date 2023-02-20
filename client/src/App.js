import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from "./components/Navbar";
import Add from './components/Add';
import Sidedrawer from './components/Sidedrawer';
import { Box, Container, Drawer, Stack, ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} /*color={mode === 'dark'? "white" : "dark"}*/ color={"text.primary"}>
        {/* <Sidedrawer/> */}
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App