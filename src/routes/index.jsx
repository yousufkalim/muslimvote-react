// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Home';
import Partner from '../containers/Partners';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/partner" element={<Partner />} />
    </Routes>
  );
}
export default Index;
