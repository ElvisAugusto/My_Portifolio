import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Python from './pages/python';
import Js from './pages/js';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/python" element={<Python />} />
      <Route path="/js" element={<Js />} />
    </Routes>
  );
}

export default AppRoutes;
