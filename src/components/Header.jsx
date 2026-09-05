// Следы удаления лишних импортов и исправления структуры кода в компоненте Header.jsx
//dastan gau
import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logoimg.png"
import Home from '../pages/Home';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#" className="logo">
          <span className="logo-text" aria-label="TheMealDB">
            <img className='logoImg' src={logo} alt="" style={{width: "90px", height: "70px"}} />
            <span className="logo-accent">THE</span><span>MEAL</span><span className="logo-accent">DB</span>
          </span>
        </a>

        <nav className="nav-menu">
          <Link to="/" className="nav-link btn-home">Home</Link>
          <Link to="/api" className='nav-link'>API</Link>
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </nav>
      </div>

      <hr />
    </header>
    
  );
}

export default Header;
