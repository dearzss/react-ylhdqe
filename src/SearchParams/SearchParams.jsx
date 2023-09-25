import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from 'react-router-dom';
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
