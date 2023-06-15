import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? "navbar-brand navbar-active" : "navbar-brand"}>News Feed</Link>
      <div className="navbar-items">
        <Link to="/favorites" className={location.pathname === '/favorites' ? "navbar-item navbar-active" : "navbar-item"}>Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
