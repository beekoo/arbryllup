import '../styles/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Velkommen</Link></li>
          <li><Link to="/program">Program</Link></li>
          <li><Link to="/opphold">Sted & Opphold</Link></li>
          <li><a href="https://www.onskelister.no/app/liste?id=V6NGFFTbf9gkidNAiPIy">Ønske Liste</a></li>
          <li>
            <a
              href="https://forms.gle/exampleGoogleFormLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP
            </a>
          </li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Navbar;