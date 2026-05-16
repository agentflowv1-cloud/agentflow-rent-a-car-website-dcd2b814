import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import LandingPage from './pages/LandingPage';
import CarModelDetails from './pages/CarModelDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/car-details/:id" element={<CarModelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;