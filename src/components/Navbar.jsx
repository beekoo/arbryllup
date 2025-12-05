import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook to detect route changes

  // Close the menu when clicking anywhere outside or after navigating to a new page
  useEffect(() => {
    // Close the menu after a route change
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Function to close the menu when clicking outside
    const handleClickOutside = () => {
      setMenuOpen(false);
    };

    // Add event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent clicks inside the menu from closing it
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing when clicking the hamburger
            setMenuOpen(!menuOpen);
          }}
          aria-label="Toggle navigation menu"
        >
          ☰
        </div>
        <ul
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          onClick={handleMenuClick} // Prevent closing when clicking inside the menu
        >
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Velkommen</Link></li>
          <li><Link to="/program" onClick={() => setMenuOpen(false)}>Program</Link></li>
          <li><Link to="/opphold" onClick={() => setMenuOpen(false)}>Sted & Opphold</Link></li>
          <li>
            <a
              href="https://www.onskelister.no/app/liste?id=V6NGFFTbf9gkidNAiPIy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Ønskeliste
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;