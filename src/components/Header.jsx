import '../styles/Header.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logoimg.png"


function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="TheMealDB home">
          <span className="logo-text" aria-label="TheMealDB">
            <img className="logoImg" src={logo} alt="" />
            <span className="logo-accent">THE</span><span>MEAL</span><span className="logo-accent">DB</span>
          </span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link btn-home">Home</Link>
          <Link to="/api" className='nav-link'>API</Link>
        </nav>
      </div>

      <hr />
    </header>
    
  );
}

export default Header;
