import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from 'react-router-dom';
import HomePage from './HomePage.jsx';

export default function SearchParams() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
