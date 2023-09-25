import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import HomePageLayout from './HomePageLayout.jsx';

export default function SearchParams() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route path="characters" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
