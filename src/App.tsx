import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Import pages
import Home from './pages/Home';
import TempleDetailPage from './pages/TempleDetailPage';
import NearbyPlacesPage from './pages/NearbyPlacesPage';
import HotelsPage from './pages/HotelsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temples/:id" element={<TempleDetailPage />} />
          <Route path="/nearby" element={<NearbyPlacesPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;