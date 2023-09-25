import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from 'react-router-dom';
import HomePageLayout from './HomePageLayout.jsx';

export default function SearchParams() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
