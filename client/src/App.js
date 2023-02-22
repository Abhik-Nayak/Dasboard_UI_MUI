import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar1 from './components/Sidebar1';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from "./components/Navbar";
import Add from './components/Add';
import { Box, Container, Drawer, Stack, ThemeProvider, createTheme } from "@mui/material";
import Settings from './components/Settings';

const App = () => {
  const [mode, setMode] = useState("light");
  const [open1, setOpen1] = useState("false");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <BrowserRouter>
          <Navbar setOpen1={setOpen1} open1={open1} />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar1 setMode={setMode} mode={mode} open1={open1} />
            <Routes>
              <Route exact path="/" element={<Feed />}/>
              <Route exact path="/settings" element={<Settings/>}/>
            </Routes>
          </Stack>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App