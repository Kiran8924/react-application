import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import FormPage from './components/FormPage';
import SecondPage from './components/SecondPage';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/second-page">Second Page</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/form" element={<FormPage />} />
              <Route path="/second-page" element={<SecondPage />} />
              <Route path="*" element={<Navigate to="/form" />} />
            </Routes>
          </div>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
