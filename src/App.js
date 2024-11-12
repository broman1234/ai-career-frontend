import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CareerOverview from './pages/CareerOverview';
import SkillsGuide from './pages/SkillsGuide';
import SalaryTrends from './pages/SalaryTrends';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB5C2',
      light: '#FFE4E8',
      dark: '#FF9AAA',
    },
    secondary: {
      main: '#97E5D7',
      light: '#B8F0E6',
      dark: '#7AC7B9',
    },
    background: {
      default: '#FFF8F8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#707070',
      secondary: '#909090',
    },
    error: {
      main: '#FF8B8B',
    },
    warning: {
      main: '#FFE5B4',
    },
    info: {
      main: '#B5DEFF',
    },
    success: {
      main: '#97E5D7',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<CareerOverview />} />
          <Route path="/skills" element={<SkillsGuide />} />
          <Route path="/salary" element={<SalaryTrends />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
