import React from 'react';
import {Routes,Route} from "react-router-dom";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Invoices from  "./scenes/invoices/index";
import Form from './scenes/form';
const App = () => {
  const [theme, colorMode] = useMode();
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className='app'>
        <Sidebar/>
        <main className='content'>
          <Topbar/>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route exact path="/team" element={<Team/>}/>
            <Route exact path="/invoices" elememt={<Invoices/>}/>
            <Route exact path="/form" element={<Form/>}/>
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App