import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function HomePageLayout() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="characters"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Characters
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
