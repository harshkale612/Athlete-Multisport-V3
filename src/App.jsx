import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ChessHome from './sports/chess';
import FootballHome from './sports/football';
import CricketHome from './sports/cricket';
import BasketballHome from './sports/basketball';
import TennisHome from './sports/tennis';
import SportThemeManager from './components/common/SportThemeManager';
import PageTransition from './components/layout/PageTransition';

// Wrapper for Page Transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/sport/chess" element={<PageTransition><ChessHome /></PageTransition>} />
        <Route path="/sport/football" element={<PageTransition><FootballHome /></PageTransition>} />
        <Route path="/sport/cricket" element={<PageTransition><CricketHome /></PageTransition>} />
        <Route path="/sport/basketball" element={<PageTransition><BasketballHome /></PageTransition>} />
        <Route path="/sport/tennis" element={<PageTransition><TennisHome /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SportThemeManager />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
