import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import FlipRevealApp from './components/About';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4500',
    },
    secondary: {
      main: '#1a1a1a',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/Got_portfolio">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FlipRevealApp />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;