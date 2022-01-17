import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Routes
import Home from './routes/Home';
import Contact from './routes/Contact';
import Hdpe from './routes/Hdpe';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hdpe" element={<Hdpe />} />
      </Routes>
    </Router>
  );
}
