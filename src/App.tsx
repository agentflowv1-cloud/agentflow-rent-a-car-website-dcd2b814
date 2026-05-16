import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarModelDetails from './pages/CarModelDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-models/:id" element={<CarModelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;